import {
	BiChevronsLeft,
	BiChevronLeft,
	BiChevronRight,
	BiChevronsRight,
} from 'react-icons/bi'
import styles from './ButtonPagination.module.css'
function ButtonPagination({
	pages,
	currentPage,
	handleCurrentPage,
	handleOnFirstPage,
	handleOnPrevPage,
	handleOnNextPage,
	handleOnLastPage,
}) {
	return (
		<div className={styles.container_pagination}>
			<button onClick={handleOnFirstPage}>
				<BiChevronsLeft />
			</button>
			<button onClick={handleOnPrevPage}>
				<BiChevronLeft />
			</button>
			{Array.from(Array(pages), (item, index) => {
				return (
					<button
						key={index}
						value={index}
						onClick={handleCurrentPage}
						style={
							currentPage === index
								? { backgroundColor: 'gray', borderRadius: '0.5em' }
								: null
						}
					>
						{index + 1}
					</button>
				)
			})}
			<button onClick={handleOnNextPage}>
				<BiChevronRight />
			</button>
			<button onClick={handleOnLastPage}>
				<BiChevronsRight />
			</button>
		</div>
	)
}

export default ButtonPagination
