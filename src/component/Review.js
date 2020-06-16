import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Speech from "speak-tts";
import '../CSS/Review.css'
import stop from '../images/stop.png'
import resume from '../images/pause.png'
import play from '../images/play.png'
import pause from '../images/resume.png'

class Review extends Component{

    state={
        speech: new Speech()
    }

    componentDidMount(){
        this.state.speech.init({
            'volume': 0.5,
             'lang': 'en-US',
             'rate': 0.9,
             'pitch': 1,
             'voice':'Google UK English Male',
             'splitSentences': true,
             'listeners': {

             }
        })
        .then(this.state.speech.cancel())
    }

    componentWillUnmount(){
        this.state.speech.cancel()
    }

    sanitizeText = (text) => {
        return text.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "'").replace(/&rdquo;/g, "'").replace(/&rsquo;/g, "'")
    }

    play = (text) => {
        this.state.speech
          .speak({
            text: text,
            queue: true,
            listeners: {
              onstart: () => {
                console.log("Start utterance");
              },
              onend: () => {
                console.log("End utterance");
              },
              onresume: () => {
                console.log("Resume utterance");
              },
              onboundary: event => {
                console.log(
                  event.name +
                    " boundary reached after " +
                    event.elapsedTime +
                    " milliseconds."
                );
              }
            }
          })
          .then(data => {
            console.log("Success !", data);
          })
          .catch(e => {
            console.error("An error occurred :", e);
          });
      };

    render(){
        let {text, skimNote, readNote, onCompletePractice} = this.props

        return (
        <div >
            <br></br>
            <p className="practice-state">Evaluate yourself</p>
            <div class="form-group shadow-textarea">
                <label>Reading Section</label>
                <textarea class="form-control z-depth-1" id="text" rows="11" cols="80" disabled>{text}</textarea>
                <p className="reading-sound">
                <table align="center">
                    <tr>
                        <td>Listen to the Text </td>
                        <td className="media-control"><img src={play} alt="play" onClick={() => this.play(text)}></img> <span className="tiptext">Play</span></td>
                        <td className="media-control"><img src={pause} alt="pause" onClick={() => this.state.speech.pause()}></img> <span className="tiptext">Pause</span></td>
                        <td className="media-control"><img src={resume} alt="continue" onClick={() => this.state.speech.resume()}></img> <span className="tiptext">Continue</span></td>
                        <td className="media-control"><img src={stop} alt="stop" onClick={() => this.state.speech.cancel()}></img> <span className="tiptext">Stop</span></td>
                    </tr>
                </table>
                </p>
            </div>

            <div class="form-group shadow-textarea">
            <label>Notes from Skimming</label>
                <textarea class="form-control z-depth-1" rows="3" cols="80" disabled>{this.sanitizeText(skimNote)}</textarea>
            </div>

            <div class="form-group shadow-textarea">
            <label>Notes from Deep Reading</label> 
                <textarea class="form-control z-depth-1" rows="3" cols="80" disabled>{this.sanitizeText(readNote)}</textarea>
            </div>
            <br></br><br></br>
            <form  onSubmit={(event) => onCompletePractice(event)}>
                <div class="form-group" >
                    <label>How much did I understand from skimming?</label><br></br>
                    <input type="radio" name="comprehensionRating" value={1}/>Under 10%<br></br>
                    <input type="radio" name="comprehensionRating" value={2} />10 to 25%<br></br>
                    <input type="radio" name="comprehensionRating" value={3}/>25 to 50%<br></br>
                    <input type="radio" name="comprehensionRating" value={4}/>More than 50%
                </div>

                <div class="form-group" >
                    <label>This skimming speed was:</label><br></br>
                    <input type="radio" name="paceRating" value={1}/>too slow<br></br>
                    <input type="radio" name="paceRating" value={2} />just right<br></br>
                    <input type="radio" name="paceRating" value={3}/>too fast
                </div>
                <Button variant="primary" type="submit" >Finished Practice</Button>
            </form>
        </div>
    )}
}

export default Review
