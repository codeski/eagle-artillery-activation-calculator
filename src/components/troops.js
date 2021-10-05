import React, {useState} from 'react'
import Button from './button'
import {exlixirTroops, DEtroops, SuperTroops} from '../data/data'



const Troops = () => {
    const [counter, setCounter] = useState(0)
    

    const getElixirTroops = () => {
        return (   
                exlixirTroops.map(troop => <Button pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }

    const getDEtroops = () => {
        return (
            DEtroops.map(troop => <Button pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }

    const getSuperTroops = () => {
        return (
            SuperTroops.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }

    return (
        <div className="troops">
            {getElixirTroops()}
            {getDEtroops()}
            {getSuperTroops()}
        </div>
    )
}

export default Troops 