import React, {useEffect, useState} from 'react'
import { SiegeMachinesData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addSiege, resetSiege } from '../actions'

const SiegeMachines = () => {

    const [siegeTotal, setSiegeTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const siege = useSelector(state => state.siege)
    const dispatch = useDispatch()

    useEffect (() => {
        let total = siege.reduce((a, b) => {
            return a + b.space * b.quantity
        }, 0)
        setSiegeTotal(total)
        if (siege.length === 0) {
            setDisabled(false)
        }
    }, [siege])

    const handleClick = (e, siege) => {
        if (!e.currentTarget.disabled) {
            siege.quantity = siege.quantity + 1
            setSiegeTotal(1)
            dispatch(addSiege(siege))
            setDisabled(true) 
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        setSiegeTotal(0)
        dispatch(resetSiege())
    } 

    return (
        <div>
            <h3>Siege Machines</h3>
            {SiegeMachinesData.map(siege =>          
                <button key={siege.name} onClick={(e) => handleClick(e, siege)} disabled={disabled}>
                    <img className="troops"
                        src={siege.pic} 
                        alt={siege.name} 
                        space={siege.space}>
                    </img>
                </button>
                
            )}
            <button onClick={(e) => resetButton(e)}>Reset Siege</button>
            <n>Siege Total: {siegeTotal}</n>
        </div>
    )
}

export default SiegeMachines
