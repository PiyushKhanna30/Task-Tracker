import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header className="header">
            <h1 style={headingStyle}>Hello {props.title} {props.lname}!</h1>
            <button className='btn'>Add</button>
        </header>
    )
}
Header.defaultProps = {
    lname:'Khanna'
}

Header.propTypes = {
    title:PropTypes.string,
    lname:PropTypes.string.isRequired
}

const headingStyle = {
    color:'red', 
    backgroundColor:'black'
}
export default Header
