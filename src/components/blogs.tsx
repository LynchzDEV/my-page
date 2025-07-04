import BlogCard from "./ui/blogCard";
import { blogData } from "@/data/blogData";

const Blogs = () => {
  return (
    <div className="flex flex-col p-8 bg-slate-50 w-10vw rounded-lg shadow-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Blogs</h1>
      <div className="flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
        {blogData.map((blog, idx) => (
          <BlogCard
            key={idx}
            avatarSrc={blog.avatarSrc}
            authorName={blog.authorName}
            readTime={blog.readTime}
            title={blog.title}
            description={blog.description}
            backgroundImage={blog.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
