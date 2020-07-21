import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComp from '../component/ModalComp'
import Read from './Read'
import Review from './Review'

const USER_READING_URL = 'https://readspeedbackend.herokuapp.com/user_readings'

class Practice extends Component {

    constructor(props){
        super(props)
        this.state = {
            visible: false,

            step: "skim",

            // //user_reading table => 
            id: props.practiceState.id,
            skimWPM: props.practiceState.skimWPM,
            deepWPM: props.practiceState.deepWPM,
            position: props.practiceState.position, //implement functionality later
            comprehensionRating: 1,
            paceRating: 3,
            created: null,  //this is actually getting set in the ruby side

            //notes table
            //user_reading_id
            skimNote: "",
            readNote: "",
        }
    }

    prepareText = (text, wpm, position=0) => {

        let section = this.selectSection(text, position)
        //250 words / (wpm / min) = time to read section
        //250 words / (time to read section) = words to display per second
        const timeToRead = Math.ceil(250 / (wpm / 60))
        const wordsPerSec = ~~(250 / timeToRead)
        console.log(wpm, "wpm: ", wordsPerSec, "wps")
        console.log("Beginning: ", section[0])
        console.log("End: ", section[249])
        console.log("Complete: ", section)

        let displayArr = section //.split(" ");
        let temp = []
        
        for (let i=0; i<=timeToRead+1; i++){
            let selection = displayArr.splice(0,wordsPerSec).join(" ")
            console.log(selection)
            temp.push(selection)
        }
        return temp
    }

    selectSection = (text, position) => {
        let cleanText = text.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "'").replace(/&rdquo;/g, "'").replace(/&rsquo;/g, "'").replace(/&mdash;/g, ", ").replace(/&amp;/g, "&").replace(/\n|\r/g, "")
        let practiceSet = cleanText.split(" ").filter(el => {return el != "";}).slice(position,position+250)
        return practiceSet
    }

    createUserReading = (event) => {
        this.setState({skimNote:event})
    }

    updateUserReading = (event) => {
        this.setState({readNote:event})
    }

    handleStep = (step) => {
        this.setState({step: step})
    }

    completePractice = (event) => {
        event.preventDefault()
        let {comprehensionRating, paceRating} = event.target
        let {id, skimWPM, deepWPM, position, created, skimNote, readNote} = this.state
        let token = localStorage.getItem('token')
        let user_id = localStorage.getItem('id')


        // post new user reading
        fetch (USER_READING_URL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                user_reading: {
                    user_id: user_id,
                    reading_id: id,
                    skimWPM: skimWPM,
                    deepWPM: deepWPM,
                    position: position + 250,//this.props.practiceState.position + 250,
                    comprehensionRating: comprehensionRating.value,
                    paceRating: paceRating.value,
                    created: created
                },
                note: {
                    skim: skimNote,
                    comprehension: readNote
                }
            })
        })
        .then(() => this.openModal())  // then show modal -> routing to read or stats?
    }

    openModal=()=> {
        this.setState({ visible: true })
    }

    closeModal=()=> {
        this.setState({ visible: false })
    }

    render() {
        let {position, skimWPM, deepWPM, category, source, author, title, completeText, level} = this.props.practiceState
        let skimSet = this.prepareText(completeText, skimWPM, position)
        let deepSet = this.prepareText(completeText, deepWPM, position)

        return (
            <div>
                <div className="game-form text-center">
                    <label>{title}</label><br></br>
                    <label>by {author}</label>

                    {(this.state.step === "skim") ? <Read header="Skim" sections={skimSet} updateState={() => this.handleStep("read")} onHandleUserReading={this.createUserReading} /> : null}
                    {(this.state.step === "read") ? <Read header="Read Carefully" sections={deepSet} updateState={() => this.handleStep("review")} onHandleUserReading={this.updateUserReading}/> : null}
                    {(this.state.step === "review") ? <Review text={this.selectSection(completeText, position).join(" ")} skimNote={this.state.skimNote} readNote={this.state.readNote} onCompletePractice={this.completePractice}/> : null}                                        
                </div>
                {(this.state.visible) ? <ModalComp visible={this.state.visible} closeModal={this.closeModal} /> : null}
            </div>
        )
    }
}
export default Practice