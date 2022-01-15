import { Link } from 'react-router-dom'

import logoInjetaq from '../../img/logo_injetaq.jpg'
import styles from './NavBar.module.css'
function NavBar() {
	return (
		<nav className={styles.container_navbar}>
			<Link to='/'>
				<img src={logoInjetaq} alt='LogoInjetaq' />
			</Link>
		</nav>
	)
}

export default NavBar
