import React from 'react';

type CountDisplayProps = {
    count: number
}
export const CountDisplay = (props: CountDisplayProps) => {
    return (
        <>
            {props.count}
        </>
    );
};