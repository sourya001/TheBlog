import React, { useId } from "react";
import { motion } from "framer-motion";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label && (
        <label 
          htmlFor={id} 
          className="inline-block mb-2 pl-1 font-medium text-secondary-700 dark:text-secondary-300"
        >
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`input-field ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </motion.div>
  );
}

export default React.forwardRef(Select);
