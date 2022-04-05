import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../DashBoard/DashBoard';

const NewLineChart = () => {
    const data = useContext(ChartContext)
    return (
        <div>
            <h1 className='text-4xl font-bold mb-3'>Line Chart</h1>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey="sell" stroke="#8884d8"></Line>
                <Line dataKey="investment" stroke="#82ca9d"></Line>
            </LineChart>
        </div>
    );
};

export default NewLineChart;