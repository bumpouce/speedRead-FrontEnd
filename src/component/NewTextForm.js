import React, {PureComponent} from 'react'
import {Button} from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';
import question from '../images/question.png'

const rs = require('text-readability')

class NewTextForm extends PureComponent {

    state = {
        category: "Other",
        originURL: "not provided",
        author: "not provided",
        title: "not provided",
        completeText: "not provided",
        level: "",
        wordCount: 0
    }

    analyzeText = (event, wordCount) => {
        if (event){
            this.setState({
                completeText: event, level: ~~rs.daleChallReadabilityScore(event),
                wordCount: wordCount.plugins.wordcount.getCount()
            })
        }
        else {this.setState({completeText: "", level: "", wordCount: 0})}
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value })
    }

    render(){

    return ( 
    <div>
        <h3>Add new reading material</h3>
        <form>
            <label for="category">Category</label>
            <select id="category" name="category" onChange={event=> this.handleChange(event)}>
                <option value="Literature">Literature</option>
                <option value="News">News</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
            </select>
            <span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Choose a general category of this reading</span></span>
            <br></br>

            <label for="source">Origin URL</label>
            <input className="setup-boxes" type="text" name="source" onChange={event=> this.handleChange(event)}></input>
            <span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Where did you find this piece?</span></span>
            <br></br>
            <label for="author">Author</label>
            <input className="setup-boxes" type="text" name="author" onChange={event=> this.handleChange(event)}></input>
            <span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Who wrote this piece?</span></span>
            <br></br>
            <label for="title">Title</label>
            <input className="setup-boxes" type="text" name="title" onChange={event=> this.handleChange(event)}></input>
            <span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">What is this piece called?</span></span>
            <br></br>

            <Editor
                initialValue=""
                init={{
                selector: 'textarea',
                placeholder: 'Paste text here',
                height: 250,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                paste_data_images: false,
                paste_as_text: true,
                outputFormat: "text",
                toolbar:
                    'undo redo | removeformat | help'
                }}
                onEditorChange={this.analyzeText}
            />
            {(this.state.level !== "") ? <h4>Reading Level: {this.state.level}<span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">Estimated grade level difficulty of this reading</span></span></h4>  : null}
            <Button onClick={(event) => this.props.onAddNew(this.state)}>Submit New Text</Button>
            <span className="form-item"><img src={question} alt="info" className="tip-image"/><span className="form-tip">This piece will be available for all users to read</span></span>
        </form>
    </div>
    )}
}

export default NewTextForm