function Message({ message, type }) {
	return (
		<div>
			<p
				style={
					type === 'error'
						? {
								backgroundColor: '#rgba(221, 92, 92, .5)',
								padding: '0.5em',
								borderRadius: '0.5em',
								marginTop: '1em',
						  }
						: {
								backgroundColor: 'rgba(69, 177, 69, .5)',
								padding: '0.5em',
								borderRadius: '0.5em',
								marginTop: '1em',
						  }
				}
			>
				{message}
			</p>
		</div>
	)
}

export default Message
