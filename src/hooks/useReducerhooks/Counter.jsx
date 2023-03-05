import { useReducer } from 'react';

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    NEW_USER_INPUT: 'newUserInput',
    TG_COLOR: 'tgColor'
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.INCREMENT: return { ...state, count: state.count + 1 };
        case ACTION.DECREMENT: return { ...state, count: state.count - 1 };
        case ACTION.NEW_USER_INPUT: return { ...state, userInput: action.payload };
        case ACTION.TG_COLOR: return { ...state, color: !state.color };
        default: throw new Error();
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false });
    return (
        <div>
            <h1>UseReducer</h1>
            <main className='App' style={{ color: state.color ? 'red' : 'green' }} >
                <input type="text" value={state.userInput} placeholder='Firstname'
                    onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })} />
                <br /><br />
                <p>Count {state.count}</p>
                <section>
                    <button onClick={() => dispatch({ type: ACTION.DECREMENT })} >Decrement</button>
                    <button onClick={() => dispatch({ type: ACTION.INCREMENT })} >Increment</button>
                    <button onClick={() => dispatch({ type: ACTION.TG_COLOR })} >Color Toggle</button>
                </section>
            </main>
            <p>{state.userInput}</p>
        </div>
    );
};

export default Counter;