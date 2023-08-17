import React from 'react';
import Costs from "./components/Costs";

function App() {
    const costs = [
        {
            date: new Date(2023, 2, 12),
            description: "Продукты",
            amount: 15.20,
        },
        {
            date: new Date(2023, 3, 15),
            description: "Транспорт",
            amount: 17.20,
        },
        {
            date: new Date(2023, 4, 20),
            description: "Еда",
            amount: 20.20,
        },
    ];

    return (
        <div>
            <h1>Welcome to the React Course</h1>
            <div className='costs'>
                <Costs costs={costs} />
            </div>
        </div>
    );
}

export default App;
