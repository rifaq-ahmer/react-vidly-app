import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
	const { movies, onDelete, onLike, onSort } = props;
	return (
		<table className="table">
			<thead>
				<tr>
					<th onClick={() => onSort("title")}>TITLE</th>
					<th onClick={() => onSort("genre.name")}>GENRE</th>
					<th onClick={() => onSort("numberInStock")}>STOCK</th>
					<th onClick={() => onSort("dailyRentalRate")}>RATE</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{movies.map((movie) => (
					<tr key={movie._id}>
						<td>{movie.title}</td>
						<td>{movie.genre.name}</td>
						<td>{movie.numberInStock}</td>
						<td>{movie.dailyRentalRate}</td>
						<td>
							<Like liked={movie.liked} onClick={() => onLike(movie)} />
						</td>
						<td>
							<button
								onClick={() => onDelete(movie)}
								className="btn btn-danger btn-sm"
							>
								DELETE
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MoviesTable;
