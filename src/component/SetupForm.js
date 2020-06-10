import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import AuthHOC from '../HOC/AuthHOC'
import ContinueTextForm from './ContinueTextForm'
import ExistingTextForm from './ExistingTextForm'
import NewTextForm from './NewTextForm'

const ReadingURL = "http://localhost:3000/readings/"

export class SetupForm extends Component {
    state = {
		skimWPM: 500,
		deepWPM: 75,
		list: [],
		useFrom: "",
		category: "",
        source: "none provided",
		author: "not provided",
		id: "tbd",
        title: "not provided",
        completeText: "not provided",
		level: "100",
		position: 0
    }

	componentDidMount() {
		this.fetchAllReadings()
	}

	//fetch => add username to state items sent
	createNewReading = () => {
		let token = localStorage.getItem('token');
		let username = localStorage.getItem('username')
		let {category, level, author, title, completeText, source} = this.state

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
					contributor: username
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

	addText = ({id, category, source, author, title, completeText, level}) => {
		this.setState({id: id, category: category, source: source, author: author, title: title, completeText: completeText, level: level}, () => this.createNewReading())
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
                    <div class="form-group">
	                    <label>Skim Speed</label>
    	                <input className="setup-boxes" name="skimWPM" type="number" min="60" max="2000" placeholder="500" onChange={event=> this.handleChange(event)}/>
                    </div>
                    <div class="form-group">
 	                   	<label>Comprehension Speed</label>
						<input className="setup-boxes" name="deepWPM" type="number" min="60" max="1000" placeholder="75" onChange={event=> this.handleChange(event)}/>
                    </div>
					<br></br>
                    <div class="form-group" onClick={this.handleTextType}>
            	        <h3>Text Source</h3><br></br>
						<label><input type="radio" name="useFrom" value="new"/>Add new text</label><br></br>
						<label><input type="radio" name="useFrom" value="default" />Use a default text</label><br></br>
						<label><input type="radio" name="useFrom" value="continue"/>Continue a text</label>
                    </div>
                    <hr/>
					<div >
						{this.state.useFrom === "new" ?  <NewTextForm  onAddNew={this.addText}/> : null}
					</div>
					<div className="form-group">
						{this.state.useFrom === "continue" ? <ContinueTextForm onSelectText={this.continueText}/> : null}
					</div>
					<div className="form-group">
						{this.state.useFrom === "default" ?  <ExistingTextForm  list={this.state.list} onSelectText={this.selectText}/> : null}
					</div>
                    <div class="form-group">
                        {this.state.useFrom === "start" ? <Button variant="primary" onClick={(event) => this.handleSubmit(event)}><b>Start Reading</b><br></br>"{this.state.title}"</Button> : null}
                    </div>
            </div>
        )
    }
}

export default SetupForm
