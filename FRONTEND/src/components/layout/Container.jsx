import styles from './Container.module.css'

function Container({ children = 'components' }) {
	return <div className={styles.container}>{children}</div>
}

export default Container
