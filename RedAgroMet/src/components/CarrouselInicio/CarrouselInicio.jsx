import { CAROUSEL_DATA } from '../../mock/inicio/inicioMockeo.js'
import React, { useState, useEffect } from 'react';
import './CarrouselInicio.css'; 

const AUTO_SCROLL_INTERVAL = 5000; 

export function CarrouselInicio({ data = CAROUSEL_DATA, interval = AUTO_SCROLL_INTERVAL }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(current => (current + 1) % data.length);
        }, interval);
        return () => clearInterval(timer);
    }, [data.length, interval]); 

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container">
            <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {data.map((slide) => (
                    <a 
                        key={slide.id} 
                        href={slide.link} 
                        className="carousel-slide"
                    >
                        {/* 1. Contenedor de la Imagen */}
                        <div className="slide-image-container">
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                        </div>
                        
                        {/* 2. Contenedor del Texto (aparece abajo de la imagen) */}
                        <div className="slide-content">
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-text">{slide.text}</p>
                            {/* Usamos el nuevo buttonText del mock */}
                            <span className="slide-action-link">{slide.buttonText || 'Visitar'}</span> 
                        </div>
                    </a>
                ))}
            </div>

            <div className="carousel-dots">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}