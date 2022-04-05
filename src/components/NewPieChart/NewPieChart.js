import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { ChartContext } from '../DashBoard/DashBoard';

const NewPieChart = () => {
    const data = useContext(ChartContext);
    return (
        <div>
            <h1 className='text-4xl font-bold mb-3'>Pie Chart</h1>
            <p className='text-blue-700 text-2xl font-bold'>sell</p>
            <p className='text-emerald-500 text-2xl font-bold'>investment</p>
            <PieChart width={600} height={300}>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
            </PieChart>
        </div>
    );
};

export default NewPieChart;