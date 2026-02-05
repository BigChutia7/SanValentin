import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import bgImage from '../assets/anniversary.png';

export default function Anniversary() {
    const [isLocked, setIsLocked] = useState(true);

    useEffect(() => {

        const targetDate = new Date(2026, 2, 12);
        const now = new Date();

        if (now >= targetDate) {
            setIsLocked(false);
        } else {
            setIsLocked(true);
        }
    }, []);

    if (isLocked) {
        return (
            <div
                className="page-content"
                style={{
                    backgroundColor: '#000',
                    backgroundImage: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <div className="glass-card fade-in" style={{ maxWidth: '600px', borderColor: '#ef4444' }}>
                    <Lock size={60} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fca5a5' }}>
                        Lisette Maria Rodrigues Pereira
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#e5e5e5' }}>
                        ¿Qué haces intentando ver algo que todavía no es?
                        <br />
                        Tendrás que esperar hasta  <strong>Nuestro dia</strong>.
                    </p>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                        Paciencia mi amor... todo llega ❤️
                    </p>
                </div>
            </div>
        );
    }

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
                background: 'rgba(0,0,0,0.5)',
                zIndex: 0
            }}></div>

            <div className="glass-card animate-float" style={{ position: 'relative', zIndex: 1, borderColor: 'rgba(212, 175, 55, 0.3)' }}>
                <h1 className="fade-in" style={{ fontSize: '5rem', marginBottom: '1rem', color: '#fbbf24', textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}>
                    1 Año
                </h1>
                <h2 className="fade-in" style={{ fontSize: '2rem', marginBottom: '2rem', animationDelay: '0.2s', fontWeight: 300 }}>

                </h2>
                <p className="fade-in" style={{ fontSize: '1.2rem', marginBottom: '2rem', animationDelay: '0.4s', maxWidth: '600px', margin: '0 auto 2rem' }}>

                </p>
                <button className="btn" style={{
                    background: 'linear-gradient(135deg, #d4af37, #b4690e)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    animationDelay: '0.6s'
                }}>
                    Nuestra Historia
                </button>
            </div>
        </div>
    );
}
