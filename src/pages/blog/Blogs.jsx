import React from 'react';
import HeadingSection from './../../components/HeadingSection';
const blogs =[
    {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "Now AI is Shaping the Future of Web Development",
    description:
      "Discover how artificial intelligence is transforming the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Web Design",
    title: "Modern UI/UX Trends You Should Follow in 2025",
    description:
      "Explore the latest UI/UX design trends that improve user experience and engagement.",
    authorImage: "/images/authors/author2.png",
    authorName: "Sarah Smith",
    authorRole: "UI/UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Programming",
    title: "Why React is Still the Best Choice for Frontend Development",
    description:
      "Learn why React remains one of the most powerful and popular frontend libraries.",
    authorImage: "/images/authors/author3.png",
    authorName: "Michael Brown",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "AI & Future",
    title: "How Machine Learning is Changing Software Engineering",
    description:
      "Understand the impact of machine learning on modern software development.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Johnson",
    authorRole: "AI Researcher",
  },
]

const Blogs = () => {
    return (
        <div className='section-container  '>
            <HeadingSection subheading="Our Blogs" heading=" Latest Articles And Insights" />
            
            {/* Blog container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-25'>
                {
                    blogs.map((blog)=>(
                        <div key={blog.id} className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition cursor-pointer '>
                            <img src={blog.image} alt={blog.title}/>

                            {/* blog content */}
                            <div className='p-5'>
                                <p className='text-sm text-blue-500 font-medium uppercase mb-2'>{blog.category}</p>
                                <h3 className='text-xl font-bold text-gray-800 mb-3'>{blog.title}</h3>
                                <p className='text-sm text-gray-600 mb-5'>{blog.description}</p>

                                {/* Author info */}
                                <div className='flex items-center space-x-3'>
                                    <img src={blog.authorImage} alt={blog.authorName} className='w-10 h-10 rounded-full object-cover'/>
                                    <div>
                                        <h4 className='text-gray-800 font-bold text-sm'>{blog.authorName}</h4>
                                        <p className='text-xs text-gray-500'>{blog.authorRole}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                 
            </div>
            <div className='text-center'>
                <button className='btn btn-primary mt-18 '>Explore More</button>
            </div>
        </div>
    );
};

export default Blogs;