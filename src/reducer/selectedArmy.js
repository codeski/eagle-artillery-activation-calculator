const initialState = {
    new: [],
    // spells: [],
    // heros: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            console.log("these", action.payload)
            
            return {new: [...state.new, action.payload]}
        // case "ADDSPELLS":
        //     return {}    
        default:
            return state
    }
} 

export default reducer
