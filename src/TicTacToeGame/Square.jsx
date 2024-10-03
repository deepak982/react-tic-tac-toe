import React from "react";

export const Square = (props) => {
    return (
        <div className="square" 
            style={{
                border: "1px Solid",
                height: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}

            onClick={props.onClick}

        >
            <h5>{props.value}</h5>
        </div>
    )
}