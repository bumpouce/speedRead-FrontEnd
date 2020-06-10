import React, {PureComponent} from 'react'
import {Button} from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';

const rs = require('text-readability')


class NewTextForm extends PureComponent {

    state = {
        category: "Other",
        originURL: "not provided",
        author: "not provided",
        title: "not provided",
        completeText: "not provided",
        level: "100"
    }

    analyzeText = (event) => {
        if (event){
            this.setState({completeText: event, level: ~~rs.daleChallReadabilityScore(event)})
        }
        else {this.setState({completeText: "", level: ""})}
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value })
    }

    render(){
    return ( 
    <div>
        <h3>Submit your own reading material</h3>
        <form>
            <label for="category">Category</label>
            <select id="category" name="category" onChange={event=> this.handleChange(event)}>
                <option value="Literature">Literature</option>
                <option value="News">News</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
            </select><br></br>

            <label for="source">Origin URL</label>
            <input className="setup-boxes" type="text" name="source" onChange={event=> this.handleChange(event)}></input><br></br>
            <label for="author">Author</label>
            <input className="setup-boxes" type="text" name="author" onChange={event=> this.handleChange(event)}></input><br></br>
            <label for="title">Title</label>
            <input className="setup-boxes" type="text" name="title" onChange={event=> this.handleChange(event)}></input><br></br>

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
                toolbar:
                    'undo redo | removeformat | help'
                }
                }
                onEditorChange={this.analyzeText}
            />
            <Button onClick={(event) => this.props.onAddNew(this.state)}>Add New Text</Button>
        </form>
    </div>
    )}
}

export default NewTextForm