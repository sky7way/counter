import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {Button} from "./components/Button";
import {CountDisplay} from "./components/CountDisplay";

type CountType = number;
export const Counter = () => {
    const minCount = -5;
    const resCount = 0;
    const maxCount = 5;

    const [count, setCount] = useState<CountType>(resCount);

    const countClassName = count === -5 || count === 5 ? s.redCount : s.count;

    useEffect(() => {
        const countString = localStorage.getItem("countValue");
        if(countString){
            const newCount = JSON.parse(countString);
            setCount(newCount);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("countValue", JSON.stringify(count));
    }, [count]);

    const buttonDecrement = () => {
        setCount(count > minCount ? count - 1 : count);
    }
    const buttonIncrement = () => {
        setCount(count < maxCount ? count + 1 : count);
    }

    const buttonReset = () => {
        setCount(resCount);
    }

    const isDecrementDisabled = () => count === minCount;
    const isResetDisabled = () => count === resCount;
    const isIncrementDisabled = () => count === maxCount;

    console.log(count)
    return (
        <div className={s.App}>
            <div className={countClassName}>
                <CountDisplay count={count} />
            </div>
            <div className={s.buttonContainer}>
            <Button name={'dec'} callback={buttonDecrement} disabled={isDecrementDisabled()}/>
            <Button name={'res'} callback={buttonReset} disabled={isResetDisabled()}/>
            <Button name={'inc'} callback={buttonIncrement} disabled={isIncrementDisabled()}/>
            </div>
        </div>
    );
}