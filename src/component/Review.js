import React from 'react'
import {Button} from 'react-bootstrap'
import '../CSS/Review.css'

const sanitizeText = (text) => {
    return text.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "'").replace(/&rdquo;/g, "'").replace(/&rsquo;/g, "'")
}

const Review = ({text, skimNote, readNote, onCompletePractice}) => {
    return (
        <div >
        <form onSubmit={(event) => onCompletePractice(event)} >            
            <div class="form-group shadow-textarea">
                <label><h3>Reading Section</h3></label>
                <textarea class="form-control z-depth-1" id="text" rows="3" cols="80" disabled>{text}</textarea>
            </div>

            <div class="form-group shadow-textarea">
            <label><h3>Notes from Skimming</h3></label>
                <textarea class="form-control z-depth-1" id="text" rows="3" cols="80" disabled>{sanitizeText(skimNote)}</textarea>
            </div>

            <div class="form-group shadow-textarea">
            <label><h3>Notes from Deep Reading</h3></label> 
                <textarea class="form-control z-depth-1" id="text" rows="3" cols="80" disabled>{sanitizeText(readNote)}</textarea>
            </div>

            <div class="form-group" >
                <b>How much did I understand from skimming?</b><br></br>
                <label><input type="radio" name="comprehensionRating" value={1}/>Under 10%</label><br></br>
                <label><input type="radio" name="comprehensionRating" value={2} />10 to 25%</label><br></br>
                <label><input type="radio" name="comprehensionRating" value={3}/>25 to 50%</label><br></br>
                <label><input type="radio" name="comprehensionRating" value={4}/>More than 50%</label>
            </div>

            <div class="form-group" >
                <b>This skimming speed was:</b><br></br>
                <label><input type="radio" name="paceRating" value={1}/>too slow</label><br></br>
                <label><input type="radio" name="paceRating" value={2} />just right</label><br></br>
                <label><input type="radio" name="paceRating" value={3}/>too fast</label>
            </div>
            <Button variant="primary" type="submit" >Finished Practice</Button>
        </form>
        </div>
    )
}

export default Review

// text={cleanText} 
// skimNote={this.state.skimNote} 
// readNote={this.state.readNote} 
// onCompletePractice={this.completePractice}