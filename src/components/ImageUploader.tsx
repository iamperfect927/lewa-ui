"use client";

import { UploadCloud, X, FileImage } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import axios, { AxiosProgressEvent, CancelTokenSource } from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProgressBar from "@/components/ui/progress";

interface ImageUploaderProps {
  onUploadComplete: (url: string) => void;
}

interface FileUploadProgress {
  progress: number;
  File: File;
  source: CancelTokenSource | null;
}

export default function ImageUploader({ onUploadComplete }: ImageUploaderProps) {
  const [filesToUpload, setFilesToUpload] = useState<FileUploadProgress[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string }[]>([]);

  const uploadImageToCloudinary = async (
    file: File,
    cancelSource: CancelTokenSource
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET as string);

    return axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      formData,
      {
        cancelToken: cancelSource.token,
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / (progressEvent.total ?? 0)) * 100
          );

          setFilesToUpload((prev) =>
            prev.map((item) =>
              item.File.name === file.name ? { ...item, progress } : item
            )
          );
        },
      }
    );
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const uploadTasks = acceptedFiles.map((file) => {
      const cancelSource = axios.CancelToken.source();
      setFilesToUpload((prev) => [...prev, { File: file, progress: 0, source: cancelSource }]);

      return uploadImageToCloudinary(file, cancelSource)
        .then((res) => {
          const url = res.data.secure_url;
          setUploadedFiles((prev) => [...prev, { name: file.name, url }]);
          onUploadComplete(url);
        })
        .catch((err) => console.error("Upload failed", err))
        .finally(() => {
          setFilesToUpload((prev) => prev.filter((item) => item.File.name !== file.name));
        });
    });

    await Promise.all(uploadTasks);
  }, [onUploadComplete]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false, // allow only one image for logo
  });

  return (
    <div>
      {/* Dropzone */}
      <label
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <UploadCloud size={24} />
        <p className="mt-2 text-sm text-gray-600">Drag an drop or Browse</p>
        <input {...getInputProps()} />
      </label>

      {/* Upload Progress */}
      {filesToUpload.length > 0 && (
        <ScrollArea className="h-24 mt-3">
          {filesToUpload.map((item) => (
            <div
              key={item.File.name}
              className="flex justify-between items-center border p-2 rounded-lg mb-2"
            >
              <FileImage className="text-purple-600" />
              <div className="flex-1 ml-3">
                <p className="text-sm">{item.File.name}</p>
                <ProgressBar progress={item.progress} className="bg-purple-600" />
              </div>
              <button
                onClick={() => {
                  item.source?.cancel("Upload cancelled");
                  setFilesToUpload((prev) => prev.filter((f) => f.File.name !== item.File.name));
                }}
                className="ml-2 text-red-500"
              >
                <X />
              </button>
            </div>
          ))}
        </ScrollArea>
      )}

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-600 mb-2">Uploaded:</p>
          {uploadedFiles.map((file) => (
            <div key={file.url} className="flex items-center gap-3">
              <img src={file.url} alt="Uploaded" className="w-16 h-16 rounded-md object-cover" />
              <p className="text-sm">{file.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
