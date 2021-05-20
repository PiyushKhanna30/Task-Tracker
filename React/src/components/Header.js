import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Header obj');
    }
    return (
        <header className="header">
            <h1 > {props.title} {props.lname}</h1>
            <Button onClick={props.onAdd} color={props.showAddTask?'red':'green'} text={props.showAddTask?'Close':'Add'} />
        </header>
    )
}
Header.defaultProps = {
    lname: 'Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
    lname: PropTypes.string.isRequired
}

export default Header
