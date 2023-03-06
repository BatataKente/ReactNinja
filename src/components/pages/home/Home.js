import {BlogList} from './blogList/BlogList'
import {useFetch} from '../../../Utils'

export function Home() {
    const {error, isLoading, data} = useFetch("http://localhost:8000/blogs")
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            <BlogList blogs={data} title="All Blogs!"/>
        </div>
    )
}