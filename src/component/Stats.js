import React, { Component } from 'react'
import {Pie, Bar,Line} from 'react-chartjs-2'
import '../CSS/Tips.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class Stats extends Component {

    chartRef = React.createRef();

    render() {
        let {dates, deep, skim, skimAnalysis, paceAnalysis, comprehensionAnalysis} = this.props
        let comprehension = Object.entries(skimAnalysis).map(item=>item[1][0]).flat()
        let pace = Object.entries(skimAnalysis).map(item=>item[1][1]).flat()

        return (
            <div>
                <br></br>
                <p className="practice-state" align="center">Click a question to see information about your reading practice!</p>
                <Accordion allowZeroExpanded>
                    <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="heading">
                            <AccordionItemButton  align="center">
                            How has my reading pace changed since I started practicing?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="panel">
                            <p className="table-format">
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
                                    title: {display:true, position:'bottom', text: "Reading Pace Over Time", fontColor:"#003636", fontSize:20},
                                    legend: {display:true, position: 'bottom'}
                                }}
                            />
                            </p>

                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="heading">
                            <AccordionItemButton  align="center">
                                Have I been skimming too fast or too slow?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="panel">
                        <p className="table-format">
                            <Pie  
                                data={{
                                    labels: Object.keys(paceAnalysis),
                                    datasets: [{
                                        label: 'Pace Rating',
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor:["#ff6361", "#FFB261", "#FF61AE"],
                                        borderColor:["#ff6361", "#FFB261", "#FF61AE"],
                                        borderWidth:2,
                                        data: Object.values(paceAnalysis)
                                    }]
                                }}
                                options={{
                                    title: {display:true, position:'bottom', text: "Balance of Pace Ratings", fontColor:"#003636", fontSize:20},
                                    legend: {display:true, position: 'bottom'}
                                }}
                            />
                            </p> 
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="heading">
                            <AccordionItemButton  align="center">
                                How much do I understand when I skim?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="panel">
                            <p className="table-format">
                            <Pie  
                                data={{
                                    labels: Object.keys(comprehensionAnalysis),
                                    datasets: [{
                                        label: 'Comprehension Rating',
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor:["#733698", "#984236", "#5B9836", "#368C98"],
                                        borderColor:["#733698", "#984236", "#5B9836", "#368C98"],
                                        borderWidth:2,
                                        data: Object.values(comprehensionAnalysis)
                                    }]
                                }}
                                options={{
                                    title: {display:true, position:'bottom', text: "Balance of Comprehension Ratings", fontColor:"#003636", fontSize:20},
                                    legend: {display:true, position: 'bottom'}
                                }}
                            />
                            </p> 
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="heading">
                            <AccordionItemButton  align="center">
                                How does my comprehension compare to my skimming speed?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="panel">
                            <p className="table-format">
                            <Bar  
                                data={{
                                    labels: Object.keys(skimAnalysis), 
                                    datasets: [{
                                        label: '1=very little, 2=some, 3=a lot, 4=most of it',
                                        stepSize:1,
                                        fill: false,
                                        lineTension: 0.5,
                                        backgroundColor:"#bc5090",
                                        borderColor:"#bc5090",
                                        borderWidth:2,
                                        data: comprehension
                                    }]
                                }}
                                options={{
                                    title: {display:true, position:'bottom', text: "Self-Evaluation of Skimming Pace", fontColor:"#003636", fontSize:20},
                                    legend: {display:true, position: 'bottom'},
                                    scales: {yAxes: [{ticks: {suggestedMax: 4, stepSize: 1}    }]}
                                }}
                            />
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="accordion-item">
                        <AccordionItemHeading className="heading">
                            <AccordionItemButton align="center">
                                How do I feel about my skimming pace?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="panel">
                            <p className="table-format">
                            <Bar 
                                    data={{
                                        labels: Object.keys(skimAnalysis),  
                                        datasets: [{
                                            label: '1=too slow, 2=just right, 3=too fast',
                                            stepSize:1,
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor:"#ff6361",
                                            borderColor:"#ff6361",
                                            borderWidth:2,
                                            data: pace
                                        }]
                                    }}
                                    options={{
                                        title: {display:true, position:'bottom', text: "Self-Evaluation of Skimming Pace", fontColor:"#003636", fontSize:20},
                                        legend: {display:true, position: 'bottom'},
                                        scales: {yAxes: [{ticks: {suggestedMax: 3, stepSize: 1}    }]}
                                    }}
                                /> 
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }
}