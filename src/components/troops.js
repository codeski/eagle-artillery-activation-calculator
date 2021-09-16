import React, {useState} from 'react'
import Button from './button'
import {exlixirTroops, DEtroops, ElixirSpells} from '../data/troopData'



const Troops = () => {
    const [counter, setCounter] = useState(0)
    const [spellcount, setSpellcount] = useState(0)

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

    const getElixirSpells = () => {
        return (
            ElixirSpells.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }

    return (
        <div>
            {getElixirTroops()}
            {getDEtroops()}
            {getElixirSpells()}
        </div>
    )
}

export default Troops 