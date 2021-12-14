export const addTroops = (troop) => (dispatch) => {
    console.log("about to add troop", troop)
    dispatch({type: "ADDTROOP", payload: troop}) 
}

export const resetTroops = () => (dispatch) => {
    dispatch({type: "RESETTROOPS"})
}

export const addSpells = (spell) => (dispatch) => {
    dispatch({type: "ADDSPELL", payload: spell})
} 

export const resetSpells = () => (dispatch) => {
    dispatch({type: "RESETSPELLS"})
}

export const addHero = (hero) => (dispatch) => {
    dispatch({type: "ADDHERO", payload: hero})
} 

export const resetHeros = () => (dispatch) => {
    dispatch({type: "RESETHEROS"})
}

export const addSiege = (siege) => (dispatch) => {
    dispatch({type: "ADDSIEGE", payload: siege})
} 

export const resetSiege = () => (dispatch) => {
    dispatch({type: "RESETSIEGE"})
}

export const addSuperTroop = (superTroop) => (dispatch) => {
    // console.log("action", superTroop)
    dispatch({type: "ADDSUPERTROOP", payload: superTroop})
}

export const resetSuperTroops = () => (dispatch) => {
    dispatch({type: "RESETSUPERTROOPS"})
}

export const removeTroop = (troop) => (dispatch) => {
    dispatch({type: "REMOVETROOP", payload: troop})
}

export const resetArmy = () => (dispatch) => {
    dispatch({type: "RESETARMY"})
}
