import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>Hello {props.title} {props.lname}!</h1>
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
export default Header
