import React, { Component } from 'react'
import Stats from '../component/Stats'
import CalendarHeatmap from 'react-calendar-heatmap'
import AuthHOC from '../HOC/AuthHOC'
import '../CSS/Stats.css'

export class Charts extends Component {
    state={
        user_readings: []
    }

    componentDidMount(){
        let id = localStorage.getItem('id')
        fetch(`http://localhost:3000/user_reading_stats/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(res => this.setState({ user_readings: res.stats}))
    }

    aggregateData(){
        let date = []
        let deep = []
        let skim = []
        let skimAnalysis = {}

        this.state.user_readings.forEach(practice => {
            date.push(practice.created.split("T")[0])
            deep.push(practice.deepWPM)
            skim.push(practice.skimWPM)
        })      

        this.state.user_readings.forEach(practice => {
            if (!Object.keys(skimAnalysis).includes(practice.skimWPM)){
                skimAnalysis[practice.skimWPM] = [[],[]]
            }
            skimAnalysis[practice.skimWPM][0].push(practice.comprehensionRating)
            skimAnalysis[practice.skimWPM][1].push(practice.paceRating)
            }
        )
        return ([date, deep, skim, skimAnalysis])
    }

    countFrequency = (data) => {
        let result = { };
        let prepped = []
        result = data.reduce(function (acc, curr) {
            if (typeof acc[curr] == 'undefined') { acc[curr] = 1;
            } else { acc[curr] += 1;}        
            return acc;
        }, {});
        for (let [key, value] of Object.entries(result)){
            prepped.push({"date": key, "count": value})
        }
        return prepped
    }

    onClick(value) {
        console.log(value);
    }

    render() {
        let data = this.aggregateData()
        let frequency = this.countFrequency(data[0])
        return (
            <div className="game-form">
                <section>
                    <h2 className="h1 text-center">Your Reading Statistics</h2>
                </section> <br></br><br></br>
                <section>
                    <div align={"center"} >
                    <CalendarHeatmap horizontal
                        startDate={new Date(new Date().getFullYear(),new Date().getMonth()-6, new Date().getDate())}
                        endDate={new Date()}
                        values={frequency}
                        classForValue={(value) => {
                            if (!value) {
                              return 'color-empty';
                            }
                            return `color-scale-${Math.ceil(value.count/4)}`;
                          }}
                        onClick={this.onClick}
                    />
                    </div><br></br>
                </section>
                <section>
                    <Stats dates={data[0]} deep={data[1]} skim={data[2]} skimAnalysis={data[3]}/>
                </section>
            </div >
        )
    }
}
export default AuthHOC(Charts)