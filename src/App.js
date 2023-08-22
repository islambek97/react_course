import React from 'react';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
    const costs = [
        {
            id: 1,
            date: new Date(2023, 2, 12),
            description: "Продукты",
            amount: 15.20,
        },
        {
            id: 2,
            date: new Date(2023, 3, 15),
            description: "Транспорт",
            amount: 17.20,
        },
        {
            id: 3,
            date: new Date(2023, 4, 20),
            description: "Еда",
            amount: 20.20,
        },
    ];

    function addConstHandler(cost) {
        console.log(cost);
        console.log('App component');
    }

    return (
        <div>
            <NewCost onAddCost={addConstHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
