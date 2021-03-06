import React, {useEffect, useState} from 'react'
import { SuperTroopData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addSuperTroop, resetSuperTroops } from '../actions'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete' 

const SuperTroops = () => {

    const [superTroopTotal, setSuperTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

    const superTroops = useSelector(state => state.superTroops)

    useEffect(() => {
        let total = superTroops.reduce((a, b) => {
            return a + b.space * b.quantity
        }, 0)
        setSuperTroopTotal(total)
        
    }, [superTroops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            troop.quantity = troop.quantity + 1 
            dispatch(addSuperTroop(troop))
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        dispatch(resetSuperTroops())
        SuperTroopData.forEach(troop => troop.quantity = 0)
    } 

    return (
        <div>
            <h3 className="army" >Super Troops: {superTroopTotal}
                <Button
                        endIcon={<DeleteIcon />} 
                        size='small' 
                        style={{
                            fontSize: 14,
                            marginLeft: '10px',
                        }}
                        variant='contained' 
                        color='secondary'
                        onClick={(e) => resetButton(e)}
                        >Reset
                </Button>
            </h3>
            <div className="army-container">
                {SuperTroopData.map(troop =>                 
                    <button id="troopButton" onClick={ (e) =>handleClick(e, troop)} key={troop.name} disabled={disabled}>
                        <img className="troops"
                            src={troop.pic} 
                            alt={troop.name} 
                            space={troop.space}
                            quantity={troop.quantity}>
                        </img>
                        <span id="quantity">{ troop.quantity ? troop.quantity : null}</span>
                    </button>    
                )}
            </div>

        </div>
    )
}

export default SuperTroops