import React, {useState} from 'react';
import './Step1.css';
import {useNavigate} from "react-router-dom";
import Popup from "../Popup/Popup";
import Krest from "../../images/krestcloud.png";
import {useForm, Controller} from 'react-hook-form';
import ReactSelect from 'react-select';

export const options = [
    {
        value: 'man',
        label: 'Man',
    },
    {
        value: 'woman',
        label: 'Woman',
    },
]

export const getValue = (value) =>
    value ? options.find(option => option.value === value) : ''

const Step1 = () => {

    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const {
        handleSubmit,
        formState: {errors},
        control,
    } = useForm({
        mode: 'onChange',
    })

    console.clear()

    const onSubmit = () => {
        if (nickname.length > 4 && name.length > 4 && surname.length > 4 && error === false) {
            navigate('/step2');
        } else {
            setPopupOpen(true);
        }
    }

    const handleButtonBack = () => {
        navigate("/");
    }

    const handleChangeNickname = (value) => {
        const betterValue = value.replace(/\W/g, '');
        setNickname(betterValue);
    }

    const handleChangeName = (value) => {
        const betterValue = value.replace(/\W/g, '');
        setName(betterValue);
    }

    const handleChangeSurname = (value) => {
        const betterValue = value.replace(/\W/g, '');
        setSurname(betterValue);
    };

    const handleSubmitPopup = (e) => {
        if (popupOpen === true) {
            e.preventDefault();
            setPopupOpen(false);
        }
    };

    return (
        <div className={'step1__frame'} onClick={handleSubmitPopup}>
            <div className={'step1__container'}>
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2 block border">
                        <div className="wrapper-progressBar">
                            <ul className="progressBar">
                                <li className="active">1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="step1__content">
                    <p className={'step1__title'}>Nickname{nickname.length < 1 && (
                        <span style={{color: "red"}}>*</span>)}</p>
                    <input type="text" className={'step1__input'} placeholder={'Заполните поле'} value={nickname}
                           onChange={(e) => handleChangeNickname(e.target.value)}/>
                    {nickname.length >= 1 && nickname.length < 5 ? (
                        <span className={'step1__tip'}>Слишком коротко!</span>) : (
                        <span className={'step1__tip'}></span>)}
                    <p className={'step1__title'}>Name{name.length < 1 && (<span style={{color: "red"}}>*</span>)}</p>
                    <input type="text" className={'step1__input'} placeholder={'Заполните поле'} value={name}
                           onChange={(e) => handleChangeName(e.target.value)}/>
                    {name.length >= 1 && name.length < 5 ? (<span className={'step1__tip'}>Слишком коротко!</span>) : (
                        <span className={'step1__tip'}></span>)}
                    <p className={'step1__title'}>Surname{surname.length < 1 && (
                        <span style={{color: "red"}}>*</span>)}</p>
                    <input type="text" className={'step1__input'} placeholder={'Заполните поле'} value={surname}
                           onChange={(e) => handleChangeSurname(e.target.value)}/>
                    {surname.length >= 1 && surname.length < 5 ? (
                        <span className={'step1__tip'}>Слишком коротко!</span>) : (
                        <span className={'step1__tip'}></span>)}
                    <p className={'step1__title'}>Sex</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name='address.country'
                            rules={{
                                required: 'Sex is required!',
                            }}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <div>
                                    <ReactSelect
                                        placeholder='Не выбрано'
                                        options={options}
                                        value={getValue(value)}
                                        onChange={newValue => onChange((newValue).value)}
                                        className={'step1__select'}
                                    />
                                    {error ? <div
                                        className={'step1__tip'}>{error.message} {setError(true)}</div> : setError(false)}
                                </div>
                            )}
                        />
                        <div className="step1__buttons-container">
                            <button type="button" className="step1__button-back"
                                    onClick={(e) => handleButtonBack()}>Назад
                            </button>
                            <button type="submit" className="step1__button-next"
                                    onClick={(e) => onSubmit()}>Далее
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

export default Step1;