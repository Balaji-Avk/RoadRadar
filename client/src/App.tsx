import {BrowserRouter , Route,  Routes} from 'react-router-dom'
import { Hero } from './screens/Hero'
import { Signin } from './screens/Signin'
import { Signup } from './screens/Signup'
import { Search } from './screens/Search'
import { Updatepg } from './screens/Updatepg'
import { Faq } from './screens/Faq'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Hero/>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path="/search" element ={<Search />} />
        <Route path="/update" element ={<Updatepg />} />
        <Route path="/faq" element ={<Faq />} />
        <Route path='/*' element={<Hero />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
