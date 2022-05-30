import React from 'react';


const link = 'https://api.randomuser.me/';

export default class People extends React.Component {
    constructor(props) {
        super(props);
    
    this.state = {
        person: '',
        drawn: true
    }
}

    async componentDidMount() {
        const data = await fetch(link);
        const userData = await data.json();
        console.log(userData);
        this.setState({
            person: userData.results[0]});
    }

    deletePerson = () => {
        this.setState({
            drawn: false
        })
    }

    addPerson = () => {
        this.forceUpdate();//re-renders the entire component
        this.setState({drawn: true})
    }

    editPerson = () => {//sets the values of the person to the values in the form and then deletes the form contents
        const emailEntry = document.getElementById('email');
        const countryEntry = document.getElementById('country');
        const genderEntry = document.getElementById('gender');
        const cellEntry = document.getElementById('cell');

        const personEmail = document.getElementById('person-email');
        const personCountry = document.getElementById('person-country');
        const personGender = document.getElementById('person-gender');
        const personCell = document.getElementById('person-cell');

        const emailEntryText = emailEntry.innerText;
        const countryEntryText = countryEntry.innerText;
        const genderEntryText = genderEntry.innerText;
        const cellEntryText = cellEntry.innerText;

        personEmail.innerText = emailEntryText;
        personCountry.innerText = countryEntryText;
        personGender.innerText = genderEntryText;
        personCell.innerText = cellEntryText;

        emailEntryText.innerText = '';
        countryEntryText.innerText = '';
        genderEntryText.innerText = '';
        cellEntryText.innerText = '';

    }

    
    render() {

        return(
            <div>
            {this.state.drawn ? (
            <div>
                <h2>Person 1</h2>
                <div id='person-email'>Email: {this.state.person.email}</div>
                <div id='person-country'>Country of Residence: {this.state.person.nat}</div>
                <div id='person-gender'>Gender: {this.state.person.gender}</div>
                <div id='person-cell'>Cell #: {this.state.person.cell}</div>

                <button onClick={this.editPerson}>Edit Person</button>
                <input type='text' placeholder='Email' id='email'></input>
                <input type='text' placeholder='Country' id='country'></input>
                <input type='text' placeholder='Gender' id='gender'></input>
                <input type='text' placeholder='Cell' id='cell'></input><br></br>
                <button onClick={this.deletePerson}>Delete Person</button>
            </div>) : 
            <div>
                <h1>
                    <strong>
                        PERSON HAS BEEN DELETED
                    </strong>
                </h1>
                <div>
                    <button onClick={this.addPerson}>Add Person</button>
                </div>
            </div>
                }
            </div>
        );
    }
}
