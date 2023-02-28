import {useEffect, useState} from 'react'
import {BlogList} from '../../blogList/BlogList'

export function Home() {
    const [blogs, setBlogs] = useState(null)
    useEffect(
        () => {
            fetch("http://localhost:8000/blogs")
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
        }, []
    )
    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    )
}