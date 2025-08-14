"use client";

import React from "react";

interface AppButtonProps {
  label: string;
  icon?: React.ReactNode; // For passing icons dynamically
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </button>
  );
};

export default AppButton;
