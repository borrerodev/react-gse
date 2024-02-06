const TableRow = ({ libro, eliminarHandler}) => {
    return (
        <tr>
            <td>{libro.name}</td>
            <td>{libro.author}</td>
            <td>{libro.year}</td>
            <td>
                <button
                onClick={() => {
                    eliminarHandler(libro.name);
                }}
                >
                Eliminar
                </button>
            </td>
        </tr>
    );
};

export default TableRow;