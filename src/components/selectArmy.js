import SelectTitle from './selectTitle'
import Troops from './troops'
import SuperTroops from './superTroops'
import Spells from './spells'   
import HeroSiegeSpan from './herosSiegeSpan'

const SelectArmy = () => {
    return (
        <div className="selecting-army">
            <SelectTitle />
            <Troops />
            <HeroSiegeSpan />
            <Spells />
            <SuperTroops />
        </div>
    )
}

export default SelectArmy