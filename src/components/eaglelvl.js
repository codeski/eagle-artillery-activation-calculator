
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTroop, resetArmy} from '../actions'
import { Button } from '@material-ui/core' 
import Title from '../components/title' 
import DeleteIcon from '@material-ui/icons/Delete'

const EagleLvl = () => {

    const [rangeValue, setRangeValue ] = useState('5')
    const [activation, setActivation] = useState(200)
    const [armyTotal, setArmyTotal] = useState(0)
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    
    const entireArmy = useSelector(state => { return state.troops.concat(state.superTroops, state.spells, state.heros, state.siege)})

    useEffect(() => {
        let total = entireArmy.reduce((a, b) => { 
            return a + b.space * b.quantity
        }, 0)
        setArmyTotal(total)
    }, [entireArmy])

    useEffect(() => {
        if (armyTotal >= activation) {
            setActive(true)
        } else {
            setActive(false)
        }
        changeBackgroundColor(active)
    }, [entireArmy])

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
                            <span id="quantity">{ troop.type === "troops" || troop.type === "spells" || troop.type === "superTroops" ? troop.quantity : null}</span>
                        </button>
                    )
            })
        }
    }

    const resetButton = () => {
        entireArmy.forEach(troop => troop.quantity = 0)
        dispatch(resetArmy())
    }

    const changeBackgroundColor = (active) => {
        if (active === true){
            document.querySelector(".eagle-artillery-container").style.backgroundColor = '#FF6347'
        } else {
            let body = document.querySelector(".eagle-artillery-container")
            body.style.backgroundColor = 'lightgreen'
            body.style.height = '150%'
        }
    }

    return (
        <div className="eagle-artillery-container"> 
            <div className="eagle-image" id="hp">
                <img src={imageChange()} alt={`Eagle Level {rangeValue}`}  />
                <br />
                <span>
                <input onChange={valueChange} type="range" min="1" max="5" step="1" />
                <h4>(adjust level)</h4>
                </span>
            </div>
            <div className="eagle-info">  
                <Title /> 
                <span id="keep-together">
                <h3>Eagle Level: {rangeValue}</h3>
                <h3>Activates at: {activation}</h3>
                </span>
                <h2 className="keeptogether">Count: {armyTotal}</h2>
                <h2 className="keeptogether">Remaining: {activation - armyTotal}</h2>
            </div> 
            <div className="chosen-army">
                <h3>Chosen Army: (click any to remove)
                    <Button
                        className="custom-button"
                        endIcon={<DeleteIcon />}   
                        size='small' 
                        style={{
                            fontSize: 14,
                            marginTop: 13.5,
                            marginLeft: '10px',
                        }}
                        variant='contained' 
                        color='secondary'
                        onClick={(e) => resetButton(e)}
                        >Clear All
                    </Button>
                </h3>
                <div className="chosen-army-container">
                    <div className="chosen-army-container-inner">
                        <span id="unique-army">{uniqueArmy()}</span>
                    </div>
                </div>
            </div>
            <div className="eagle-activated">
                {armyTotal >= activation ? <h4 id="activated-stamp">Activated</h4> : null}
            </div>
            <br />
        </div>
    )
}

export default EagleLvl