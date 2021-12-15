const initialState = {
    troops: [],
    spells: [],
    heros: [],
    siege: [],
    superTroops: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "RESETARMY":
            return {...state, troops: [], spells: [], heros: [], siege: [], superTroops: []}
        case "ADDTROOP":
            let revisedTroops = [...state.troops, action.payload]
            let uniqueTroops = [...new Set(revisedTroops)]
            return {...state, troops: uniqueTroops}
        case "RESETTROOPS":
            return {...state, troops: [...state.troops = []]}
        case "ADDSPELL":
            let revisedSpells = [...state.spells, action.payload]
            let uniqueSpells = [...new Set(revisedSpells)]
            return {...state, spells: uniqueSpells}
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
            let revisedSuper = [...state.superTroops, action.payload]
            let uniqueSuper = [...new Set(revisedSuper)]
            return {...state, superTroops: uniqueSuper}
        case "RESETSUPERTROOPS":
            return {...state, superTroops: [...state.superTroops = []]} 
        case "REMOVETROOP":
            let troop = action.payload.type
            if (troop === "troops"){
                if (action.payload.quantity > 0) {
                    return {...state, troops: [...state.troops]}
                } else { 
                    let theTroops = state.troops.filter(troop => action.payload !== troop)
                    return {...state, troops: theTroops}
                }
            } else if (troop === "spells"){
                if (action.payload.quantity > 0) {
                    return {...state, spells: [...state.spells]}
                } else { 
                    let theSpells = state.spells.filter(troop => action.payload !== troop)
                    return {...state, spells: theSpells}
                }
            } else if (troop === "heros"){
                let newHeros = state.heros.filter(hero => action.payload !== hero)
                return {...state, heros: newHeros}
            } else if (troop === "siege"){
                return {...state, siege: []}
            } else if (troop === "superTroops"){
                if (action.payload.quantity > 0) {
                    return {...state, superTroops: [...state.superTroops]}
                } else { 
                    let theTroops = state.superTroops.filter(troop => action.payload !== troop)
                    return {...state, superTroops: theTroops}
                }
            }
            return state 
        default:
            return state
    }
} 

export default reducer
