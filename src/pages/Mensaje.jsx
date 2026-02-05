import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import bgImage from '../assets/san-valentin.png';

export default function Mensaje() {
    const navigate = useNavigate();

    const [mostrarError, setMostrarError] = useState(false);
    const [mostrarNo, setMostrarNo] = useState(true);

    const handleNo = () => {
        setMostrarError(true);

        setTimeout(() => {
            setMostrarNo(false);
        }, 2000);
    };

    return (
        <div
            className="page-content"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 0
            }}></div>

            <div
                className="glass-card animate-float"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '700px',
                    textAlign: 'left'
                }}
            >
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
                        marginBottom: '1.5rem',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-main)'
                    }}
                    className="hover-bright"
                >
                    <ArrowLeft size={20} /> Volver
                </button>

                <h1
                    className="fade-in"
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        color: '#fda4af',
                        textAlign: 'center'
                    }}
                >
                    💌 Mi mensaje para ti
                </h1>

                <div
                    className="fade-in"
                    style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        animationDelay: '0.3s',
                        whiteSpace: 'pre-line'
                    }}
                >
                    <p style={{ marginBottom: '1.5rem' }}>Hola mi amor</p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Es nuestro primer San Valentín juntos, me da mucha felicidad celebrar el primer
                        San Valentín de mi vida con la persona que más amo en mi vida y que me ha devuelto
                        las ganas de vivir, gracias por quererme tanto ❤️💍
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Por eso te quería decir que...
                    </p>

                    <p style={{ marginBottom: '1rem' }}>
                        ¿Quieres ser mi San Valentín ❤️?
                    </p>
                </div>

                {mostrarError && (
                    <div
                        className="fade-in"
                        style={{
                            marginTop: '2rem',
                            background: 'rgba(255,0,0,0.15)',
                            color: '#fecaca',
                            padding: '1rem',
                            borderRadius: '12px',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        Te has equivocado mi amor no pasa nada yo te ayudo 😌
                    </div>
                )}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginTop: '3rem'
                    }}
                >
                    <button
                        className="btn btn-primary fade-in"
                        style={{ animationDelay: '0.6s' }}
                        onClick={() => navigate('/nosotros')}
                    >
                        Sí, mi amor ❤️
                    </button>

                    {mostrarNo && (
                        <button
                            className="btn btn-primary fade-in"
                            style={{ animationDelay: '0.6s' }}
                            onClick={handleNo}
                        >
                            No, no te quiero 😢
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
