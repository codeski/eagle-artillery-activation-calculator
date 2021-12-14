import React, {useEffect, useState} from 'react'
import { SpellsData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addSpells, resetSpells } from '../actions'

const Spells = () => {

    const [spellTotal, setSpellTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

    const spells = useSelector(state => state.spells)   

    useEffect(() => {
        let total = spells.reduce((a, b) => {
            return a + b.space * b.quantity
        }, 0)
        setSpellTotal(total)
        if (total >= 70) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        
    }, [spells])

    const handleClick = (e, spell) => {
        if (!e.currentTarget.disabled) { 
            if ((spellTotal + spell.space) > 70) {
                //does nothing
            } else if ((spellTotal + spell.space) === 70) {
                spell.quantity = spell.quantity + 1
                dispatch(addSpells(spell))
                setDisabled(true)
            } else if ((spellTotal + spell.space) <= 65) {
                spell.quantity = spell.quantity + 1
                dispatch(addSpells(spell))
            } 
        } 
    }

    const resetButton = (e) => {
        setDisabled(false)
        setSpellTotal(0)
        dispatch(resetSpells())
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
                    { spell.quantity ? spell.quantity : null}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset Spells</button>
            <n>Spell Total: {spellTotal}</n>
        </div>

    )
}

export default Spells