import React from 'react';
import './MainFrame.css';
import Folder from '../images/Vector.png'
import {Link} from "react-router-dom";
const MainFrame = () => {

    const handleButtonStart = () => {

    }

    return (
        <div className={'main__frame'}>
            <div className={'main__profile-container'} >
                <img className={'main__avatar'} />
                <div className={'main__profile-content'}>
                    <h3 className={'main__profile-title'}>Иван Иванов</h3>
                    <div className={'main__profile-links'}>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'} />
                        <a className={'main__profile-link'} href={'#'}>Telegram</a>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'} />
                        <a className={'main__profile-link'} href={'#'}>Github</a>
                        <img className={'main__profile-img'} src={Folder} alt={'картинка'} />
                        <a className={'main__profile-link'} href={'#'}>Resume</a>
                    </div>
                </div>
            </div>
            <div className={'main__information'}>
                <p className={'main__information-title'}>Номер телефона</p>
                <input type="text" className={'main__information-input first-input'} placeholder={'+7 999 999-99-99'} />
                <p className={'main__information-title'}>Email</p>
                <input type="email" className={'main__information-input'} placeholder={'tim.jennings@example.com'} />
            </div>
            {/*<button className={'main__button-start'} onClick={(e)=>handleButtonStart()} >Начать</button>*/}
            <Link to="/create" className={'main__button-start'}>Начать</Link>
        </div>
    );
};

export default MainFrame;