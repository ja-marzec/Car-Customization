import React from "react";
import './_widget.scss'
import {useSelector} from "react-redux";
import {setFinalCar} from "../../app/slices/finalCarSlice";

export function PriceWidget() :JSX.Element {
const finalCost = useSelector(setFinalCar)
return (
    <div className="side__widget">
      Total Cost: <br/>  {finalCost.cost} PLN
    </div>
)
}