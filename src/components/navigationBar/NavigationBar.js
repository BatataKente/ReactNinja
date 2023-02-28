export function NavigationBar() {
    // const style = {
    //     color: "white",
    //     backgroundColor: "#f1356d",
    //     borderRadius: '8px'
    // }
    return(
        <nav className='navigation_bar'>
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <a href="/">Home</a>
                <a 
                    href="/create">New Blog</a>
            </div>
        </nav>
    )
}