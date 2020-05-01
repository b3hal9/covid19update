import React, {useState, useEffect} from 'react'
import {fetchDataDaily} from '../../api/index.api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './chart.module.css'

const Charts = ({data:{confirmed,recovered,deaths},country}) => {
    const [dataDaily, setdataDaily] = useState([])
    useEffect(()=>{
        const fetchData = async()=>setdataDaily(await fetchDataDaily())
        fetchData()
    },[])
    const LineChart = (
        dataDaily.length ?(<Line
        data = {{
            labels: dataDaily.map(({date})=>date),
            datasets: [{
                data: dataDaily.map(({confirmed})=>confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }, {
                data: dataDaily.map(({deaths})=>deaths),
                label: 'Deaths',
                borderColor: '#3333ff',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true

            }],
        }}
        
        />
    ):null   
    )
    const barchart = (
        confirmed? (<Bar
            data ={{
                labels: ["Infected"," Recovered"," Deaths"],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                    data: [confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend: {display:false},
                title: {display:true, text:`Current state in ${country}`}
                 
            }}
            />):null
    )
    return (
        <div className={styles.container}>
            {country?barchart:LineChart}
        </div>
    )
} 

export default Charts