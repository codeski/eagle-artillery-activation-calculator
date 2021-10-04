import React, {useState} from 'react'
import { ElixirSpells, DEspells } from '../data/troopData'
import Button from './button'

const Spells = () => {
    const [spellcount, setSpellcount] = useState(0)

    const getElixirSpells = () => {
        return (
            ElixirSpells.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }

    const getDEspells = () => {
        return (
            DEspells.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }

    return (
        <div>
            {getElixirSpells()}
            {getDEspells()}
        </div>
    )

}

export default Spells