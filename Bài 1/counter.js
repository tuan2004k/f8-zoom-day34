
function CounterApp() {
    const [count, setCount] = React.useState(0);
    const handler_increase = () => setCount(count + 1);
    const handle_reduce = () => setCount(count - 1);
    const handle_resetzero = () => setCount(0);
    const get_status = () => {
        if (count > 0) return "Dương";
        if (count < 0) return "Âm";
        return "Bằng không";
    };
    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <div className={`count ${count > 0 ? 'duong' : count < 0 ? 'am' : 'bang_khong'}`}>
                {count}
            </div>
            <div className="status">{get_status()}</div>
            <div>
                <button onClick={handler_increase} style={{ backgroundColor: '#166f3bff' }}>Tăng (+1)</button>
                <button onClick={handle_reduce} style={{ backgroundColor: '#ff2200ff'}}>Giảm (-1)</button>
                <button onClick={handle_resetzero} style={{ backgroundColor: '#807878ff' }}>Reset (0)</button>
            </div>

        </div>
        );
    }

    ReactDOM.render(<CounterApp />, document.getElementById('root'));
