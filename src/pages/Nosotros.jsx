import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import bgImage from '../assets/san-valentin.png';
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.jpeg';
import foto4 from '../assets/foto4.jpeg';
import foto5 from '../assets/foto5.jpeg';
import foto6 from '../assets/foto6.jpeg';

export default function Nosotros() {
    const navigate = useNavigate();

    const photos = [
        foto1, foto2, foto3,
        foto4, foto5, foto6
    ];

    return (
        <div
            className="page-content"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                paddingTop: '100px'
            }}
        >
            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px', padding: '0 20px' }}>
                <button
                    onClick={() => navigate('/san-valentin')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-main)'
                    }}
                    className="hover-bright"
                >
                    <ArrowLeft size={20} /> Volver
                </button>

                <h1 className="fade-in" style={{ fontSize: '4rem', marginBottom: '1rem', color: '#fda4af', textShadow: '0 0 20px rgba(225, 29, 72, 0.4)' }}>
                    TE AMO ❤️
                </h1>

                <p className="fade-in" style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#fce7f3', animationDelay: '0.2s' }}>
                    Lo mejor de mi vida es estar contigo
                </p>

                <div
                    className="fade-in"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        animationDelay: '0.4s'
                    }}
                >
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                margin: 0,
                                padding: '1rem',
                                width: '100%',
                                minHeight: '300px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            onClick={() => { }}
                        >
                            <div style={{
                                width: '100%',
                                height: '250px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '2px dashed rgba(255,255,255,0.2)',
                                position: 'relative'
                            }}>
                                {typeof photo === 'string' ? (
                                    <img
                                        src={photo}
                                        alt={`Foto ${index + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <>
                                        <Heart size={40} color="#e11d48" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>Foto {photo}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
