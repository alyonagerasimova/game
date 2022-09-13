import * as React from "react";
import './Food.css'

export function Food({dot} : any) {

    const style = {
        left: `${dot[0]}%`,
        top: `${dot[1]}%`
    }

    return (
        <div className="food" style={style}/>
    );
}