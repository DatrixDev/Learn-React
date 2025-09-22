function Content (props) {
    const { text, number, active} = props
    console.log(props)
    let classActive = "";
    if(props.active){
        classActive = "box--active"
    }
    return (
        <>
        <div className={"box" + (active ? 
        "box--active" : "")}>
            {text} - {number}
        </div>
        </>
    )
}

export default Content;