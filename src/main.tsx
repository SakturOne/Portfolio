
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './routes/App.routes.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>
)
