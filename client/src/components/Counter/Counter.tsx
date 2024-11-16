import { useState } from 'react';
import cls from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((counter) => ++counter);

    return (
        <div className={cls.counter}>
            <h1 className={cls.counter__title}>{count}</h1>
            <button className={cls.counter__btn} onClick={increment}>
                Increment
            </button>
        </div>
    );
};

export default Counter;
