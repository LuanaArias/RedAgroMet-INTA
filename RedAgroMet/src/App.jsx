import './App.css'
import { Header } from './components/Header/Header.jsx'
import { NavBarRoutes } from './routes/NavBarRoutes.jsx'
function App() {
   return (
    <>
      <div className="app-container">
      <Header /> 
      <main className="main-content"> 
        <NavBarRoutes />
      </main>
    </div>
    </>
  )
}

export default App
