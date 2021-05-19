import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className="header">
            <h1 style={headingStyle}>Hello {props.title} {props.lname}!</h1>
            <Button color='green' text='Props'/>
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
