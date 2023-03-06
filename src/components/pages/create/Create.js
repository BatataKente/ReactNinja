import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const submitHandler = event => {
        event.preventDefault()
        const blog = {title, body, author}
        setIsLoading(true)
        fetch(
            "http://localhost:8000/blogs",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blog)
            }
        )
        .then(
            () => {
                console.log('new blog added')
                setIsLoading(false)
            }
        )
        navigate('/')
    }
    return(
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form
                onSubmit={submitHandler}> 
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={event => setTitle(event.target.value)}/>
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={event => setBody(event.target.value)}/>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={event => setAuthor(event.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Thrall">Thrall</option>
                    <option value="Malfurion">Malfurion</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}