import React, {useState} from 'react';
import s from './Counter.module.css';
import {Button} from "./components/Button";
import {Scoreboard} from "./components/Scoreboard";

type CountType = number;
type CountPropsType = {}
export const Counter = () => {
    const minCount = -5;
    const resCount = 0;
    const maxCount = 5;

    const [count, setCount] = useState<CountType>(resCount);

    const buttonDecrement = () => {
        setCount(count > minCount ? count - 1 : count);
    }
    const buttonIncrement = () => {
        setCount(count < maxCount ? count + 1 : count);
    }

    const buttonReset = () => {
        setCount(resCount);
    }

    return (
        <div className={s.App}>
            <div className={s.count}>
                {count}
            </div>
            <div className={s.buttonContainer}>
            <Button name={'dec'} callback={buttonDecrement} disabled={count === minCount}/>
            <Button name={'res'} callback={buttonReset} disabled={count === resCount}/>
            <Button name={'inc'} callback={buttonIncrement} disabled={count === maxCount}/>
            </div>
        </div>
    );
}