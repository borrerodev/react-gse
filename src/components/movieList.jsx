import MovieRow from "./movieRow";

const MovieList = ({movies}) => {
    return (
        <>
            <div className="row mb-2">
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Mass</th>         
                        </tr>
                    </thead>
                    <tbody>
                            {movies.map((movie, index) => (
                                <MovieRow key={index} movie={movie} />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MovieList;