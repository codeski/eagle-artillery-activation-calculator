import React, {useState} from 'react'
import Button from './button'
import {exlixirTroops} from '../data/troopData'



const Troops = () => {
    const [counter, setCounter] = useState(0)
    const [spellcount, setSpellcount] = useState(0)

    const getTroops = () => {
        return exlixirTroops.map(troop => <Button pic={troop.pic} name={troop.name} />)
        // return (
        //     troops.map(troop => (
        //         <button>
        //             <img src={troop.pic} alt={troop.name}></img>
        //         </button>)
        //     )
        // )
    }

    return (
        <div>
            {getTroops()}
        </div>
    )
}

export default Troops 