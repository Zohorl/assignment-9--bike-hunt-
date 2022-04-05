import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../DashBoard/DashBoard';

const NewBarChart = () => {
    const data = useContext(ChartContext);
    return (
        <div>
            <h1 className='text-4xl font-bold mb-3'>Bar Chart</h1>
            <BarChart width={600} height={300} data={data} >
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="sell" fill="#8884d8"></Bar>
                <Bar dataKey="investment" fill="#82ca9d"></Bar>
            </BarChart>
        </div>
    );
};

export default NewBarChart;