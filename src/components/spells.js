import React, {useEffect, useState} from 'react'
import { SpellsData } from '../data/data'

const Spells = () => {
    const [chosenSpells, setChosenSpells] = useState([])
    const [spellTotal, setSpellTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let total = chosenSpells.reduce((a, b) => {
            return a + b.space
        }, 0)
        setSpellTotal(total)
        
    }, [chosenSpells])

    const handleClick = (e, spell) => {
        if (!e.currentTarget.disabled) {
            if ((spellTotal + spell.space) > 70) {
                //does nothing
            } else if ((spellTotal + spell.space) === 70) {
                setDisabled(true)
                setChosenSpells(prevChosenSpells => prevChosenSpells.concat(spell))
                spell.quantity = spell.quantity + 1
            } else if ((spellTotal + spell.space) <= 65) {
                setChosenSpells(prevChosenSpells => prevChosenSpells.concat(spell))
                spell.quantity = spell.quantity + 1
                // console.log('these are chosen', chosenSpells)
            } 
        } 
    }

    const resetButton = (e) => {
        setDisabled(false)
        setSpellTotal(0)
        setChosenSpells([])
        SpellsData.forEach(spell => spell.quantity = 0)
    } 

    // const disableSomeOrAllSpells = (e) => {
    //     //select spells from the DOM
    //     //iterate through and disable
    // }

    return (
        <div>
            <h3>Spells</h3>
            {SpellsData.map(spell =>                 
                <button id="spellButton" onClick={ (e) =>handleClick(e, spell)} key={spell.name} disabled={disabled}>
                    <img 
                        src={spell.pic} 
                        alt={spell.name} 
                        space={spell.space}
                        quantity={spell.quantity}>
                    </img>
                    {spell.quantity}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>Spell Total: {spellTotal}</n>
        </div>

    )
}

export default Spells