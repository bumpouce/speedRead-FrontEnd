import React, {Component} from 'react'

class ContinueTextForm extends Component{

    state = {
        myList: []
    }


    componentDidMount(){
        this.fetchMyReadings()
    }

    //find unique titles and if there's more than one, keep the one with biggest position
    
    //fetch readings from my user readings
    fetchMyReadings = () => {
        let id = localStorage.getItem('id')
        let token = localStorage.getItem('token')

        fetch(`http://localhost:3000/continue/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }

        })
        .then(res => res.json())
        .then(res => this.setState({myList:res}))
    }


    render() {
     
        return ( 
            <div> 
            <h3>Continue Reading</h3>

            <div className="choose_titles">
            <table>
                {this.state.myList.map(item => {
                return  (
                    <tr className="title-list" key={item[1][0].id} onClick={() => this.props.onSelectText(item)}>
                        <td align={"center"}> {item[1][0].title}</td>
                        <td width="25%%">L: {item[1][0].level}</td>
                    </tr>
                    )
            })}
            </table>
            </div>
            </div>
    )}
}

export default ContinueTextForm