import React from 'react'
import allBlogs from "../Components/allBlogs"

function BlogsPage() {
    return (
        <div className="BlogsPage">
            {
                allBlogs.map((blog) => {
                    return <div className="blog" key={blog.id} >
                        <div className="blog-content">
                            <img src={blog.image} alt=""/>
                            <a href="github.com" className="blog-link">
                                How To Install and Use Github easily.
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default BlogsPage;
