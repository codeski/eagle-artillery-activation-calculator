import React, {useEffect, useState} from 'react'
import { SpellsData } from '../data/data'
import ChosenTroops from './chosenTroops'
import { useSelector, useDispatch } from 'react-redux'
import { getTroops } from '../actions'

const Spells = (props) => {
    const [chosenSpells, setChosenSpells] = useState([])
    const [spellTotal, setSpellTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

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
                dispatch(getTroops(spell))
                setDisabled(true)
                setChosenSpells(prevChosenSpells => prevChosenSpells.concat(spell))
                spell.quantity = spell.quantity + 1
            } else if ((spellTotal + spell.space) <= 65) {
                dispatch(getTroops(spell))
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
                    <img className="troops"
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
            <ChosenTroops choseSpells={chosenSpells} {...props} />
        </div>

    )
}

export default Spells