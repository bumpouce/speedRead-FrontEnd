import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import AuthHOC from '../HOC/AuthHOC'
import ContinueTextForm from './ContinueTextForm'
import ExistingTextForm from './ExistingTextForm'
import NewTextForm from './NewTextForm'
import question from '../images/question.png'

const ReadingURL = "https://readspeedbackend.herokuapp.com/readings/"

export class SetupForm extends Component {
    state = {
		skimWPM: 400,
		deepWPM: 200,
		list: [],
		useFrom: "",
		category: "",
        source: "none provided",
		author: "not provided",
		id: "tbd",
        title: "not provided",
        completeText: "not provided",
		level: "100",
		position: 0,
		wordCount: 0,
    }

	componentDidMount() {
		this.fetchAllReadings()
	}

	//fetch => add username to state items sent
	createNewReading = () => {
		let token = localStorage.getItem('token');
		let username = localStorage.getItem('username')
		let {category, level, author, title, completeText, source, wordCount} = this.state

		fetch(ReadingURL, {method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json', 
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({
				reading: {
					category:category, 
					level: level, 
					author: author, 
					title: title, 
					completeText: completeText, 
					source: source, 
					contributor: username, 
					wordCount: wordCount
				}
			})
		})
		.then(res=> res.json())
		.then(res => {
			console.log("Save in db:", res)
			let {id, category, source, author, title, completeText, level} = res
			this.setState({
				id: id, category: category, source: source, author: author, title: title, 
				completeText: completeText, level: level})
		})
		// .then(() => this.fetchAllReadings())
		.then(this.setState({useFrom: "start"}))
	}

	fetchAllReadings = () => {
		let token = localStorage.getItem('token')

		fetch(ReadingURL, {method: 'GET',
			headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
		})
		.then(res=>res.json())
		.then(json => this.setReadingList(json))
	}


	setReadingList = (input) => {
		this.setState({list: input})
	}

    handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmitForm(this.state)  //don't send list back
	}
	
	handleTextType = (event) => {
		this.setState({useFrom: event.target.value})
	}

	addText = ({id, category, source, author, title, completeText, level, wordCount}) => {
		this.setState({id: id, category: category, source: source, author: author, title: title, completeText: completeText, level: level, wordCount: wordCount}, () => this.createNewReading())
		this.setState({useFrom: "start"})
	}

	selectText = ({id, category, source, author, title, completeText, level}) => {
		this.setState({id: id, category: category, source: source, author: author, title: title, completeText: completeText, level: level})
		this.setState({useFrom: "start"})
	}

	continueText = (response) => {
		let position = response[0]
		let {author, category, completeText, id, level, source, title} = response[1][0]
		this.setState({position: position, id: id, category: category, source: source, author: author, title: title, completeText: completeText, level: level})
		this.setState({useFrom: "start"})
	}


	handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value })
    }

    render() {
        return (
            <div className="game-form text-center">
                <h1>Set Up</h1>
                <hr/>
					<h3>Choose Your Reading Speed</h3><br></br>
                    <div>
	                    <label>Skim Speed</label>
    	                <input className="setup-boxes" name="skimWPM" type="number" min="60" max="2000" placeholder="400" onChange={event=> this.handleChange(event)}/>
						<span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Words per minute, at your desired fast reading speed</span></span>
                    </div>
                    <div>
 	                   	<label>Comprehension Speed</label>
						<input className="setup-boxes" name="deepWPM" type="number" min="60" max="1000" placeholder="200" onChange={event=> this.handleChange(event)}/>
						<span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Word per minute, at your comfortable reading speed</span></span>
                    </div>
					<br></br>
                    <div onClick={this.handleTextType}>
            	        <h3>Text Source</h3>
						<br></br>
						<label><input type="radio" name="useFrom" value="new"/>Add new text</label><span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Add reading material to our collection</span></span><br></br>
						<label><input type="radio" name="useFrom" value="default" />Start a default text</label><span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Start reading something from our collection</span></span><br></br>
						<label><input type="radio" name="useFrom" value="continue"/>Continue a text</label><span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Continue a reading you already started</span></span>
                    </div>
                    <hr/>
					<div >
						{this.state.useFrom === "new" ?  <NewTextForm  onAddNew={this.addText}/> : null}
					</div>
					<div >
						{this.state.useFrom === "continue" ? <ContinueTextForm onSelectText={this.continueText}/> : null}
					</div>
					<div >
						{this.state.useFrom === "default" ?  <ExistingTextForm  list={this.state.list} onSelectText={this.selectText}/> : null}
					</div>
                    <div>
                        {this.state.useFrom === "start" ? <Button variant="primary" onClick={(event) => this.handleSubmit(event)}><b>Start Reading</b><br></br>"{this.state.title}"</Button> : null}
                    </div>
            </div>
        )
    }
}

export default SetupForm
