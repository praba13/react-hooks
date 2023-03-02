import { useEffect, useRef, useState } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);
    const intervalRef = useRef();
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <div>
                <h2>UseRef Hook</h2>
                <input type="text" ref={inputRef} />
            </div>
            <hr />
            <div>
                <h1>Hook Timer - {timer}</h1>
                <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
            </div>
        </>

    );
};

export default FocusInput;