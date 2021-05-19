import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>Hello {props.title} {props.lname}!</h1>
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
