const MovieRow = ({ movie }) => {
    return (
        <tr>
            <td>{movie.name}</td>
            <td>{movie.gender}</td>
            <td>{movie.mass}</td>
        </tr>
    );
};

export default MovieRow;