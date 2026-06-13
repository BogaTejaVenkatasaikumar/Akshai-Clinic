import React from "react";
import akshaiLogo from "../assets/akshai-logo.jpeg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-11 w-11",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-36 w-36 sm:h-44 sm:w-44",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative ${sizes[size]} shrink-0 flex items-center justify-center`}>
        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-secondary/35 via-accent/20 to-primary/30 blur-md opacity-80" />
        <img
          src={akshaiLogo}
          alt="Akshai Unisex Salon logo"
          className="relative h-full w-full rounded-full object-cover ring-1 ring-secondary/55 shadow-[0_8px_28px_rgba(8,7,6,0.55)]"
          loading={size === "xl" ? "eager" : "lazy"}
        />
      </div>

      {size !== "sm" && (
        <div className="flex flex-col">
          <span className={`font-display font-bold tracking-wider leading-none text-luxury-cream ${textSizes[size]}`}>
            AKSHAI
          </span>
          <span className="text-[9px] md:text-[10px] tracking-widest font-body text-secondary font-semibold flex items-center gap-1 uppercase">
            <span className="w-1 h-1 bg-secondary rounded-full inline-block"></span>
            Unisex Family Salon
          </span>
        </div>
      )}
    </div>
  );
}
