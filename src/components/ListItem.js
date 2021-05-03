

const ListItem = ({onChange, onDelete, value}) => {
    return (
        <div className="item-container">
            <h4>{value}</h4>
            <button onClick={onDelete}>Excluir</button>
        </div>
    );
};

export default ListItem