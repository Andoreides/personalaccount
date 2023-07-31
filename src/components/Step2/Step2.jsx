import React, {useState} from 'react';
import './Step2.css';
import {useNavigate} from "react-router-dom";
import trashbin from '../../images/trashbin.png';
import Popup from "../Popup/Popup";
import Krest from "../../images/krestcloud.png"

const Step2 = () => {

    const [radioFirst, setRadioFirst] = useState(true);
    const [radioSecond, setRadioSecond] = useState(false);
    const [radioThird, setRadioThird] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [checkFirst, setCheckFirst] = useState(false);
    const [checkSecond, setCheckSecond] = useState(false);
    const [checkThird, setCheckThird] = useState(false);

    const navigate = useNavigate();

    const [advantagesList, setAdvantagesList] = useState([
        {
            id: 0,
            name: 'advantage1',
            value: '',
            isValid: false,
        },
        {
            id: 1,
            name: 'advantage2',
            value: '',
            isValid: false,
        },
        {
            id: 2,
            name: 'advantage3',
            value: '',
            isValid: false,
        }
    ]);


    const handleAddAdvantage = () => {
        const newAdvantage = {value: ''};
        setAdvantagesList([...advantagesList, newAdvantage])
    }

    const chooseRadioSecond = (e) => {
        setRadioSecond(true)
        setRadioFirst(false)
        setRadioThird(false)
    }

    const chooseRadioFirst = (e) => {
        setRadioFirst(true)
        setRadioSecond(false)
        setRadioThird(false)
    }

    const chooseRadioThird = (e) => {
        setRadioThird(true)
        setRadioFirst(false)
        setRadioSecond(false)
    }

    const handleDelete = (index) => {
        if (advantagesList.length > 1) {
            const updatedList = advantagesList.filter((_, i) => i !== index);
            setAdvantagesList(updatedList)
        }
    }

    const handleButtonBack = (e) => {
        navigate('/create')
    }

    const handleInputChange = (index, event) => {
        const newInputs = [...advantagesList];
        const value = event.target.value;
        newInputs[index].value = value;
        if (value.length > 3) {
            newInputs[index].isValid = true;
            newInputs[index].error = '';
        } else {
            newInputs[index].isValid = false;
            newInputs[index].error = 'слишком коротко';
        }
        setAdvantagesList(newInputs);
    };

    const handleSubmit = () => {
        const isValid = advantagesList.every((input) => input.isValid);
        if (!checkFirst && !checkSecond && !checkThird) {
            setPopupOpen(true);
        } else if (isValid) {
            navigate('/step3');
        } else {
            setPopupOpen(true);
        }
    };

    const handleSubmitPopup = (e) => {
        if (popupOpen === true) {
            e.preventDefault();
            setPopupOpen(false);
        }
    };

    const chooseCheckBox = (number, value) => {
        if (number === '1') {
            setCheckFirst(value);
        }
        if (number === '2') {
            setCheckSecond(value);
        }
        if (number === '3') {
            setCheckThird(value);
        }
    };

    const inputsMaped = advantagesList.map((item, index) => {
        return (
            <div className={'step2__advantages-container'} key={index}>
                <div className={'step2__input-container'}><input
                    className={'step1__input'}
                    type={'text'}
                    key={index}
                    value={item.value}
                    onChange={(event) => handleInputChange(index, event)}
                    placeholder={'Enter advantage'}
                    id={item.id}
                />
                    <button type="button" className={`step2__btn-delete `} onClick={() => handleDelete(index)}><img
                        className={'step2__image-delete'} src={trashbin} alt={'картинка'} key={item.id}/></button>
                </div>
                {item.value.length > 0 && item.value.length < 4 ? (
                    <span className={`step2__tip tip_red`}>Слишком коротко!</span>) : null}
            </div>
        )
    });


    return (
        <div className={'step2__frame'} onClick={handleSubmitPopup}>
            <div className={'step2__container'}>
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2 block border">
                        <div className="wrapper-progressBar">
                            <ul className="progressBar">
                                <li className="active">1</li>
                                <li className='active'>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'step1__content'}>
                    <form>
                        <p className={'step1__title'}>Advantages</p>
                        {inputsMaped}
                        {advantagesList.length < 5 ? (<button type="button" className="step2__button-back"
                                                              onClick={() => handleAddAdvantage()}>+</button>) : (
                            <button type="button" className="step2__button-back">+</button>)}
                        <p className={'step1__title'}>Checkbox group</p>
                        <div className={'step2__checkbox'}>
                            <input type='checkbox' placeholder={'Placeholder'} checked={checkFirst}
                                   onChange={(e) => chooseCheckBox('1', !!e.target.checked)}/>
                            <span>1</span>
                        </div>
                        <div className={'step2__checkbox'}>
                            <input type='checkbox' placeholder={'Placeholder'} checked={checkSecond}
                                   onChange={(e) => chooseCheckBox('2', !!e.target.checked)}/>
                            <span>2</span>
                        </div>
                        <div className={'step2__checkbox last'}>
                            <input type='checkbox' placeholder={'Placeholder'} checked={checkThird}
                                   onChange={(e) => chooseCheckBox('3', !!e.target.checked)}/>
                            <span>3</span>
                        </div>
                        <p className={'step1__title'}>Radio group</p>
                        <div className={'step2__radio-container'}>
                            <label className={'step2__checkbox'}><input type="radio" checked={radioFirst}
                                                                        onChange={() => chooseRadioFirst()}
                                                                        name={'radio'}/>1</label>
                            <label className={'step2__checkbox'}><input type="radio" checked={radioSecond}
                                                                        onChange={() => chooseRadioSecond()}
                                                                        name={'radio'}/>2</label>
                            <label className={'step2__checkbox '}><input type="radio" checked={radioThird}
                                                                         onChange={() => chooseRadioThird()}
                                                                         name={'radio'}/>3</label>
                        </div>
                        <div className="step1__buttons-container button_margin">
                            <button type="button" className="step1__button-back"
                                    onClick={(e) => handleButtonBack()}>Назад
                            </button>
                            <button type="button" className="step1__button-next" onClick={(e) => handleSubmit()}>Далее
                            </button>
                        </div>
                    </form>
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
        </div>

    );
};

export default Step2;