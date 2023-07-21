import {Routes, Route} from 'react-router-dom'
import App from '../App'
import NotFound from '../Componentes/ComponenteNofound/NotFound'
import { Tiempo } from '../paginas/Tiempo'



export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path='*' element={<NotFound/>}/> 
        <Route path='/tiempo' element={<Tiempo/>}/>
        {/* <Router pach='/contacto' element={Contacto}/> */}
       {/* <AppRoutes/>  */}
    </Routes>
  )
}
