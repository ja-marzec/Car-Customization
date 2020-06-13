import React from "react";
import './_widget.scss'


export function PriceWidget(props: {cost: number}) :JSX.Element {
return (
    <div className="side__widget">
      Total Cost: <br/>  {props.cost} PLN
    </div>
)
}      