'use client'
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallAppContext';
import { Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ['#4ade80', '#60a5fa', '#c084fc', '#FF8042', '#FFBB28', '#0088FE'];

const DashboardPage = () => {

    const { installedApp } = useContext(InstallAppContext);

    const data = installedApp.map((app, index) => ({
        name: app.title,
        value: 1,
        fill: COLORS[index % COLORS.length],
    }));

    const total = installedApp.length;

    if (total === 0) return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-center h-48">
                <p className="text-slate-400 text-2xl">No apps installed yet</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            {/* Pie Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
                <h3 className="text-sm font-semibold text-slate-700 mb-4">Installed Apps Breakdown</h3>
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        innerRadius="70%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        paddingAngle={5}
                        dataKey="value"
                    />
                    <Tooltip />
                </PieChart>
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                    {data.map((d) => (
                        <div key={d.name} className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.fill }} />
                            <span className="text-xs text-slate-500">{d.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;