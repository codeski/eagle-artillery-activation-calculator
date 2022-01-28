import React, {useEffect, useState} from 'react'
import { SiegeMachinesData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addSiege, resetSiege } from '../actions'
import { Button } from '@material-ui/core' 
import DeleteIcon from '@material-ui/icons/Delete'

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
        SiegeMachinesData.forEach(siege => siege.quantity = 0)
    } 

    return (
        <div className="siege">
            <h3>Siege Machines: {siegeTotal} 
                <Button
                    endIcon={<DeleteIcon />} 
                    size='small' 
                    style={{
                        fontSize: 14
                    }}
                    variant='contained' 
                    color='secondary'
                    onClick={(e) => resetButton(e)}
                    >Reset
                </Button>
            </h3>
            <div className="siege-container">
                {SiegeMachinesData.map(siege =>          
                    <button key={siege.name} onClick={(e) => handleClick(e, siege)} disabled={disabled}>
                        <img className="troops"
                            src={siege.pic} 
                            alt={siege.name} 
                            space={siege.space}>
                        </img>
                    </button>
                )}
            </div>
            <p>(only 1 troop, CC troops do not count toward activation)</p>
        </div>
    )
}

export default SiegeMachines
