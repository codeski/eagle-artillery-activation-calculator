import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addHero, resetHeros } from '../actions'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [chosenTroops, setChosenTroops] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        let total = chosenTroops.reduce((a, b) => {
            return a + b.space
        }, 0)
        setHeroTotal(total)
    },[chosenTroops])

    const handleClick = (e, hero) => {
        if  (!e.currentTarget.disabled) {
            e.currentTarget.disabled = true
            setChosenTroops(prevChosenTroops => prevChosenTroops.concat(hero))
            dispatch(addHero(hero))
        } 
    }

    const resetButton = (e) => {
        let selected = document.querySelectorAll("#heroButton")
        selected.forEach(troop => troop.disabled = false)
        setHeroTotal(0)
        setChosenTroops([])
        dispatch(resetHeros())
    } 

    return (
        <div>
            <h3>Heros</h3>
            {HerosData.map(hero =>          
                <button id="heroButton" key={hero.name} onClick={(e) => handleClick(e, hero)} disabled={disabled}>
                    <img className="troops"   
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>Hero Total: {heroTotal}</n>
        </div>  
    )
}

export default Heros