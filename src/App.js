import './App.css'
import Home from './Component/Home/Home'
import PagesTest from './Component/PagesTest/PagesTest'
import { Route } from 'react-router-dom'
import DownloadPage from './Component/DownloadPage/DownloadPage'
import IconApp from './Component/IconApp/IconApp'

function App() {
  return (
    <div className='appContainer'>
      <IconApp />
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/question' component={PagesTest} />
      <Route path='/downloadpage' component={DownloadPage} />
    </div>
  );
}

export default App;
