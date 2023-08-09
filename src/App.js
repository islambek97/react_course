import React from 'react';
import CostItem from "./components/CostItem";
import Costs from "./components/Costs";

function App() {

    const costs = [
        {
            date: new Date(2023, 2, 12),
            description: "Триммер",
            amount: 15.20,
        },
        {
            date: new Date(2023, 3, 15),
            description: "Magnum",
            amount: 17.20,
        }, {
            date: new Date(2023, 4, 20),
            description: "Еда",
            amount: 20.20,
        },
    ];

    return (
        <div>
            <h1>Welcome to react course Isl
                <div className='costs'>
                    <Costs />
                </div>
        </div>
    );

export default App;
