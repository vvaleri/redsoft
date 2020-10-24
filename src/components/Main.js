import React from 'react';
import Card from './Card'
import SoldCard from './SoldCard';


const Main = ({items}) => {

   
    return (
        <main>
            <div className="main _container">
                <div className="main__title">Картины эпохи Возрождения</div>
                <div className="main__content">

                { items.map(item =>  

                <Card 
                key={item.name}
                alt={item.alt}
                img={item.img} 
                name={item.name} 
                discount={item.discount} 
                price={item.price}/> 
                )}
            
                <SoldCard/>
                </div>
            </div>
        </main>
    )
}

export default Main