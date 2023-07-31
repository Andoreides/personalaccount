import React from 'react';
import './Popup.css'

const Popup = (props) => {

    const handlePressEsc = (e) => {
        console.log(e.key)
        if (e.key === 'Escape') {
            props.isClose(false);
        } else {
            console.log('123')
        }
    }

    return (
        <div className={`popup popup_type_${ props.inputName } ${props.isOpen ? 'popup_opened': ''}` } tabIndex={0} onKeyDown={handlePressEsc} >
            <div className='popup__container' >
                <h3 className='popup__title'>{props.popupTitle}</h3>
                <form className='popup__form' onSubmit={props.onSubmit}>
                    {props.children}
                    <button type="submit" className="popup__button popup__button-submit" >{props.submitText}</button>
                </form>
                <button className='popup__close' onClick={()=>props.isClose(false) }  ></button>
            </div>
        </div>
    );
};

export default Popup;