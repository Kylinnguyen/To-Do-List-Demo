import React from 'react'


const Header = () => {
    const headerStyle = {
        textAlign: 'center',
        backgroundColor: '#103838',
        color: '#fff',
        padding:'6px'
    }
    
    return (
        <header>
            <h1 style={headerStyle}>To Do List</h1>
        </header>
    )
}

export default Header