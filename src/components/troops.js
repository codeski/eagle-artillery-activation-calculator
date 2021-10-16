import React, {useEffect, useState} from 'react'
import { RegTroops } from '../data/data'

const Troops = () => {
    const [chosenTroops, setChosenTroops] = useState([])
    const [troopTotal, setTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let total = chosenTroops.reduce((a, b) => {
            return a + b.space
        }, 0)
        setTroopTotal(total)
        
    }, [chosenTroops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            troop.quantity = troop.quantity + 1
            setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop)) 
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        setTroopTotal(0)
        setChosenTroops([])
        RegTroops.forEach(troop => troop.quantity = 0)
    } 

    // const disableSomeOrAllTroops = (e) => {
    //     //select Troops from the DOM
    //     //iterate through and disable
    // }

    return (
        <div>
            <h3>Troops</h3>
            {RegTroops.map(troop =>                 
                <button id="troopButton" onClick={ (e) =>handleClick(e, troop)} key={troop.name} disabled={disabled}>
                    <img 
                        src={troop.pic} 
                        alt={troop.name} 
                        space={troop.space}
                        quantity={troop.quantity}>
                    </img>
                    {troop.quantity}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>troop Total: {troopTotal}</n>
        </div>
    )
}

export default Troops