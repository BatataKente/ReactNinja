import {useParams, useNavigate} from "react-router-dom"
import {useFetch} from '../../../../../Utils'

export const BlogDetails = () => {
    const {id} = useParams()
    const {error, isLoading, data: blog} = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()
    const deleteHandler = () => {
        fetch(
            `http://localhost:8000/blogs/${id}`,
            {
                method: 'DELETE'
            }
        )
        .then(
            () => navigate('/')
        )
    }
    return(
        <div className='blog-details'>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {error && <div>{error}</div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button 
                            onClick={deleteHandler}>
                            delete
                        </button>
                    </article>
                )
            }
        </div>
    )
}