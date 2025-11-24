import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function AnimatedButton({ text, onClick, className = "" }) {
    return (
        <Button
            className={`group relative overflow-hidden bg-[#0f172a] text-white hover:bg-[#0f172a] hover:text-white ${className}`}
            size="lg"
            onClick={onClick}
        >
            <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                {text}
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-[#f7bea7] group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-[#0f172a]">
                <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
            </i>
        </Button>
    );
}

export default AnimatedButton;
