export function BlogList({blogs, title}) {
    if(blogs && blogs.length > 0) return(
        <div className="blog_list">
            <h2>{title}</h2>
            {
                blogs.map(
                    $0 => (
                        <div className='blog_preview' key={$0.id}>
                            <h2>{$0.title}</h2>
                            <p>Written by {$0.author}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}