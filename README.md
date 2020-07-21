# readSpeed Literacy Training App

readSpeed is an application aimed at helping readers of English improve their reading speed and comprehension. Designed with adults studying for timed reading tests like IELTS, TOEFL and TOEIC, readSpeed is good for anyone who wants to practice reading skills.  Learn to stop verbalizing while reading, and use skimming is a tool that increases what you understand when you read slowly.

## Installation
To install readSpeed locally, fork and clone https://github.com/bumpouce/speedRead-FrontEnd and https://github.com/bumpouce/speedRead-BackEnd. 

Back end: When you fork and clone down the back end, navigate to the “db” directory, then run “rails db:create” and “rails db:migrate”. Then you can run “rails s” or “rails start”, which should start the back end running on port 3000 of your localhost.

Front end: When you fork and clone down the front end, then navigate into the front end directory, and run “npm install” and “npm start”.

Please start the rails server before you start the npm server, and since the npm server will probably want to start on port 3000 also, it may prompt you to let it choose another port. If you find problems with the application starting, and it did not prompt you to use another port, you may need to specify it explicitly by using “PORT=3001 npm start” (or another port of your choosing).


### Usage
In this application, a user can:
* create a secure login
* add new reading material
* read existing material from the database
* continue reading material they have already started
* practice skimming and note-taking at a rate (words per minute) of their choosing 
* practice more careful reading at a slower pace of their choosing
* review the complete reading section, and listen to it if they want
* evaluate their comprehension based on the notes they took
* rate their feeling about the pace (too fast/slow)
* rate their own comprehension level (percent understood)
* maintain statistics about their reading practice including frequency, pace, and self-evaluations
* review tips about improving their reading

### Usage
In this application, a user can:
* create a secure login
* add new reading material
* read existing material from the database
* continue reading material they have already started
* practice skimming and note-taking at a rate (words per minute) of their choosing 
* practice more careful reading at a slower pace of their choosing
* review the complete reading section, and listen to it if they want
* evaluate their comprehension based on the notes they took
* rate their feeling about the pace (too fast/slow)
* rate their own comprehension level (percent understood)
* maintain statistics about their reading practice including frequency, pace, and self-evaluations
* review tips about improving their reading

### Technologies
The back end of this application is written in Ruby on Rails, with a postgres database.  The front end is javascript react with some bootstrap and some custom CSS.

In terms of javascript/react packages, readSpeed incorporates:
* react-chartjs-2 for showing stats
* react-accessible-accordion for displaying stats and tips 
* tinyMCE for entering new reading materials, counting words in new reading materials, and note-taking during reading 
* text-readability dale-chall readability score for evaluating the reading level when new material is added
* react-elastic-carousel for displaying the reading material segments
* speak-tts for playing the reading material on the review page
                       

## Future Functionality Goals
I would like to add further user profile interactivity, so a user can update their password, change their name, and add their target reading speeds. I would also like to refine the continue a reading functionality, and some of the reading statistics. The display for existing texts also needs to be modified for scalability, with pagination. Finally, a user should also be able to provide feedback and report bugs. 

## Author
Christine Bumpous


## License

This project is licensed under the GNU General Public License.

                          
## Acknowledgments                                      

This application was created during Flatiron School’s Software Engineering bootcamp for the final project in Mod5.  Thanks to my instructors Ix, Soundarya and John for getting me to where I are in my coding journey, as well as thanks to my technical coaches, Hal and Matt.

