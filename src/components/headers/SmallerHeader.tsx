import React from "react";
import "./header.scss";

export function SmallerHeader(props: { text: string; className: string }) :JSX.Element{
    return (
        <h1 className={props.className}>
            {props.text}
        </h1>
    )

}