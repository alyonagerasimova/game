import * as React from "react";
import './Food.css'

export function Food(props) {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        <div className="food" style={style}/>
    );
}