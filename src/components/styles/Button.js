import React from 'react';

//libs
import PropTypes from 'prop-types'; // prop types

const Button = (props) => {
    //get label
    const isLabelExist = typeof props.label !== 'undefined' ? true : false;

    //get button outlined
    const inputButtonOutlined = typeof props.isOutlined !== 'undefined' ? props.isOutlined : false;

    //get button type
    const inputButtonType = typeof props.type !== 'undefined' ? props.type : ' btn-primary';
    let buttonType;
    switch(inputButtonType){
        case 'success':
            buttonType = 'btn-success'
            break;
        case 'danger':
            buttonType = 'btn-danger'
            break;
        case 'warning':
            buttonType = 'btn-warning'
            break;
        case 'primary':
            buttonType = 'btn-primary'
            break;
        case 'info':
            buttonType = 'btn-info'
            break;
        default:
            buttonType = 'btn-primary';
            break;
    }
    //check for outline
    buttonType = inputButtonOutlined ? (buttonType.replace('-', '-outline-')) : buttonType;
    //add space between class
    buttonType = ' ' + buttonType;

    //get button size
    const inputButtonSize = typeof props.size !== 'undefined' ? props.size : ' btn-sm';
    let buttonSize;
    switch(inputButtonSize){
        case 'small':
            buttonSize = 'btn-sm'
            break;
        case 'medium':
            buttonSize = 'btn-md'
            break;
        case 'large':
            buttonSize = 'btn-lg'
            break;
        default:
            buttonSize = 'btn-md'
            break;
    }
    //add space between class
    buttonSize = ' ' + buttonSize;

    //get is rounded button
    const isButtonRounded = typeof props.isRounded !== 'undefined' ? (props.isRounded ? ' rounded' : '') : '';

    //get custom class
    const customClassName = typeof props.className !== 'undefined' ? props.className : '';

    //get button icon
    const buttonIcon = typeof props.icon !== 'undefined' ? props.icon : '';

    return(
        <button onClick={props.handleClick} className={"custom-button btn"+ buttonType + buttonSize + isButtonRounded + " " + customClassName}>
            {/* check if use icon */}
            { buttonIcon !== '' ? (<i className={(isLabelExist ? 'pad ' : '')+'icon '+ buttonIcon}></i>) : '' }
            
            {/* show button label */}
            { props.label }
        </button>
    );
}

//prop types initialize
Button.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    isEnable: PropTypes.bool,
    isOutlined: PropTypes.bool,
    isRounded: PropTypes.bool,
    handleClick: PropTypes.func
}

export default Button;