import {NavigationBar} from './components/navigationBar/NavigationBar'
import {Home} from './components/pages/home/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Create} from './components/pages/create/Create';
import {BlogDetails} from './components/pages/home/blogList/blogDetails/BlogDetails';
import {NotFound} from './components/pages/notFound/NotFound'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
