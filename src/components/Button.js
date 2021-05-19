import PropTypes from 'prop-types'

const Button = ({color, text}) => {  
    const onClick = (e) => {
        console.log(e);
    }
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
        </div>
    )
}
Button.defaultProps={
    color:'red',
    text:'Hello'
}

Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string
}
export default Button
