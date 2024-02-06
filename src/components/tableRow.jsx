const TableRow = ({ libro: {name, author, year}, eliminarHandler}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>
                <button
                onClick={() => {
                    eliminarHandler(name);
                }}
                >
                Eliminar
                </button>
            </td>
        </tr>
    );
};

export default TableRow;