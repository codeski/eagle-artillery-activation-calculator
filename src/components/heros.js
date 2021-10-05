import React, {useState} from 'react'
import { HerosData } from '../data/data'
import Totals from '../components/totals'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const handleClick = (e) => {
        if (!e.currentTarget.disabled) {
            setHeroTotal(prevHeroTotal => prevHeroTotal + parseInt(e.target.attributes.space.value))
            console.log(e.target.attributes.disabled)
            e.currentTarget.disabled = true
        }
    }

    return (
        <div>
            {HerosData.map(hero =>          
                <button onClick={(e) => handleClick(e)} disabled={disabled}>
                    <img 
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <p>{heroTotal}</p>
            <Totals heroTotal={heroTotal} />
        </div>  
    )
}

export default Heros