import React, { Component} from 'react'
import AuthHOC from '../HOC/AuthHOC'
import SetupForm from '../component/SetupForm'
import Practice from '../component/Practice'

const INITIAL_STATE = {read: false, practice: {}}

export class ReadingContainer extends Component {

    state=INITIAL_STATE

    formSubmit=(formData)=>{
        this.setState({
            read:true,
            practice: formData
        })
    }

    render() {
        return (
            <div className="col text-center" >
                {this.state.read? <Practice practiceState={this.state.practice}/> : <SetupForm onSubmitForm={this.formSubmit}/>}
            </div>
        )
    }
}

export default AuthHOC(ReadingContainer)
