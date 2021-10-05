import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
// import Totals from './componenets/totals'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)

    const handleClick = (e) => {
        setHeroTotal(prevHeroTotal => prevHeroTotal + parseInt(e.target.attributes.space.value))
        
    }

    return (
        <div>
            {HerosData.map(hero =>          
                <button onClick={(e) => handleClick(e) }>
                    <img 
                        src={hero.pic} 
                        alt={hero.name} 
                        space={hero.space}>
                    </img>
                </button>
            )}
        </div>  
    )
}

export default Heros