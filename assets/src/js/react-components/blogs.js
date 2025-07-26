import { __ } from "@wordpress/i18n";

const Blogs = ({blogs}) => (
    <div className="charming-portfolio-blogs-container">
        {
            blogs.forEach(blog => {
                return (
                <div className="blog-post" key={blog.id}>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-content">{blog.content}</p>
                    <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
                    <a href={blog.link} className="blog-link">Read more</a>
                </div>

                )
            })
        }
        {

            alert(JSON.stringify(blogs))
        }
    </div>
);

export default Blogs;
