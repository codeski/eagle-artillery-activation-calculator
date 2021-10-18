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

            setSiegeTotal(1)
            setDisabled(true) 
        }
    }

    const resetButton = (e) => {
        setDisabled(false)
        setSiegeTotal(0)
    } 

    return (
        <div>
            <h3>Siege Machines</h3>
            {SiegeMachinesData.map(siege =>          
                <button key={siege.name} onClick={(e) => handleClick(e)} disabled={disabled}>
                    <img className="troops"
                        src={siege.pic} 
                        alt={siege.name} 
                        space={siege.space}>
                    </img>
                </button>
                
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>Siege Total: {siegeTotal}</n>
        </div>
    )
}

export default SiegeMachines
