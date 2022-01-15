import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Apontamento from './components/pages/Apontamento'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apontamento' element={<Apontamento />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
