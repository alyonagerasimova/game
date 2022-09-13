import React from "react";
import './Square.css';

interface PropsType {
    value: string,
    onClick: (i: any) => void,
    style: any
}

export function Square({value, style, onClick} : PropsType){
    return (
        <button className='square' onClick={onClick} style={style}>
            {value}
        </button>
    )
}