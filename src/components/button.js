const Button = (props) => {
    return (
        <button>
            <img src={props.pic} alt={props.name}></img>
        </button>
    )
}

export default Button