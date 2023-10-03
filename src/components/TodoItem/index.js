const TodoItem = (props) => {
  const { each, deleteTodo } = props;
  const onDeleteItem = () => {
    deleteTodo(each.id);
  };
  return (
    <li>
      <h3>{each.title}</h3>
      <button type="button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
