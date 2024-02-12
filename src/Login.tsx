import { useState } from "react"

const Login = () => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const boxStyle = {
        color: isHover ? "#4b69ea" :  "#ffff",
        backgroundColor: isHover ? "#ffff" : "#4b69ea",
        borderRadius: "10px",
        display: "block",
        fontSize: "20px",
        fontWeight: "600",
        padding: "5px 10px"
    }

    return(
        <button type="button" style={boxStyle} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>Login</button>
    )
}

export default Login;