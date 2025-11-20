import { CAROUSEL_DATA } from '../../mock/inicio/inicioMockeo.js'
import React, { useState, useEffect } from 'react';
import './CarrouselInicio.css'; 

const AUTO_SCROLL_INTERVAL = 5000; 

export function CarrouselInicio({ data = CAROUSEL_DATA, interval = AUTO_SCROLL_INTERVAL }) {
    const [activeIndex, setActiveIndex] = useState(0);

    /* Auto avance */
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(current => (current + 1) % data.length);
        }, interval);
        return () => clearInterval(timer);
    }, [data.length, interval]); 

    /* Acción cuando se hace click en un punto */
    const handleDotClick = (index) => setActiveIndex(index);

    /* Asignación de clases 3D según posición relativa */
    const getSlideClass = (index) => {
        if (index === activeIndex) return "inicio-carousel-slide active";
        if (index === (activeIndex + 1) % data.length) return "inicio-carousel-slide next";
        if (index === (activeIndex - 1 + data.length) % data.length) return "inicio-carousel-slide prev";
        return "inicio-carousel-slide";
    };

    return (
        <div className="inicio-carousel-container">
            <div 
                className="inicio-carousel-track" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {data.map((slide, index) => (
                    <a 
                        key={slide.id} 
                        href={slide.link} 
                        className={getSlideClass(index)}
                    >
                        <div className="inicio-slide-image-container">
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                        </div>

                        <div className="inicio-slide-content">
                            <h2 className="inicio-slide-title">{slide.title}</h2>
                            <p className="inicio-slide-text">{slide.text}</p>
                            <span className="inicio-slide-action-link">
                                {slide.buttonText || 'Visitar'}
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Dots navegación */}
            <div className="inicio-carousel-dots">
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
