import React, { useEffect, useState } from 'react';
import { Div } from './Style.js';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import Menu from '../../components/Menu/Index'

export default function Home() {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
            datasets: [
                {
                    label: 'Texto',
                    data: [32, 42, 23, 56, 78, 20, 60],
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['#17BEBB', '#2E282A', '#CD5334', '#EDB88B', '#FAD8D6','#FAD8A5', '#2E102F'],
                    pointRadius: 2,
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 1,
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
            <Div style={{ marginLeft: '-25%'}}>
                <div style={{ width: '50%', display: 'flex' }}>
                    <Line data={chartData} />
                    <Bar data={chartData} />
                </div>

            </Div>
            <Div>
                <div style={{ width: '30%' }}>
                    <Doughnut data={chartData} />
                </div>
                <div style={{ width: '30%' }}>

                    <Pie data={chartData} />
                </div>
            </Div>
        </>
    )
}