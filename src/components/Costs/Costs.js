import CostItem from "./CostItem";
import "./Costs.css"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, {useState} from "react";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    function yearChangeHandler(year) {
        setSelectedYear(year)
    }

    return (
        <div>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <Card className="costs">
                <CostItem
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    amount={props.costs[0].amount}
                />
                <CostItem
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    amount={props.costs[1].amount}
                />
                <CostItem
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    amount={props.costs[2].amount}
                />
            </Card>
        </div>
    );
}

export default Costs;