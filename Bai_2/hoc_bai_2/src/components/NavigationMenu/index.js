function NavigationMenu() {
    const handleClick = (e) => {
        console.log(e.target);

    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleFocus = (e) => {
        e.target.classList.add("input--active");
    }
    const handleBlur = (e) => {
          e.target.classList.remove("input--active");
    }
    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log(e)
    }
    return (
        <>
            <div className="box">
                <div>NavigationMenu</div>
                <form onSubmit={handleSubmit}>
                <input 
                className="input" 
                type="text"
                onChange={handleChange} 
                onFocus={handleFocus} 
                onBlur={handleBlur}/>
                <button onClick={handleClick}>Click me</button>
                </form>
            </div>

        </>
    )
}

export default NavigationMenu;