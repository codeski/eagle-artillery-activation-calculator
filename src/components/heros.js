import React, {useState, useEffect} from 'react'
import { HerosData } from '../data/data'
import { useSelector, useDispatch } from 'react-redux'
import { addHero, resetHeros } from '../actions'
import { Button } from '@material-ui/core' 
import DeleteIcon from '@material-ui/icons/Delete'

const Heros = () => {
    
    const [heroTotal, setHeroTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    const dispatch = useDispatch()

    const heros = useSelector(state => state.heros)

    useEffect(() => {
        let total = heros.reduce((a, b) => {
            return a + b.space
        }, 0)
        setHeroTotal(total)
        if (heros.length === 0) {
            let selected = document.querySelectorAll(".heroButton")
            selected.forEach(troop => troop.disabled = false)
        }
    },[heros])

    const handleClick = (e, hero) => {
        if  (!e.currentTarget.disabled) {
            hero.quantity = hero.quantity + 1
            e.currentTarget.disabled = true
            dispatch(addHero(hero))
        } 
    }

    const resetButton = (e) => {
        let selected = document.querySelectorAll(".heroButton")
        selected.forEach(troop => troop.disabled = false)
        dispatch(resetHeros())
    } 

    return (
        <div>
            <h3>Heros: {heroTotal}
                <Button
                    endIcon={<DeleteIcon />} 
                    size='small' 
                    style={{
                        fontSize: 14,
                        marginTop: 13.5
                    }}
                    variant='contained' 
                    color='secondary'
                    onClick={(e) => resetButton(e)}
                    >Reset
                </Button>
            </h3>
            <div className="hero-container">
                {HerosData.map(hero =>          
                    <button id={hero.name} key={hero.name} className="heroButton" onClick={(e) => handleClick(e, hero)} disabled={disabled}>
                        <img className="troops"   
                            src={hero.pic} 
                            alt={hero.name} 
                            space={hero.space}>
                        </img>
                    </button>
                
                )}
            </div>
        </div>  
    )
}

export default Heros