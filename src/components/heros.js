import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addHero, resetHeros } from '../actions'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)
    // const [chosenTroops, setChosenTroops] = useState([])

    const dispatch = useDispatch()

    const heros = useSelector(state => state.heros)

    useEffect(() => {
        let total = heros.reduce((a, b) => {
            return a + b.space
        }, 0)
        setHeroTotal(total)
    },[heros])

    const handleClick = (e, hero) => {
        if  (!e.currentTarget.disabled) {
            hero.quantity = hero.quantity + 1
            e.currentTarget.disabled = true
            // setChosenTroops(prevChosenTroops => prevChosenTroops.concat(hero))
            dispatch(addHero(hero))
        } 
    }

    const resetButton = (e) => {
        let selected = document.querySelectorAll(".heroButton")
        selected.forEach(troop => troop.disabled = false)
        dispatch(resetHeros())
    } 

    return (
        <div>
            <h3>Heros</h3>
            {HerosData.map(hero =>          
                <button id={hero.name} key={hero.name} className="heroButton" onClick={(e) => handleClick(e, hero)} disabled={disabled}>
                    <img className="troops"   
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <button onClick={(e) => resetButton(e)}>Reset Heros</button>
            <n>Hero Total: {heroTotal}</n>
        </div>  
    )
}

export default Heros