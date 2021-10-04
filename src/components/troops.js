import React, {useState} from 'react'
import Button from './button'
import {exlixirTroops, DEtroops, Heros, SiegeMachines, SuperTroops} from '../data/troopData'
// import Grid from '@mui/material/Grid'



const Troops = () => {
    const [counter, setCounter] = useState(0)
    

    const getElixirTroops = () => {
        return (
            
                exlixirTroops.map(troop => <Button pic={troop.pic} name={troop.name} space={troop.space} />)

        )
    }

    const getDEtroops = () => {
        return (
            DEtroops.map(troop => <Button pic={troop.pic} name={troop.name} space={troop.space} />)
        )
    }



    const getHeros = () => {
        return (
            Heros.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }


    const getSiege = () => {
        return (
            SiegeMachines.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }

    const getSuperTroops = () => {
        return (
            SuperTroops.map(spell => <Button pic={spell.pic} name={spell.name} space={spell.space} />)
        )
    }



    return (
        <div className="troops">
            {getElixirTroops()}
            {getDEtroops()}
            {getHeros()}
            {getSiege()}
            {getSuperTroops()}
        </div>
    )
}

export default Troops 