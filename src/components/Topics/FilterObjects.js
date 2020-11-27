import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            tools : [
                {
                    tool : 'wrench',
                    color : 'black',
                    size : 5
                },
                {
                    tool : 'screwdriver',
                    color : 'silver',
                    size : 12
                },
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    tool : 'hammer',
                    hardness : 'soft',
                    weight : 17
                }
            ],

            userInput: '',
            filteredTools: []



        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterTools(prop) {
        let tools = this.state.tools;
        let filteredTools = [];

        for ( let i = 0; i < tools.length; i++ ) {
            if ( tools[i].hasOwnProperty(prop) ) {
                filteredTools.push(tools[i]);
            }
        }
        this.setState({ filteredTools: filteredTools });
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.tools, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterTools(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectPB">Filtered: { JSON.stringify(this.state.filteredTools, null, 10)}</span>
            </div>
        )
    }
}