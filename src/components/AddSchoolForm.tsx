"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import ImageUploader from "./ImageUploader";
import InputField from "./inputField";

const formSchema = z.object({
  logo: z.any().refine((file) => file instanceof File || typeof file === "string", {
      message: "Logo is required.",
    }),
  schoolName: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  phone: z.string().min(8, {
    message: "Phone number must be at least 8 digits.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  sector: z.string().min(2, {
    message: "Sector is required.",
  }),
  type: z.string().min(2, {
    message: "Type is required.",
  }),
  website: z.string().url({
    message: "Enter a valid URL (e.g. https://example.com).",
  }),
  adminName: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  adminPhone: z.string().min(8, {
    message: "Phone number must be at least 8 digits.",
  }),
  adminEmail: z.string().email({
    message: "Invalid email address.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function AddSchoolForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: "",
      address: "",
      phone: "",
      email: "",
      sector: "",
      type: "",
      website: "",
      adminName: "",
      adminPhone: "",
      adminEmail: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      form.setValue("logo", event.target.files[0]);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        
        {/* Logo upload*/}
        <div>
          <label className="block text-sm font-medium mb-2 text-center">Insert School Logo</label>
          <ImageUploader onUploadComplete={(file) => form.setValue("logo", file)} />
        </div>
        
        {/* ✅ School Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputField control={form.control} name="schoolName"  label="School Name:" />
          <InputField control={form.control} name="address" label="Address:"  />
          <InputField control={form.control} name="phone" label="Telephone Number:"  />
          <InputField control={form.control} name="email" label="Email:"  />
          <InputField control={form.control} name="sector" label="Sector:"  />
          <InputField control={form.control} name="type" label="Type(s):"  />
          <InputField control={form.control} name="website" label="Website:" />
        </div>

        {/* ✅ Admin Info */}
        <div className="space-y-4">
          <h2 className="text-center font-semibold text-lg">Admin Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField control={form.control} name="adminName" label="Admin Name*:"  />
            <InputField control={form.control} name="adminPhone" label="Admin Phone:"  />
            <InputField control={form.control} name="adminEmail" label="Admin Email:" />
          </div>
        </div>



        {/* Submit button */}
        <Button type="submit" className="w-full mt-auto">
          Register School
        </Button>
      </form>
    </Form>
  );
}
