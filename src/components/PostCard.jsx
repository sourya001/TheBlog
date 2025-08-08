import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PostCard({ $id, title, featuredImage, slug, content, userData }) {
  return (
    <Link to={`/post/${$id}`}>
      <motion.div 
        className="card overflow-hidden group h-full"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="relative overflow-hidden rounded-t-xl">
          <motion.img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <motion.h3 
            className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          {content && (
            <motion.p 
              className="text-secondary-600 dark:text-secondary-400 text-sm line-clamp-3 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {content.substring(0, 100)}...
            </motion.p>
          )}
          
          <motion.div 
            className="flex items-center justify-between text-xs text-secondary-500 dark:text-secondary-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              {userData?.name || 'Anonymous'}
            </span>
            <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              Read more →
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export default PostCard;
