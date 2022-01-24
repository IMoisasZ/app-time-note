import { Container } from 'react-bootstrap'

function ContainerLayOut({
	children = 'components',
	minHeight = '76.5vh',
	maxWidth,
	width,
	margin = '0 auto',
	justifyContent = 'center',
	alignItems = 'flex-start',
	textAlign = 'center',
}) {
	return (
		<Container
			style={{
				minHeight,
				maxWidth,
				width,
				margin,
				justifyContent,
				alignItems,
				textAlign,
			}}
		>
			{children}
		</Container>
	)
	// <div className={styles.container}>{children}</div>
}

export default ContainerLayOut
