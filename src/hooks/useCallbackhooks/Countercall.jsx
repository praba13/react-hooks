import { useState, useCallback } from 'react';

const Countercall = () => {
    const [count, setCount] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);
    const functionsCounter = new Set();

    /*  const increment = () => {
         setCount(count + 1);
     }; */

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    /* const decrement = () => {
        setCount(count - 1);
    }; */

    const decrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    /* const incrementOtherCounter = () => {
        setOtherCounter(otherCounter + 1);
    }; */

    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1);
    }, [otherCounter]);

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOtherCounter);

    console.log(functionsCounter);

    return (
        <div>
            Count: {count}

            <div>
                Other Count: {otherCounter}
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>IncrementOtherCounter</button>
        </div>
    );
};

export default Countercall;;