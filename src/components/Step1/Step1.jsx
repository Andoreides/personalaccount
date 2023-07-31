import React from 'react';

const Step1 = () => {
    return (
        <div className={'step1__frame'}>
            <div className={'step1__container'}>
                <p className={'step1__title'}>Nickname</p>
                <input type="text" className={'step1__input'} />
                <span className={'step1__tip'}></span>
                <p className={'step1__title'}>Name</p>
                <input type="text" className={'step1__input'} />
                <span className={'step1__tip'}></span>
                <p className={'step1__title'}>Surname</p>
                <input type="text" className={'step1__input'} />
                <span className={'step1__tip'}></span>

            </div>
        </div>
    );
};

export default Step1;