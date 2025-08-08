import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      // Check if user is logged in
      if (!userData || !userData.$id) {
        alert("You must be logged in to create a post");
        navigate("/login");
        return;
      }

      if (post) {
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        if (file) {
          appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        // Check if image is provided for new posts
        if (!data.image || !data.image[0]) {
          alert("Please select an image for the post");
          return;
        }

        const file = await appwriteService.uploadFile(data.image[0]);

        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        } else {
          alert("Failed to upload image. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Failed to submit post. Please check your input and try again.");
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <motion.div 
      className="max-w-7xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="card p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            {post ? "Edit Post" : "Create New Post"}
          </h1>
          <p className="text-secondary-600 dark:text-secondary-400">
            {post ? "Update your existing post" : "Share your thoughts with the world"}
          </p>
        </div>

        <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Input
              label="Title"
              placeholder="Enter post title"
              className="text-lg"
              {...register("title", { required: true })}
            />
            <Input
              label="Slug"
              placeholder="post-slug"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />
            <div>
              <label className="inline-block mb-2 pl-1 font-medium text-secondary-700 dark:text-secondary-300">
                Content
              </label>
              <div className="card p-4">
                <RTE
                  name="content"
                  control={control}
                  defaultValue={getValues("content")}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <Input
                label="Featured Image"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
              />
              <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-2">
                Upload a high-quality image (PNG, JPG, JPEG, GIF)
              </p>
            </div>
            
            {post && (
              <motion.div 
                className="card p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
                  Current Image
                </p>
                <img
                  src={appwriteService.getFilePreview(post.featuredImage)}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            )}
            
            <Select
              options={["active", "inactive"]}
              label="Status"
              {...register("status", { required: true })}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold"
                bgColor={post ? "bg-primary-600 hover:bg-primary-700" : ""}
              >
                <span className="flex items-center justify-center gap-2">
                  {post ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      Update Post
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Create Post
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}