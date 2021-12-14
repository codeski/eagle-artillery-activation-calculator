const initialState = {
    troops: [],
    spells: [],
    heros: [],
    siege: [],
    superTroops: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADDTROOP":
            let revised = [...state.troops, action.payload]
            // console.log("revised", revised)
            let unique = [...new Set(revised)]
            // console.log("unique", unique)
            return {...state, troops: unique}
        case "RESETTROOPS":
            return {...state, troops: [...state.troops = []]}
        case "ADDSPELL":
            return {...state, spells: [...state.spells, action.payload]} 
        case "RESETSPELLS":
            return {...state, spells: [...state.spells = []]}
        case "ADDHERO":
            return {...state, heros: [...state.heros, action.payload]}
        case "RESETHEROS":
            return {...state, heros: [...state.heros = []]}
        case "ADDSIEGE":
            return {...state, siege: [...state.siege, action.payload]}
        case "RESETSIEGE":
            return {...state, siege: [...state.siege = []]}
        case "ADDSUPERTROOP":
            console.log("reducer", action.payload)
            return {...state, superTroops: [...state.superTroops, action.payload]}
        case "RESETSUPERTROOPS":
            return {...state, superTroops: [...state.superTroops = []]} 
        case "REMOVETROOP":
            let troop = action.payload.type
            // console.log(action.payload.quantity)

            // find first object that matches and remove it from the array
            if (troop === "troops"){
                if(action.payload.quantity > 0){
                    return {...state, troops: [...state.troops]}
                } else { 
                    let theTroops = state.troops.filter(troop => action.payload !== troop)
                    console.log("theTroops", theTroops)
                    return {...state, troops: theTroops}
                }
            } else if (troop === "spells"){
                let newSpells = state.spells.filter(spell => action.payload !== spell)
                newSpells.pop()
                return {...state, spells: newSpells}
            } else if (troop === "heros"){
                let newHeros = state.heros.filter(hero => action.payload !== hero)
                newHeros.pop()
                return {...state, heros: newHeros}
            } else if (troop === "siege"){
                let newSiege = state.siege.filter(siege => action.payload !== siege)
                newSiege.pop()
                return {...state, siege: newSiege}
            } else if (troop === "superTroops"){
                let newSuperTroops = state.superTroops.filter(superTroop => action.payload !== superTroop)
                newSuperTroops.pop()
                return {...state, superTroops: newSuperTroops}
            }

            return state     
        default:
            return state
    }
} 

export default reducer
