import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
        </div>
    );
}

export default Home;

    // handleDelete() akan create array baru where argument dia is id and dia akan delete selected blog of that id

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog =>
    //         blog.id !== id);
    //     setBlogs(newBlogs);
    // }