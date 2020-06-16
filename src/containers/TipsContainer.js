import React, { Component } from 'react'
import '../CSS/Tips.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


// <iframe src="https://giphy.com/embed/3o85xBwvWcj1Z11Gda" className="logo"></iframe>


export class Tips extends Component {
    render() {
        return (
            <div className="game-form">
            <section>
                <h2 className="h1 text-center">Reading Tips</h2>
            </section>
            <h3>Using This App</h3>
            <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                    What is the purpose of this application?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        This application can help you improve your reading speed and comprehension.  Understanding what you reading
                        takes a combination of fast and slower reading.  Read too fast and you won't understand, but if you read too slowly, you 
                        will also lose understanding.  Skimming and slow reading together give you great results in both time and comprehension level.
                    </p>
                    <p>
                        This application is self-guided.  It is up to you to decide what you understand, what pace is comfortable.  This is a place to practice self-evaluation!  
                        You are in charge of your material and your performance.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How to set up a reading practice
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                       On the set up page, you should enter your training speeds in words per minute for skimming (try 400 if you don't know where to start)
                        and comprehension reading (try 200, if you don't know your pace).  Then choose your reading material.  You can add a text of your own, read something 
                        already in the database, or continue a reading you already started.  Please note, any material you add is available to all users.
                    </p>
                    <p>
                        Please notice that new readings will estimate the reading difficulty of the text using  
                         <a href="https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula"> the Dale-Chall readability score</a>.  Please note that most
                        readers find L6 to be a comfortable reading level.  If you choose to read a harder text, you may find it necessary to slow your reading speed.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How to use the skimming section
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In the skimming section, you will see 250 words of your chosen text in the middle of the screen, displayed
                        in blocks.  The faster your skimming speed, the more words you will see in a block, and the smaller the font will be.</p>
                        <p>
                        Below the reading area, you will see a notepad.  Write notes here about the text.  Don't write sentences, just write key words
                        you see, or general ideas.  When the text stops, finish your notes and click the button to continue to the next section. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How to use the comprehension section
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In the comprehension section, you will see the same 250 words of your chosen text in the middle of the screen.  You may notice shorter
                        blocks of text or larger font, because this speed is slower than your skimming speed.</p>
                    <p>
                        Again, you will find a note pad to take notes below the text.  Make more notes about the reading sections.  Don't write 
                        sentences, just write key words and ideas.  When the text stops, finish your notes and click the button to continue to the next section.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How to use the review section
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In the review section you will see the complete 250 words of text at the top of the page, and you can listen to it, if you like.
                    </p>
                    <p> 
                        Below the text, you'll see the notes you took during skimming and slow reading.  Compare your notes with the complete text.
                        What did you understand during skimming?  What did you miss or misunderstand?  Aim for understanding 25-50% of the general idea of the text during skimming.
                    </p>
                    <p>
                        Below your notes, you'll see two questions to evaluate your performance.  These self-evaluations are to help you understand how your training
                        is going.  Are you challenging yourself?  Are you pushing too hard, and losing comprehension?  Click the button after the self-evalatuion questions to save your practice session.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <br></br>
        <h3>Finding Reading Material</h3>
            <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Where can I find public books?
                    </AccordionItemButton>
                </AccordionItemHeading >
                <AccordionItemPanel className="panel">
                    <p>
                        <a href="https://www.gutenberg.org/browse/scores/top">Project Gutenberg Top 100</a><br></br>
                        <a href="http://projectgutenbergproject.blogspot.com/2014/05/wishlist-black-writers-in-public-domain.html">Diverse Authorship available at Project Gutenberg</a><br></br>
                        <a href="https://www.gutenberg.org/wiki/Science_Fiction_by_Women_(Bookshelf)">Women in Science Fiction on Project Gutenberg</a><br></br>
                        <a href="https://www.freechildrenstories.com/">Stories for Children</a><br></br>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Where can I find academic or scientific reading material?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        <a href="https://scholar.google.com/">Google Scholar</a><br></br>
                        <a href="https://www.sciencemag.org/">Science Magazine</a><br></br>

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Where can I find news?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        <a href="https://www.timeforkids.com/">Time Magazine for Kids and Lower Level Readers</a><br></br>
                        <a href="https://www.entrepreneur.com/">Entrepreneur Magazine</a><br></br>
                        <a href="https://www.nytimes.com/section/learning">NY Times for Learners</a><br></br>
                        <a href="https://www.tweentribune.com/">Smithsonian Grade Level Learning</a><br></br>

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <br></br>
        <h3>Reading Effectively</h3>
            <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Why is skimming important?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        Skimming gives you a preview of your reading material.  This means when you read it again more
                        slowly, it will be easier to understand because you already know a little bit of what it says.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How is skimming different than other reading?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In the same way, you don't read a word letter by letter, when you read by skimming, you don't read all the words to yourself, 
                        and don't move your eyes horizontally across every line.  You should read through the middle of the page, vertically, and let 
                        words jump out at you - usually because they are longer or have unfamiliar shapes (not <a href="https://sightwords.com/sight-words/dolch/">sight words</a>).
                    </p>
                </AccordionItemPanel>
            </AccordionItem>            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        How fast should I be reading?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        How fast you read may depend on why you are reading, but generally, 250-300 words per minute is a good target 
                        that should allow you to understand the content and not get stuck.  <a href="https://irisreading.com/what-is-the-average-reading-speed/">This</a> is an interesting
                        article, if you are interested in learning more about reading speed.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        What grade level should I be reading?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        Just because you finished 12 years of education, you should not automatically expect to easily read
                        level 12 material.  Most people are more comfortable reading between 5-9th grade level material.  Higher 
                        levels will require more effort, and similarly slower pace of reading to understand to a similar degree. 
                    </p>
                    <p>
                        Newspapers like the New York Times, China Daily, or London Times are graded around level 10-12.  Many famous novelists
                        write around a 7th grade reading level, because this is comfortable and accessible to a wide range of people.  
                    </p>
                    <p>
                        Remember that readability level does not tell you about content -- every piece written at grade 7 reading level
                        is not written for 7th grade children.  <a href="https://contently.com/2015/01/28/this-surprising-reading-level-analysis-will-change-the-way-you-write/">This</a> 
                        is another interesting article about reading levels.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        </div>
        );
    }
}

export default Tips
