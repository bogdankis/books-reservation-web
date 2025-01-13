import { FaBook, FaInfoCircle, FaSearch } from 'react-icons/fa';
import logoTextUser from '../images/homeUserPage/logo-text-user.svg';


const NavbarUSer = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#ffffff', // Replace with desired background color
        borderBottom: '1px solid #ccc',
    } as React.CSSProperties;

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
    } as React.CSSProperties;

    const navItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
        fontSize: '16px',
        color: '#333',
        textDecoration: 'none',
        cursor: 'pointer',
    } as React.CSSProperties;

    const navIconStyle = {
        marginRight: '8px',
    } as React.CSSProperties;

    const searchbarContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        maxWidth: '400px',
        margin: '0 auto',
    } as React.CSSProperties;

    const searchInputStyle = {
        width: '100%',
        padding: '6px 12px', // Adjusted padding to increase height
        border: '1px solid #e74c3c',
        borderRight: 'none',
        borderRadius: '4px 0 0 4px',
        fontSize: '16px',
        boxSizing: 'border-box', // Ensures consistent height across browsers
    } as React.CSSProperties;
    
    const searchButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 16px', // Matches input height
        backgroundColor: '#e74c3c',
        border: '1px solid #e74c3c',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
        color: '#fff',
        boxSizing: 'border-box', // Ensures consistent height across browsers
        height: 'auto', // Ensures button adjusts with padding
    } as React.CSSProperties;
    

    return (
        <>
            {/* Logo Section */}
            <div style={containerStyle}>
                <div style={logoStyle}>
                    <img src={logoTextUser} alt="logo" width="197px" height="55px" />
                    <a href="/library" style={navItemStyle}>
                        <FaBook style={navIconStyle} /> Library
                    </a>
                    <a href="/info" style={navItemStyle}>
                        <FaInfoCircle style={navIconStyle} /> Info
                    </a>
                </div>

                {/* Search Bar */}
                <div style={searchbarContainerStyle}>
                    <input
                        type="text"
                        placeholder="Search in Bookster library..."
                        style={searchInputStyle}
                    />
                    <button style={searchButtonStyle}>
                        <FaSearch />
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavbarUSer;
