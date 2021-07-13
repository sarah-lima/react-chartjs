import React, { useEffect, useState } from 'react';
import { Div } from './Style.js';
import { Bar, Line, Bubble, Doughnut, Pie } from 'react-chartjs-2';
import Menu from '../../components/Menu/Index'

export default function Home() {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta'],
            datasets: [
                {
                    label: 'Saídas',
                    data: [32, 42, 23, 56, 78],
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: '#3E517A',
                    pointRadius: 2,
                    borderColor: '#3E517A',
                    borderWidth: 1,
                }, {
                    label: 'Metas',
                    data: [78, 23, 42, 32, 56],
                    fill: true,
                    backgroundColor: '#DDCDB5',
                    pointRadius: 2,
                    borderColor: '#DDCDB5',
                    borderWidth: 1,
                    lineTension: 0.2
                }
            ]
        })
    }

    useEffect(() => {
        chart();
    }, [])
    return (
        <>
            <Menu />
            <Div>
                <div style={{ width: '50%' }}>
                    <Line data={chartData} />
                    <Bar data={chartData} />
                </div>
                <div style={{ width: '50%' }}>
                    <Doughnut width='50px' data={chartData} />
                    <Pie data={chartData} />
                </div>
            </Div>
            <Div>
                <Bubble data={chartData} />
            </Div>
        </>
    )
}