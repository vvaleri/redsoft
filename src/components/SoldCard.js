import React from 'react';
import rembrandt from '../img/rembrandt.png';

const SoldCard = () => {
   
    return (
        <div className="main__card card sold">
            <img src={rembrandt} alt="картина урок анатомии"/>
            <div className="card__title">«Урок анатомии» Рембрандт</div>
          <div className="card__inner _left">
            <p>Продана на аукционе</p>
          </div>
      </div>
    )
     
    
}

export default SoldCard