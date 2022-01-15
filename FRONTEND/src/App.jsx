import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Apontamento from './pages/Apontamento'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/apontamento' element={<Apontamento />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
