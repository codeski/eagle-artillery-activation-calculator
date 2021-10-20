import React, {useEffect, useState} from 'react'
import { RegTroops } from '../data/data'
// import ChosenTroops from './chosenTroops'
import { useSelector, useDispatch } from 'react-redux'
import { getTroops } from '../actions'

const Troops = () => {
    const [chosenTroops, setChosenTroops] = useState([])
    const [troopTotal, setTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()
    

    useEffect(() => {
        let total = chosenTroops.reduce((a, b) => {
            return a + b.space
        }, 0)
        setTroopTotal(total)
        
        // const unique = Array.from(new Set(chosenTroops))

        // console.log(unique)
        
    }, [chosenTroops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            troop.quantity = troop.quantity + 1
            
            setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop)) 
            dispatch(getTroops(troop))
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
                    <img className="troops"
                        src={troop.pic} 
                        alt={troop.name} 
                        space={troop.space}
                        quantity={troop.quantity}>
                    </img>
                    { troop.quantity ? troop.quantity : null}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>Troop Total: {troopTotal}</n>
            {/* <ChosenTroops choseTroops={chosenTroops} {...props} /> */}
        </div>
    )
}

export default Troops