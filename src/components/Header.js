import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Header obj');
    }
    return (
        <header className="header">
            <h1 style={headingStyle}>Hello {props.title} {props.lname}!</h1>
            <Button onClick={onClick} color='green' text='Add' />
        </header>
    )
}
Header.defaultProps = {
    lname: 'Khanna'
}

Header.propTypes = {
    title: PropTypes.string,
    lname: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
export default Header
