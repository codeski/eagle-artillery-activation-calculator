import React, {useState} from 'react'
import { SpellsData } from '../data/data'

const Spells = () => {
    // const [spellcount, setSpellcount] = useState(0)

    return (
        <div>
            {SpellsData.map(spell =>                 
                <button>
                    <img 
                        src={spell.pic} 
                        alt={spell.name} 
                        space={spell.space}>
                    </img>
                </button>
            )}
        </div>

    )
}

export default Spells