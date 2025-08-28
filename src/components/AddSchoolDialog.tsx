"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddSchoolForm } from "./AddSchoolForm";
import { useState } from "react";
// import { Label } from "@/components/ui/label";

interface AddSchoolDialogProps {
  title?: string;
  isAddSchoolDialogOpen: boolean;
  setIsAddSchoolDialogOpen: (open: boolean) => void;
}

export function AddSchoolDialog({ title = "Add School", isAddSchoolDialogOpen, setIsAddSchoolDialogOpen }: AddSchoolDialogProps) {

    const handleSubmit = (data: any) => {
    console.log("School data submitted:", data)
    setIsAddSchoolDialogOpen(false) // Close dialog after submit
  }
  return (
    <Dialog open={isAddSchoolDialogOpen} onOpenChange={setIsAddSchoolDialogOpen}>
      <DialogContent className="p-0 bg-white rounded-2xl h-full">
        <DialogHeader className="text-2xl pl-5 py-5 bg-primary-header-background rounded-tl-2xl rounded-tr-2xl ">
          <DialogTitle>{title}</DialogTitle>
          {/* <DialogDescription>Fill out the details to register a new school.</DialogDescription> */}
        </DialogHeader>

        <div className="p-4 overflow-y-auto ">
            <AddSchoolForm 
               onSubmit={handleSubmit}
            />
        </div>



        <div className="flex justify-end gap-2 bg-red">
          <Button   onClick={() => setIsAddSchoolDialogOpen(false)}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
