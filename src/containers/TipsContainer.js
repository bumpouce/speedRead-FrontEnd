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
                    What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
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
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading >
                <AccordionItemPanel className="panel">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
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
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
                <AccordionItemHeading className="heading">
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="panel">
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

        </div>
        );
    }
}

export default Tips
