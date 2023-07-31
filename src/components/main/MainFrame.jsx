import React, {useState} from 'react';
import InputMask from "react-input-mask";
import './MainFrame.css';
import Folder from '../../images/Vector.png'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const MainFrame = () => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({
        mode: "onChange"
    });

    const navigate = useNavigate();

    console.clear();

    const onSubmit = () => {
        navigate('/create')
    };

    const extractDigits = (str) => str.replace(/\D/g, '');
    const phoneNumberTest = extractDigits(phoneNumber);

    return (
        <div className={'main__frame'}>
            <div className={'main__profile-container'}>
                <div className={'main__avatar'}>
                    <p className={'main__avatar-initials'}>АП</p>
                </div>
                <div className={'main__profile-content'}>
                    <h3 className={'main__profile-title'}>Андрей Пежемский</h3>
                    <div className={'main__profile-links'}>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'}/>
                        <a className={'main__profile-link'} href={'https://t.me/unknownhzhz'}>Telegram</a>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'}/>
                        <a className={'main__profile-link'} href={'https://github.com/Andoreides'}>Github</a>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'}/>
                        <a className={'main__profile-link'} href={'#'}>Resume</a>
                    </div>
                </div>
            </div>
            <form className={'main__information'} onSubmit={handleSubmit(onSubmit)}>
                <p className={'main__information-title'}>Номер телефона{phoneNumberTest.length < 1 && (
                    <span style={{color: "red"}}>*</span>)}</p>
                <InputMask mask="+7 (999)-999-99-99" value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}>
                    {() => {
                        const phoneNumberDigits = extractDigits(phoneNumber);
                        const isValidLength = phoneNumberDigits.length >= 11;
                        return (
                            <div>
                                <input
                                    type="tel"
                                    className={`main__information-input`}
                                    placeholder="+7 (999)-999-99-99"
                                    value={phoneNumber}
                                />
                                {!isValidLength && phoneNumberDigits.length > 0 ? (
                                    <span className="main__tip tip_red">Please enter valid phone number</span>
                                ) : null}
                            </div>
                        );
                    }}
                </InputMask>

                <p className={'main__information-title'}>Email{errors?.email ? null : (
                    <span style={{color: "red"}}>*</span>)}</p>
                <input type="text" className={'main__information-input'} placeholder={'tim.jennings@example.com'}
                       {...register('email', {
                           required: 'Обязательное поле!', pattern: {
                               value:
                                   /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                               message: 'Please enter valid email'
                           },
                       })} />
                {errors?.email && (<span className="main__tip tip_red ">{errors.email.message}</span>)}

                {isValid && phoneNumberTest.length > 10 ? (
                    <button className={'main__button-start'} type={'submit'} onClick={onSubmit}>Начать</button>) : (
                    <button className={'main__button-start'} disabled type={'submit'}
                            onClick={onSubmit}>Начать</button>)}
            </form>
        </div>
    );
};

export default MainFrame;