import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
// import Totals from './componenets/totals'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    // const [disabled, setDisabled] = useState(false)

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
                <button onClick={(e) => handleClick(e)} disabled={false}>
                    <img 
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
            <p>{heroTotal}</p>
        </div>  
    )
}

export default Heros