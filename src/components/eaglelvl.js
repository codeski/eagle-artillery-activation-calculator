import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeTroop} from '../actions'

const EagleLvl = () => {

    const [rangeValue, setRangeValue ] = useState('5')
    const [activation, setActivation] = useState(200)
    // const [grandTotal, setGrandTotal] = useState(0)
    // const [chosenArmy, setChosenArmy] = useState([])

    // useEffect(() => {
    //     entireArmy.
    // })

    const dispatch = useDispatch()
    
    const entireArmy = useSelector(state => { return state.troops.concat(state.heros, state.superTroops, state.spells, state.siege)})

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

    const addItUp = () => {
        return entireArmy.reduce((a, b) => { return a + b.space * b.quantity}, 0)
    }

    const handleClick = (e, troop) => {
        troop.quantity = troop.quantity - 1
        
        dispatch(removeTroop(troop))
    }

    const uniqueArmy = () => {
        if (entireArmy){
            return entireArmy.map(troop => {
                    return (
                        <button>
                            <img onClick={ (e) => handleClick(e, troop) } className="troops" src={troop.pic} alt={troop.name} ></img>
                            {troop.quantity}
                        </button>
                    )
            })
        }
    }


    

    return (
        <div>
            <img src={imageChange()} alt={`Eagle Level {rangeValue}`} />
            <br />
            <input onChange={valueChange} type="range" min="1" max="5" step="1" />
            <h3>Eagle Level {rangeValue}</h3>
            <h3>Activates @ {activation}</h3>
            <h1>{addItUp()}/{activation}</h1>
            
            {uniqueArmy()}
            
            <br />
        </div>
    )
}

export default EagleLvl