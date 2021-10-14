import React, {useEffect, useState} from 'react'
import { SiegeMachinesData } from '../data/data'
// import ChosenTroops from './chosenTroops'

const SiegeMachines = () => {

    const [siegeTotal, setSiegeTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)
    // const [addSiege, setAddSiege] = useState([])

    // useEffect(()=>{
    //     console.log(<ChosenTroops />)
    // })

    const handleClick = (e) => {
        if (!e.currentTarget.disabled) {

            // setSiegeTotal(prevSiegeTotal => prevSiegeTotal + parseInt(e.target.attributes.space.value))
            setSiegeTotal(1)
            console.log(e.target.attributes.disabled)
            setDisabled(true) 
        }
    }

    const resetButton = (e) => {
        setDisabled(previousDisabled => previousDisabled = false)
        setSiegeTotal(previousSiegeTotal => previousSiegeTotal = 0)
    } 

    return (
        <div>
            {SiegeMachinesData.map(siege =>          
                <button key={siege.name} onClick={(e) => handleClick(e)} disabled={disabled}>
                    <img
                         
                        src={siege.pic} 
                        alt={siege.name} 
                        space={siege.space}>
                    </img>
                </button>
                
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <p>{siegeTotal}</p>
        </div>
    )
}

export default SiegeMachines
