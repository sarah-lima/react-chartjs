import React, { useEffect, useState } from 'react';
import { Div } from './Style.js';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import Menu from '../../components/Menu/Index'

export default function Home() {
    const [chartData, setChartData] = useState({})
    const [chartDataLine, setChartDataLine] = useState({})
    var valor =[]
    var valorDois = []
    const random = () =>{
        if(valor.length>1){
            for (var e=0; e<7;e++){
                valor.pop()
                valorDois.pop()
            }
        }
        for (var i=0; i<7;i++){
            valor.push(Math.floor(Math.random()*10))
            valorDois.push(Math.floor(Math.random()*10))
        }
        console.log(valor)
    }
    const chart = () => {
        setChartData({
            labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
            datasets: [
                {
                    label: 'Texto',
                    data: valor,
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: ['#7A5E68', '#352e30', '#FAD8D6', '#29281b','#64767A', '#232C2E', '#76a1ac'],
                    pointRadius: 2,
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 1,
                }
            ]
        })
    }
    const chartLine = () => {
        setChartDataLine({
            labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'],
            datasets: [
                {
                    label: 'Texto',
                    data: valor,
                    fill: false,
                    lineTension: 0.2,
                    pointRadius: 2,
                    borderColor: '#7A5E68',
                    borderWidth: 1,
                },
                {
                    label: 'Texto 2',
                    data: valorDois,
                    fill: false,
                    lineTension: 0.2,
                    pointRadius: 2,
                    borderColor: '#64767A',
                    borderWidth: 1,
                },
            ]
        })
    }

    useEffect(() => {
        setInterval(()=>{
            random();
            chart();
            chartLine();
        }, 10000)
    }, [])

    
    return (
        <>
            <Menu />
            <Div style={{ marginLeft: '-25%'}}>
                <div style={{ width: '50%', display: 'flex' }}>
                    <Line data={chartDataLine} />
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