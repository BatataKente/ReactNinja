import {NavigationBar} from './components/navigationBar/NavigationBar'
import {Home} from './components/pages/home/Home'

export default function App() {
  return (
    <div className='App'>
      <NavigationBar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}
