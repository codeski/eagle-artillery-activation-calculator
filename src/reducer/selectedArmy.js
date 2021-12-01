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
            // console.log("reducer", action.payload)
            return {...state, troops: [...state.troops, action.payload]}
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
            console.log(troop)

            // find first object that matches and remove it from the array
            let newTroops = state.troops.filter(troop => troop.type !== troop)


            return {...state, troops: [...state.troops, newTroops]}
        default:
            return state
    }
} 

export default reducer
