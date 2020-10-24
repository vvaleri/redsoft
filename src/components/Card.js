import React, { useState, useEffect} from 'react';
import check from '../img/check.png'
import loader from '../img/loader.gif'



const Card = ({name, img, alt, discount, price}) => {

    const [btnClass, setBtnClass] = useState('')
    const [checkImg, setCheckImg] = useState('')
   
    useEffect(() => {
        getLocalStorage() 
      }, [])


    function addToCart() {
        changeStatus('https://jsonplaceholder.typicode.com/posts/1')
        .then()
        saveLocalStorage()
    }
    
    async function changeStatus(url) {
        setCheckImg(`${loader}`)

        const res = await fetch(`${url}`)
        if(res.ok) {
            setBtnClass({buy: 'buy', status: 'В корзине'})
            setCheckImg(`${check}`)  
        } 
    }



    function getLocalStorage() {
        if(localStorage.getItem(`${name}`) === null) {
            localStorage.setItem(`${name}`, JSON.stringify(''))
        } else {
            let localStatus = JSON.parse(localStorage.getItem(`${name}`))
            if(localStatus != '') {
                setBtnClass({buy: 'buy', status: 'В корзине'})
                setCheckImg(`${check}`)
            }
        }
    }

    function saveLocalStorage() {
        localStorage.setItem(`${name}`, JSON.stringify('В корзине'))
    }


    return (
        <div className="main__card card">
            <img src={img} alt={alt}/>
            <div className="card__title">{name}</div>
            <div className="card__inner">
                <div className="card__price">
                    <span>{discount}</span>
                    <p>{price}</p>
                </div>
                <button onClick={addToCart} className={`card__btn ${btnClass.buy}`}>
                    <img className="img__btn" src={checkImg}/>
                    {btnClass.status || 'Купить'}
                </button>
            </div>
        </div>
    )
}

export default Card