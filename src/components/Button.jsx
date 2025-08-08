import React from "react";
import { motion } from "framer-motion";

export default function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    disabled = false,
    ...props
}) {
    const baseClasses = bgColor 
        ? `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${bgColor} ${textColor} ${className}`
        : `btn-primary ${className}`;
    
    const disabledClasses = disabled 
        ? "opacity-50 cursor-not-allowed" 
        : "hover:shadow-lg transform hover:-translate-y-0.5";

    return (
        <motion.button 
            className={`${baseClasses} ${disabledClasses}`}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}