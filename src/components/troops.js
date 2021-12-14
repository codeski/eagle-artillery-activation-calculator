import React, {useEffect, useState} from 'react'
import { RegTroops } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addTroops, resetTroops } from '../actions'

const Troops = () => {
    const [troopTotal, setTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

    const troops = useSelector(state => { 
        return state.troops
    })
    

    useEffect(() => {
        let total = troops.reduce((a, b) => {
            return a + b.space * b.quantity
        }, 0)
        setTroopTotal(total)
        
    }, [troops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            troop.quantity = troop.quantity + 1 
            dispatch(addTroops(troop))
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        dispatch(resetTroops())
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
                    <img className="troops"
                        src={troop.pic} 
                        alt={troop.name} 
                        space={troop.space}
                        quantity={troop.quantity}>
                    </img>
                    { troop.quantity ? troop.quantity : null}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset Troops</button>
            <n>Troop Total: {troopTotal}</n>
        </div>
    )
}

export default Troops