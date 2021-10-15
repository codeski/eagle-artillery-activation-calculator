import React, {useState} from 'react'
import Button from './button'
import {exlixirTroops, DEtroops, SuperTroops} from '../data/data'



const Troops = () => {
    // const [counter, setCounter] = useState(0)
    

    const getElixirTroops = () => {
        return (   
                exlixirTroops.map(troop => <Button key={troop.name} pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }

    const getDEtroops = () => {
        return (
            DEtroops.map(troop => <Button key={troop.name} pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }

    const getSuperTroops = () => {
        return (
            SuperTroops.map(troop => <Button key={troop.name} pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }

    return (
        <div className="troops">
            <h3>Troops</h3>
            {getElixirTroops()}
            {getDEtroops()}
            <h3>Super Troops</h3>
            {getSuperTroops()}
        </div>
    )
}

export default Troops 