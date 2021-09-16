const Button = (props) => {
    return (
        <button onClick={() => console.log(props.space)}>
            <img src={props.pic} alt={props.name} space={props.space}></img>
        </button>
    )
}

export default Button