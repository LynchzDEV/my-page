import BlogCard from "./ui/blogCard";

const blogData = [
  {
    avatarSrc: "/manu.png",
    authorName: "Manu Arora",
    readTime: "2 min read",
    title: "Author Card",
    description:
      "Card with Author avatar, complete name and time to read - most suitable for blogs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  },
  {
    avatarSrc: "/jane.png",
    authorName: "Jane Doe",
    readTime: "5 min read",
    title: "React Patterns",
    description: "Explore common React patterns for scalable applications.",
    backgroundImage:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    avatarSrc: "/john.png",
    authorName: "John Smith",
    readTime: "3 min read",
    title: "TypeScript Tips",
    description: "Level up your TypeScript skills with these practical tips.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    avatarSrc: "/alice.png",
    authorName: "Alice Johnson",
    readTime: "4 min read",
    title: "CSS Tricks",
    description: "Master CSS with these essential tricks and techniques.",
    backgroundImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=800&q=80",
  },
  {
    avatarSrc: "/bob.png",
    authorName: "Bob Brown",
    readTime: "6 min read",
    title: "JavaScript Essentials",
    description: "A deep dive into JavaScript fundamentals and best practices.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-col p-8 bg-slate-50 w-1/3 rounded-lg shadow-xl">
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
