import Login from './Login';
import logotext from './images/logo-text.svg'

const Navbar = () => {
    const containerStyle = {
        paddingLeft: '30px',
        paddingRight: '20px',
        backgroundColor: '#4b69ea',
        paddingTop: '10px',
        paddingBottom: '10px',
        borderRadius: '0',
    }

return(
<div className="d-flex justify-content-between"style={containerStyle}>
    <img src={logotext}  alt="header" width="197px" height="55px"></img>
    <Login/>
</div>
)
}
export default Navbar;