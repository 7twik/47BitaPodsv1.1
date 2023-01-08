import './Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselD = () => {
  return (
    <div>
        <div className="slide carou-total" >
                  <Carousel className="slide" variant='dark' controls={true} keyboard={true} touch={true} interval={3000}>
                        <Carousel.Item className='Carou-tot'>
                        <div className='Carou-tot'>
                          <div className='carou-left'>
                          <div className='carou-f22'>
                              Baguihati
                              </div>
                            <img className='carou-img'
                              src="https://source.unsplash.com/1600x900/?office"
                              alt="First slide"
                            />
                            </div>
                            <div className='carou-right'>
                            <div className='carou-f22'>
                            Dum Dum
                            </div>
                            <img className='carou-img'
                            src="https://source.unsplash.com/1600x900/?city"
                            alt="fourt slide"
                          />
                            </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='Carou-tot'>
                          <div className='Carou-tot'>
                            <div className='carou-left'>
                            <div className='carou-f22'>
                                Chinar Park
                              </div>
                              <img className='carou-img'
                                src="https://source.unsplash.com/1600x900/?architecture"
                                alt="Second slide"
                              />
                            </div>
                            <div className='carou-right'>
                            <div className='carou-f22'>
                            Sector 5
                            </div>
                            <img className='carou-img'
                            src="https://source.unsplash.com/1600x900/?building"
                            alt="Third slide"
                          />
                            </div>
                          </div>
                        </Carousel.Item>
                  </Carousel>
                  </div>
    </div>
  )
}

export default CarouselD;