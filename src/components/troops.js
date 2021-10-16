import { usePreviousProps } from '@mui/utils'
import React, {useEffect, useState} from 'react'
import { RegTroops } from '../data/data'

const Troops = () => {
    const [chosenTroops, setChosenTroops] = useState([])
    const [troopTotal, setTroopTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        let total = chosenTroops.reduce((a, b) => {
            return a + b.space * b.quantity
        }, 0)
        setTroopTotal(total)
        
    }, [chosenTroops])

    const handleClick = (e, troop) => {
        if (!disabled) {
            if (chosenTroops.includes(troop)) {
                troop.quantity = troop.quantity + 1
                console.log("already have this:", troop)
                // is it possible to update? 
            } else {
                troop.quantity = troop.quantity + 1
                console.log("new troop", troop)
                setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop))
            }
        }
    }
            
    //         else
    //         setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop))
    //     if (!e.currentTarget.disabled) {
    //         if ((troopTotal + troop.space) > 70) {
    //             //does nothing
    //         } else if ((troopTotal + troop.space) === 70) {
    //             setDisabled(true)
    //             setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop))
    //             troop.quantity = troop.quantity + 1
    //         } else if ((troopTotal + troop.space) <= 65) {
    //             setChosenTroops(prevChosenTroops => prevChosenTroops.concat(troop))
    //             troop.quantity = troop.quantity + 1
    //         } 
    //     } 
    // }

    const resetButton = (e) => {
        setDisabled(false)
        setTroopTotal(0)
        setChosenTroops([])
        RegTroops.forEach(troop => troop.quantity = 0)
    } 

    // const disableSomeOrAllTroops = (e) => {
    //     //select Troops from the DOM
    //     //iterate through and disable
    // }

    return (
        <div>
            <h3>Troops</h3>
            {RegTroops.map(troop =>                 
                <button id="troopButton" onClick={ (e) =>handleClick(e, troop)} key={troop.name} disabled={disabled}>
                    <img 
                        src={troop.pic} 
                        alt={troop.name} 
                        space={troop.space}
                        quantity={troop.quantity}>
                    </img>
                    {troop.quantity}
                </button>
                 
            )}
            <button onClick={(e) => resetButton(e)}>Reset</button>
            <n>troop Total: {troopTotal}</n>
        </div>

    )
}

export default Troops


// const Troops = () => {
//     // const [counter, setCounter] = useState(0)
    
//     const getElixirTroops = () => {
//         return (   
//                 exlixirTroops.map(troop => 
//                 <button 
//                     key= {troop.name} pic={troop.pic} name={troop.name} space={troop.space} />)</button>
//         )
//     }

//     const getSuperTroops = () => {
//         return (
//             SuperTroops.map(troop => <Button key={troop.name} pic={troop.pic} name={troop.name} space={troop.space} />)
//         )
//     }

//     return (
//         <div className="troops">
//             <h3>Troops</h3>
//             {getElixirTroops()}
//             <h3>Super Troops</h3>
//             {getSuperTroops()}
//         </div>
//     )
// }

// export default Troops 