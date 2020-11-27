import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        super();

        this.state = {
            unFilteredArray : ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark'],
            userInput: '',
            filteredArray : []
        };
       
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterArray(prop) {
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = [];

        for ( let i = 0; i < unFilteredArray.length; i++ ) {
            if ( unFilteredArray[i].includes(prop) ) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState({ filteredArray: filteredArray });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                {/* <p>{console.log(this.state.filteredArray)}</p> */}
                <h4>Filter Strings</h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unFilteredArray,null, 10 ) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
                <span className="resultBox filterStringRB">Filtered Strings: {JSON.stringify(this.state.filteredArray, null,10 )}</span>
            </div>
        )
    }
}

