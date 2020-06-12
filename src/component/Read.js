import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import {Button} from 'react-bootstrap'
import Carousel from 'react-elastic-carousel'
import TextSection from './TextSection'

class Read extends Component{

    state = {
        autoPlay: false
    }

    componentDidMount(){
        this.handleAutoPlay()
    }

    handleAutoPlay = () => {
        setTimeout(() => this.setState({autoPlay:true}), 1500)
    }

    render(){
        let {header, sections, onHandleUserReading, updateState} = this.props

        return(
            <div>
                <br></br><br></br>
                <p className="practice-state"> {header}</p>                    
                <div>
                    <Carousel showArrows={false} itemPadding={[50,0,0,0]} verticalMode enableAutoPlay={this.state.autoPlay} autoPlaySpeed={1015} transitionMs={15} pagination={false}  > 
                            {sections.map((section, index) => {
                                return <TextSection key={index} text={section}/>}) }
                    </Carousel>
                </div>
                <br></br>
                <Editor
                    initialValue=""
                    init={{
                    selector: 'textarea',
                    id: 'edit',
                    placeholder: 'Take notes here',
                    height: 150,
                    menubar: false,
                    auto_focus: "edit",
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
                    onEditorChange={onHandleUserReading}
                /><br></br>
                <Button onClick={updateState}>Next Step!</Button>
            </div>
        ) 
}

}

export default Read