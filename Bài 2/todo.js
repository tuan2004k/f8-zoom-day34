let uniqId = 0;
function TodoApp() {
  const [inputValue, setInputValue] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: uniqId++, text: inputValue, completed: false }]);
      setInputValue(''); 
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const total = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const remaining = total - completedCount;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập task mới..."
        />
        <button type="submit">Thêm</button>
      </form>

      {todos.length === 0 ? (
        <p>Chưa có task nào. Hãy thêm task đầu tiên!</p>
      ) : (
        <div>
          {todos.map(todo => (
            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Xóa</button>
            </div>
          ))}
        </div>
      )}

      <div className="stats">
        <p>Tổng: {total} | Hoàn thành: {completedCount} | Còn lại: {remaining}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);
