import { Container } from 'react-bootstrap'

function ContainerLayOut({
	children = 'components',
	minHeight = '76.5vh',
	maxWidth,
	width,
	margin = '0 auto',
	display = 'flex',
	justifyContent = 'center',
	alignItems = 'center',
	textAlign = 'center',
}) {
	return (
		<Container
			style={{
				minHeight,
				maxWidth,
				width,
				margin,
				display,
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
