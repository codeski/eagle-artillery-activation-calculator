
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTroop, resetArmy} from '../actions'

const EagleLvl = () => {

    const [rangeValue, setRangeValue ] = useState('5')
    const [activation, setActivation] = useState(200)
    const [armyTotal, setArmyTotal] = useState(0)

    const dispatch = useDispatch()
    
    const entireArmy = useSelector(state => { return state.troops.concat(state.superTroops, state.spells, state.heros, state.siege)})

    useEffect(() => {
        let total = entireArmy.reduce((a, b) => { 
            return a + b.space * b.quantity
        }, 0)
        setArmyTotal(total)
    }, [entireArmy])

    // useEffect (() => {
    //     if (armyTotal >= activation) {
    //         //disable all buttons
    //         //activation written 
    //     }

    // }, [armyTotal])

    const valueChange = async (event) => {
         setRangeValue(event.target.value)
         if (event.target.value === '1' || event.target.value === '2') {
             setActivation(180)
         } else {
             setActivation(200)
         }
    }

    const imageChange = () => {
        if (rangeValue === "5"){
            return "/images/Eaglelvls/Eagle_Artillery5.webp"
        } else if (rangeValue === "4"){
            return "/images/Eaglelvls/Eagle_Artillery4.webp" 
        } else if (rangeValue === "3"){
            return "/images/Eaglelvls/Eagle_Artillery3.webp"
        } else if (rangeValue === "2"){
            return "/images/Eaglelvls/Eagle_Artillery2.webp"
        } else if (rangeValue === "1"){
            return "/images/Eaglelvls/Eagle_Artillery1.webp"
        }
    }


    const handleClick = (e, troop) => {
        troop.quantity = troop.quantity - 1
        dispatch(removeTroop(troop))
        if (troop.type === 'heros') {
            let selected = document.querySelectorAll(".heroButton")
            selected.forEach(hero => {
                if (troop.name === hero.id){
                    hero.disabled = false
                }
            })
        } 
    }

    const uniqueArmy = () => {
        if (entireArmy){
            return entireArmy.map(troop => {
                    return (
                        <button onClick={ (e) => handleClick(e, troop) } id={troop.name} key={troop.name}>
                            <img  className="troops" src={troop.pic} alt={troop.name} ></img>
                            { troop.type === "troops" || troop.type === "spells" || troop.type === "superTroops" ? troop.quantity : null}
                        </button>
                    )
            })
        }
    }

    const reset = () => {
        entireArmy.forEach(troop => troop.quantity = 0)
        dispatch(resetArmy())
    }

    return (
        <div>
            <img src={imageChange()} alt={`Eagle Level {rangeValue}`} />
            <br />
            <input onChange={valueChange} type="range" min="1" max="5" step="1" />
            <h3>Eagle Level {rangeValue}</h3>
            <h3>Activates @ {activation}</h3>
            <h1>{armyTotal}/{activation}</h1>
            {armyTotal >= activation ? <h1>Eagle Artillery Activated</h1> : null}
            
            {uniqueArmy()}
            <button onClick={() => reset()}>Reset Army</button>
            
            <br />
        </div>
    )
}

export default EagleLvl