import {Routes, Route} from 'react-router-dom'
import App from '../App'
import NotFound from '../Componentes/ComponenteNofound/NotFound'
import { Tiempo } from '../paginas/Tiempo'
import Contacto from '../paginas/ComponenteContacto'
import Conversor from '../paginas/conversor'
import Login from '../Componentes/Atomos/ComponentesHeader/ComponentesLoging/Loging'
import Register from '../Componentes/Atomos/ComponentesHeader/Register/Register'



export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/conversor"element={<Conversor/>}/>
        <Route path="/" element={<App />}/>
        <Route path='*' element={<NotFound/>}/> 
        <Route path='/tiempo' element={<Tiempo/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/loging' element={<Login/>}/>
        <Route path='/registro' element={<Register/>}/>
       {/* <AppRoutes/>  */}
    </Routes>
  )
}
