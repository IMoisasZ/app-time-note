import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Apontamento from './pages/apontamento/Apontamento'
import Apontamentos from './pages/listaApontamentos/Apontamentos'
import Consulta from './pages/consulta/Consulta'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/apontamento' element={<Apontamento />} />
				<Route path='/lista_apontamentos' element={<Apontamentos />} />
				<Route path='/consulta' element={<Consulta />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
