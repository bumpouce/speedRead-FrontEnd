import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron} from 'react-bootstrap'
import ModalComp from '../component/ModalComp'
import Read from './Read'
import Review from './Review'

const USER_READING_URL = 'http://localhost:3000/user_readings'
const NOTES_URL = `http://localhost:3000/notes`

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
            position: 0, //implement functionality later
            comprehensionRating: 1,
            paceRating: 3,
            created: null,  //this is actually getting set in the ruby side

            //notes table
            //user_reading_id
            skimNote: "",
            readNote: "",
        }
    }

    prepareText = (text, wpm) => {
        //250 words / (wpm / min) = time to read section
        //250 words / (time to read section) = words to display per second?

        const timeToRead = ~~(250 / (wpm / 60))
        const wordsPerSec = ~~(250 / timeToRead)

        let displayArr = text.split(" ");
        let temp = []
        
        for (let i=0; i<=timeToRead; i++){
            let section = displayArr.splice(0,wordsPerSec).join(" ")
            temp.push(section)
        }
        return temp
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
                    position: position + 250,
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
        let cleanText = completeText.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "'").replace(/&rdquo;/g, "'").replace(/&rsquo;/g, "'")
        let practiceSet = cleanText.split(" ").filter(el => {return el != "";}).slice(position,position+250).join(" ")  //change slice index to user's place if continuing reading

        return (
            <div>
                <Container>
                    <Jumbotron>
                        <div className="game-form text-center">
                            <h4>{title} </h4>
                            <h4 >by {author}</h4>

                            {(this.state.step === "skim") ? <Read header="Skim" sections={this.prepareText(practiceSet, skimWPM)} updateState={() => this.handleStep("read")} onHandleUserReading={this.createUserReading} /> : null}
                            {(this.state.step === "read") ? <Read header="Read Carefully" sections={this.prepareText(practiceSet, deepWPM)} updateState={() => this.handleStep("review")} onHandleUserReading={this.updateUserReading}/> : null}
                            {(this.state.step === "review") ? <Review text={practiceSet} skimNote={this.state.skimNote} readNote={this.state.readNote} onCompletePractice={this.completePractice}/> : null}                                        
                        </div>
                    </Jumbotron>
                    {(this.state.visible) ? <ModalComp visible={this.state.visible} closeModal={this.closeModal} /> : null}
                </Container>
            </div>
        )
    }
}
export default Practice