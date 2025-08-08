import React, { useId } from "react";
import { motion } from "framer-motion";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error = "", ...props },
  ref
) {
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
          className="inline-block mb-2 pl-1 font-medium text-secondary-700 dark:text-secondary-300" 
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-red-500 text-sm mt-1 pl-1"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
});

export default Input;
