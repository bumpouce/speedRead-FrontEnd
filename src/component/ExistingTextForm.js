import React, {Component} from 'react'

// const displayTitle = (list) => {
//         list.forEach(item => {return <li>Item: {item.title}</li>})
// }

//if you click on a title, it should send the info on that title to state in the setupform and highlight the option

class ExistingTextForm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            list: this.props.list,
            filteredList: this.props.list
        }
    }
    filterReadings = (event) => {
        const type = event.target.value
        console.log(`Filtering for ${type}`)
        if (type === "Easier"){
          this.setState({filteredList:[...this.state.list.filter(reading => {if (reading.level < 6){return reading}})]})
        }
        else if (type === "Harder"){
            this.setState({filteredList:[...this.state.list.filter(reading => {if (reading.level > 10){return reading}})]})
        }
        else {
          this.setState({filteredList:this.state.list})
        }
      }

    render() {
        let {onSelectText} = this.props
        
        return (
            <div > 
                <h3>List of Titles</h3>

                Filter Readings by Level:
                <select onChange={this.filterReadings}>
                    <option value="All">All</option>
                    <option value="Easier">Easier</option>
                    <option value="Harder">Harder</option>
                </select>
                <br></br><br></br>
                <div className="choose_titles">
                <table>
               {this.state.filteredList.map(item => {
                    return  (
                        <tr className="title-list" key={item.id} onClick={() => onSelectText(item)}>
                            <td align={"center"}width="75%"> {item.title}</td>
                            <td width="25%">L: {item.level}</td>
                        </tr>
                        )
                })}
                </table>
                </div>
            </div>
    )}
}

export default ExistingTextForm