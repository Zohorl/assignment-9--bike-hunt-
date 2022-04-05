import React, { useEffect, useState } from 'react';
import NewBarChart from '../NewBarChart/NewBarChart';
import NewLineChart from '../NewLineChart/NewLineChart';

export const ChartContext = React.createContext();
const DashBoard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, []);

    return (
        <ChartContext.Provider value={charts}>
            <div className='grid grid-cols-2 m-5'>
                <NewLineChart></NewLineChart>
                <NewBarChart></NewBarChart>
            </div>
        </ChartContext.Provider>
    );
};

export default DashBoard;