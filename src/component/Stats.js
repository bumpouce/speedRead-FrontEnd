import React, { Component } from 'react'
import {Bar,Line} from 'react-chartjs-2'

export default class Stats extends Component {

    chartRef = React.createRef();


    //pie chart of skimming, comprehension paces by categories (very slow, slow, medium, fast, very fast)
    //sort skimming pace v ratings by pace instead of time

    render() {
        let {dates, deep, skim, skimAnalysis} = this.props
        let comprehension = Object.entries(skimAnalysis).map(item=>item[1][0]).flat()
        let pace = Object.entries(skimAnalysis).map(item=>item[1][1]).flat()
        console.log(comprehension)

        return (
            <div className="chart">
                <p className="chart_setup">
                <Line 
                    data={{
                        labels: dates,
                        datasets: [{
                            label: 'Skimming Words Per Minute',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor:"#003f5c",
                            borderColor:"#003f5c",
                            borderWidth:2,
                            data: skim
                        },{
                            label: 'Comprehension Words Per Minute',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor:"#58508d",
                            borderColor:"#58508d",
                            borderWidth:2,
                            data: deep
                        }]
                    }}
                    options={{
                        title: {display:true, text: "Reading Pace Over Time", fontColor:"#003636", fontSize:20}
                    }}
                /></p>
                <p className="chart_setup">
                <Bar
                    data={{
                        labels: Object.keys(skimAnalysis),
                        datasets: [{
                            label: 'Comprehension Rating',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor:"#bc5090",
                            borderColor:"#bc5090",
                            borderWidth:2,
                            data: comprehension
                        },{
                            label: 'Pace Rating',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor:"#ff6361",
                            borderColor:"#ff6361",
                            borderWidth:2,
                            data: pace
                        }]
                    }}
                    options={{
                        title: {display:true, text: "Skimming Pace", fontColor:"#003636", fontSize:20}
                    }}
                />
                </p>
            </div>
        )
    }
}