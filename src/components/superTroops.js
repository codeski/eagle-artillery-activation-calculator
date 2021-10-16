import React, {useEffect, useState} from 'react'
import { SuperTroopData } from '../data/data'

const SuperTroops = () => {
    const [chosenSuperTroops, setChosenSuperTroops] = useState([])
    const [superTroopTotal, setSuperTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let total = chosenSuperTroops.reduce((a, b) => {
            return a + b.space
        }, 0)
        setSuperTroopTotal(total)
        
    }, [chosenSuperTroops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            troop.quantity = troop.quantity + 1
            setChosenSuperTroops(prevChosenTroops => prevChosenTroops.concat(troop)) 
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        setSuperTroopTotal(0)
        setChosenSuperTroops([])
        SuperTroopData.forEach(troop => troop.quantity = 0)
    } 

    // const disableSomeOrAllTroops = (e) => {
    //     //select Troops from the DOM
    //     //iterate through and disable
    // }

    return (
        <div>
            <h3>Super Troops</h3>
            {SuperTroopData.map(troop =>                 
                <button id="troopButton" onClick={ (e) =>handleClick(e, troop)} key={troop.name} disabled={disabled}>
                    <img className="troops"
                        src={troop.pic} 
                        alt={troop.name} 
                        space={troop.space}
                        quantity={troop.quantity}>
                    </img>
                    {troop.quantity}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>Super Troop Total: {superTroopTotal}</n>
        </div>
    )
}

export default SuperTroops