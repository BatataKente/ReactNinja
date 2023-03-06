import {Link} from 'react-router-dom'

export function NavigationBar() {
    return(
        <nav className='navigation_bar'>
            <h1>The Dojo Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}