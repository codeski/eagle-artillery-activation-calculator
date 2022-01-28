import Heros from './heros'
import SeigeMachines from './siegeMachines'

const HeroSiegeSpan = () => {
    return (
        <div id="heros-and-siege">
            <div>
                <Heros />
            </div>
            <div id="seige-container">
                <SeigeMachines />
            </div>
        </div>
    )
}

export default HeroSiegeSpan