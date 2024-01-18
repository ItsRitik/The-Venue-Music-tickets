import React from 'react';
import MyButton from '../utils/MyButton';
import {Zoom} from 'react-awesome-reveal';

const Princing = () => {
    const priceState = {
        prices:[100,150,200],
        position:['Balcony','Medium','Star'],
        desc:[
            'Balcony seating is often considered advantageous as it provides a clear line of sight to the performance.',
            'Medium seating may offer improved acoustics, allowing attendees to experience the music with greater clarity.',
            'Star sections usually have a limited number of seats, which can result in a less crowded and more intimate setting.'
        ],
        linkto:['http://sales.b','http://sales/m','http://sales.s'],
        delay:[500,0,500]   
    }

    const showBoxes = () => (
        priceState.prices.map((box,index)=>(
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]} triggerOnce>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                color:'#ffffff'
                            }} 
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )


    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    { showBoxes() }
                </div>
            </div>
        </div> 
    )
}

export default Princing;