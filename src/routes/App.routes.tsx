import {Routes, Route} from 'react-router-dom'
import App from '../App'
import NotFound from '../Componentes/ComponenteNofound/NotFound'



export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path='*' element={<NotFound/>}/> 
       {/* <AppRoutes/>  */}
    </Routes>
  )
}
