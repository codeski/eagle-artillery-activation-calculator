import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
// import ChosenTroops from './chosenTroops'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [chosenTroops, setChosenTroops] = useState([])

    useEffect(() => {
        let nums = []
        chosenTroops.forEach(troop => {
            nums.push(troop.space)
        })

        let total = nums.reduce((a, b) => {
            return a + b
        }, 0)
        
        setHeroTotal(total)

    },[chosenTroops])

    const handleClick = (e, hero) => {
        // console.log(hero)
        if  (!e.currentTarget.disabled) {
            console.log(e.target)
            // e.target.disabled = true
            e.currentTarget.disabled = true
            setChosenTroops(prevChosenTroops => prevChosenTroops.concat(hero))
            console.log(chosenTroops)} 
    }

    const resetButton = (e) => {
        console.log("YO What's up?")
        let selected = document.querySelectorAll("#heroButton")
        // console.log("this is selected", selected)
        selected.forEach(troop => troop.disabled = false)
        setHeroTotal(0)
        setChosenTroops([])
    } 

    return (
        <div>
            {HerosData.map(hero =>          
                <button id="heroButton" key={hero.name} onClick={(e) => handleClick(e, hero)} disabled={disabled}>
                    <img    
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <p>{heroTotal}</p>
            {/* {console.log(chosenTroops)} */}
        </div>  
    )
}

export default Heros