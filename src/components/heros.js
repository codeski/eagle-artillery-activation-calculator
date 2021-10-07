import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
// import ChosenTroops from './chosenTroops'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState()
    const [chosenTroops, setChosenTroops] = useState([])

    // useEffect((e) => {
    //     handleClick
        
    // }, [])

    const handleClick = (e) => {
        if  (!e.currentTarget.disabled) {
            // console.log(e.target)
            setChosenTroops(prevChosenTroops => prevChosenTroops.concat(e.target))
            console.log(chosenTroops)
            setHeroTotal(prevHeroTotal => prevHeroTotal + parseInt(e.target.attributes.space.value))
            e.currentTarget.disabled = true
        }
    }

    const resetButton = (e) => {
        setDisabled(prevDisabled => prevDisabled = "")
        setHeroTotal(previousTotal => previousTotal = 0)
        setChosenTroops(previousChosenTroops => previousChosenTroops = [])
    } 

    return (
        <div>
            {HerosData.map(hero =>          
                <button onClick={(e) => handleClick(e)} disabled={disabled}>
                    <img 
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <p>{heroTotal}</p>
            {console.log(chosenTroops)}
        </div>  
    )
}

export default Heros