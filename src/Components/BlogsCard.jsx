import heroimg from "../assets/images/heroimg.jpg";
import product from "../assets/images/product.jpeg";
import woman1 from "../assets/images/woman1.jpeg";
import product6 from "../assets/images/product6.jpeg";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Empowering Women Through Shea Butter",
      image: product6,
      date: "July 12, 2024",
      excerpt:
        "Our work with Ghanaian women’s cooperatives is more than business—it’s about creating long-lasting change...",
    },
    {
      id: 2,
      title: "Inside Our Shea Butter Production Process",
      image: product,
      date: "June 20, 2024",
      excerpt:
        "From nut collection to organic certification, discover how our shea butter is crafted with care and precision.",
    },
    {
      id: 3,
      title: "Our Mission: From Walewale to the World",
      image: woman1,
      date: "May 30, 2024",
      excerpt:
        "At Ephis, we are rooted in community and committed to producing natural shea butter for the global market.",
    },
    {
      id: 4,
      title: "Why Organic Shea Butter Matters",
      image: heroimg,
      date: "May 10, 2024",
      excerpt:
        "Organic shea butter doesn’t just benefit your skin—it uplifts communities and preserves natural ecosystems.",
    },
  ];

  return (
    <>
      <section className="bg-yellow-50 py-16 px-6 md:px-20 text-gray-800 mt-10">
        
        <div className="px-4 md:px-15">
        <button
          onClick={() => navigate(-1)}
          className="text-sm md:text-md text-white flex items-center justify-center gap-2 h-8 w-20 rounded-full bg-amber-800 hover:text-amber-300 cursor-pointer"
        >
          ← Back
        </button>
      </div>

        <div className="max-w-7xl mx-auto text-center mb-12 mt-3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A151D]">View Our Events</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deeper into our mission, values, and the people behind Ephis Shea Butter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h2 className="text-xl font-bold text-[#1A151D] mt-2">{blog.title}</h2>
                <p className="text-gray-600 mt-3">{blog.excerpt}</p>
                <button className="mt-4 text-yellow-700 hover:text-yellow-800 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
