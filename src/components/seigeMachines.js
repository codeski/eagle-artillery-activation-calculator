import React from 'react'
import { SiegeMachinesData } from '../data/data'

const SiegeMachines = () => {
    return (
        <div>
            {SiegeMachinesData.map(siege =>          
                <button>
                    <img 
                        src={siege.pic} 
                        alt={siege.name} 
                        space={siege.space}>
                    </img>
                </button>
            )}
        </div>
    )
}

export default SiegeMachines
