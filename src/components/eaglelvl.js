import React, {useState} from 'react'

const EagleLvl = () => {

    const [rangeValue, setRangeValue ] = useState('5')

    const valueChange = async (event) => {
         setRangeValue(event.target.value)
    }

    const imageChange = () => {
        if (rangeValue === "5"){
            return "/images/Eaglelvls/Eagle_Artillery5.webp"
        } else if (rangeValue === "4"){
            return "/images/Eaglelvls/Eagle_Artillery4.webp" 
        } else if (rangeValue === "3"){
            return "/images/Eaglelvls/Eagle_Artillery3.webp"
        } else if (rangeValue === "2"){
            return "/images/Eaglelvls/Eagle_Artillery2.webp"
        } else if (rangeValue === "1"){
            return "/images/Eaglelvls/Eagle_Artillery1.webp"
        }
    }

    return (
        <div>
            <img src={imageChange()} />
            <input onChange={valueChange} type="range" min="1" max="5" defaultValue="5" step="1" />
        </div>
    )
}

export default EagleLvl