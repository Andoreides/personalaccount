import React, {useState} from 'react';
import './Step3.css';
import {useNavigate} from "react-router-dom";
import Popup from "../Popup/Popup";
import Krest from "../../images/krestcloud.png";
import checkMark from "../../images/galya.png";

const Step3 = () => {

    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupSuccess, setPopupSuccess] = useState(false);

    const handleChangeTextarea = (event) => {
        const inputText = event.target.value;
        const textWithoutSpaces = inputText.replace(/\s/g, '');
        if (textWithoutSpaces.length <= 200) {
            setText(inputText);
        }
    };

    const handleButtonBack = () => {
        navigate('/step2');
    }

    const handleButtonSend = () => {
        if (text.length < 15) {
            setPopupOpen(true);
        } else {
            setPopupSuccess(true);
        }
    }

    const handleSubmitPopup = (e) => {
        if (popupOpen === true) {
            e.preventDefault();
            setPopupOpen(false);
        }
        if (popupSuccess === true) {
            e.preventDefault();
            setPopupSuccess(false);
            navigate('/')
        }
    };

    return (
        <div className={'step3__frame'}>
            <div className={'step3__container'}>
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2 block border">
                        <div className="wrapper-progressBar">
                            <ul className="progressBar">
                                <li className="active">1</li>
                                <li className='active'>2</li>
                                <li className='active'>3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'step3__content'}>
                    <p className={'step1__title'}>About</p>
                    <textarea className={'step3__input'} placeholder={'Расскажите о себе'} value={text}
                              onChange={handleChangeTextarea}/>
                    <span className={'step3__counter'}>{200 - text.replace(/\s/g, '').length}</span>
                    {text.length < 15 && text.length > 0 ? (
                        <span className={'step1__tip'}>Слишком коротко!</span>) : null}

                    <div className="step1__buttons-container button_margin">
                        <button type="button" className="step1__button-back" onClick={(e) => handleButtonBack()}>Назад
                        </button>
                        <button type="button" className="step3__button-next"
                                onClick={(e) => handleButtonSend()}>Отправить
                        </button>
                    </div>
                </div>
            </div>

            <Popup
                inputName="error"
                popupTitle="Ошибка"
                isOpen={popupOpen}
                isClose={setPopupOpen}
                submitText='Закрыть'
                onSubmit={handleSubmitPopup}
            >
                <img src={Krest} alt={'картинка крестик'} className={'popup__img-error'}/>
                <p>Вы ввели слишком короткие значения или ничего не ввели!</p>
            </Popup>

            <Popup
                inputName="success"
                popupTitle="Отправленно!"
                isOpen={popupSuccess}
                isClose={setPopupSuccess}
                submitText='Закрыть'
                onSubmit={handleSubmitPopup}
            >
                <img src={checkMark} alt={'картинка крестик'} className={'popup__img-error'}/>
                <p>Ваши данные успешно отправлены :)</p>
            </Popup>

        </div>
    );
};

export default Step3;