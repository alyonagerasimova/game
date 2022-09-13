import * as React from "react"
import './Snake.css'

interface PropsType {
    snakeDots: number[][],
}

export function Snake({snakeDots}: PropsType) {

    return (
        <div>
            {snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className="snake-dot" key={i} style={style}></div>);
            })}
        </div>

    );
}