import React, { useEffect, useState } from "react";
import "./carrossel.css";

const Carrossel = () => {

    const [currentPosition, setCurrentPosition] = useState(0);

    const classArray = [
        'carrossel__img-holder--first',
        'carrossel__img-holder--second',
        'carrossel__img-holder--third'
    ];

    // https://www.cea.com.br/

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentPosition((prev) => {
                if(prev < classArray.length -1){
                    return prev +1;
                } else return 0;
            })
        }, 10000);

        return () => {
            clearInterval(slideInterval);
        }
    }, [])

    const forwardArrow = () => {
        setCurrentPosition((prev) => {
            if(prev < classArray.length -1){
                return prev +1;
            } else return prev;
        })
    }

    const backwardArrow = () => {
        setCurrentPosition((prev) => {
            if(prev > 0){
                return prev -1;
            } else return prev;
        })
    }

    return (
        <div className='carrossel__container'>
            <div
                className='carrossel__arrow carrossel__arrow--left'
                onClick={backwardArrow}
            >
                {'<'}
            </div>

            <div className='carrossel__slider'>
                <div
                    className={
                        `carrossel__img-holder ${classArray[currentPosition]}`
                    }
                >
                    <img className='carrossel__img carrossel__img--first' src='https://picsum.photos/id/1/1200/400' />
                    <img className='carrossel__img carrossel__img--second' src='https://picsum.photos/id/2/1200/400' />
                    <img className='carrossel__img carrossel__img--third' src='https://picsum.photos/id/3/1200/400' />
                </div>
            </div>

            <div
                className='carrossel__arrow carrossel__arrow--right'
                onClick={forwardArrow}
            >
                {'>'}
            </div>

            <div className='carrossel__position-container'>
                {
                    classArray.map((item, index) => (
                        <div
                            key={item}
                            onClick={() => setCurrentPosition(index)}
                            className={
                                `carrossel__position-item 
                                ${index == currentPosition && 'carrossel__position-item--active'}
                                `
                            }
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Carrossel;