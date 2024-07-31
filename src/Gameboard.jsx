import GameCard from "./GameCard"
import './styles/gameboard.css'
import { newTeamsData, getRandomTeams } from "./functions";
import { useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Gameboard({addCount, resetCount}) {
    // Card count sets how many teams will be rendered
    const cardCount = 16;
    // Team data grabs the amount of teams set in cardCount randomly from the set of 32 nfl teams
    const teamData = useRef(getRandomTeams(newTeamsData(), cardCount));
    console.log(teamData);
    // finds the selected team on click and runs markSelected function
    const handleClick = (e) => {
        console.log(teamData)
        const selected = (e.target.closest('.boardCard').innerText);
        const foundTeam = teamData.current.find((team) => team.teamName === selected)
       // Do the following if the Team has already been clicked before
       console.log(foundTeam)
       if (foundTeam.clicked === true){
            console.log('already clicked')
            // Reset counter in scoreboard
            resetCount()
            // Get a new set of teams and set it in teamdata
            let newTeamData = getRandomTeams(newTeamsData(), cardCount)
            teamData.current = newTeamData
            // set the card layouts with the new set of teams
            setCardLayout(createCards(newTeamData))
        // Do the following if the team has not been clicked before
       } else {
            console.log('not already clicked')
            // Add +1 to the scoreboard counter
            addCount()
            // Update the team data with the selected team as clicked = true
            const updatedTeamData = teamData.current.map(team => {
                if (team.teamName === foundTeam.teamName)
                    return {...team, clicked: true}
                else
                    return team
            })
            console.log(updatedTeamData)
            teamData.current = updatedTeamData
            // Shuffle the card layout
            shuffleArray()
       }
    }


    // creates the cards for the board
    const createCards = () => {
        const cards = teamData.current.map((team) =>
            <GameCard teamName={team.teamName} key={team.teamName} handleClick={handleClick} /> )
        return cards
    }

    const [cardLayout, setCardLayout] = useState(createCards())

    // Shuffles the array into a new order when called
    const shuffleArray = () => {
        const shuffledData = teamData.current
        for (let i = shuffledData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = shuffledData[i];
            shuffledData[i] = shuffledData[j];
            shuffledData[j] = temp;
        }
        setCardLayout(createCards(shuffledData))
    }
    

    return (
        <div className="boardDiv">
            {cardLayout}
        </div>
    )
}