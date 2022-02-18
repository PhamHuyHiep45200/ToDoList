import Post from './pages/post';
import UpdatePost from './pages/updatePost/updatePost'
import './App.css';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Post/>}/>
        <Route path='/update/:id' element={<UpdatePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
