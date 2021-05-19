
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

export default Header
