import './App.css'
import {BrowserRouter , Route,  Routes} from 'react-router-dom'
import { Hero } from './screens/Hero'
import { Signin } from './screens/Signin'
import { Signup } from './screens/Signup'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Hero/>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/*' element={<Hero />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
