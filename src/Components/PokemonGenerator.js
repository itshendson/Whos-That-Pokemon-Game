import React, { Component } from "react"
import MultipleChoices from "./MultipleChoices"
import TheStage from "./TheStage"

class PokemonGenerator extends Component {
    totalPokemon = 151

    constructor() {
        super()
        this.state = {
            correctImg: "https://d.newsweek.com/en/full/822411/pikachu-640x360-pokemon-anime.jpg",
            correctGuess: " ",
            guess1: "Guess",
            guess2: "Guess",
            guess3: "Guess",
            guess4: "Guess",
            score: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.startGame = this.startGame.bind(this)
    }

    startGame() {
        console.log('game started')
        document.getElementById('start-btn').classList.add('hide')
        document.getElementById('answer-container').classList.remove('hide')
        this.initializeFetchApiAndSetState()
    }


    handleClick(event) {
        event.preventDefault()
        this.checkGuessForCorrectAnswer(event)
        this.initializeFetchApiAndSetState()
    }

    //Helper Function: checks if selected answer is correct or not
    checkGuessForCorrectAnswer(event) {
        if (event.target.value === this.state.correctGuess) {
            this.setState(prevState => ({
                score: prevState.score + 1
            })
        )}
    }

    //Helper Function: Begins the whole step of fetching API and setting States
    initializeFetchApiAndSetState() {
        const randNum1 = Math.floor(Math.random() * this.totalPokemon)
        const randNum2 = Math.floor(Math.random() * this.totalPokemon)
        const randNum3 = Math.floor(Math.random() * this.totalPokemon)
        const randNum4 = Math.floor(Math.random() * this.totalPokemon)

        this.fetchApiAndSetStateForTheCorrectGuesses(randNum1)

        Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon/' + randNum1),
            fetch('https://pokeapi.co/api/v2/pokemon/' + randNum2),
            fetch('https://pokeapi.co/api/v2/pokemon/' + randNum3),
            fetch('https://pokeapi.co/api/v2/pokemon/' + randNum4),
        ])
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(responses => Promise.all(responses.map(r => r.name)))
        .then(responses => this.fisherYatesShuffle(responses))
        .then(responses => this.setStateForGuesses(responses))
        .catch(error => {
            console.log(error);
        })
    }

    //Helper Function: Takes the name of the pokemon and cast to MultipleChoice.js
    setStateForGuesses(guesses) {
        this.setState({
            guess1: guesses[0],
            guess2: guesses[1],
            guess3: guesses[2],
            guess4: guesses[3],
        })
        return guesses
    }


    //Helper Function: Takes in an array and returns a shuffled array
    fisherYatesShuffle(guesses) {
        for (let i = guesses.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = guesses[i]
            guesses[i] = guesses[j]
            guesses[j] = temp
        }
        return guesses
    }

    //Helper Function: This is where the Pokemon image is set
    fetchApiAndSetStateForTheCorrectGuesses(randNum) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + randNum)
        .then(response => response.json())
        .then(response => {
            this.setState({ 
                correctImg: response['sprites']['front_default'],
                correctGuess: response.name,
            })
        })
    }
   

    render() {
        return (
            <div className="container-main">

                <TheStage
                    data={this.state}
                />

                <div className="controls">
                    <button id="start-btn" onClick={this.startGame}>
                        Start
                    </button>
                </div>

                <div id="answer-container" className="hide">
                    <div id="button-grid">
                            <MultipleChoices
                                handleClick={this.handleClick}
                                data={this.state.guess1}
                            />
                            
                            <MultipleChoices
                                handleClick={this.handleClick}
                                data={this.state.guess2}
                            />

                            <MultipleChoices  
                                handleClick={this.handleClick}
                                data={this.state.guess3}
                            /> 

                            <MultipleChoices    
                                handleClick={this.handleClick}
                                data={this.state.guess4}
                            />  
                    </div>
                </div>             
            </div>
        )
    }
}

export default PokemonGenerator