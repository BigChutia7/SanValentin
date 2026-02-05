import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/san-valentin.png';

export default function SanValentin() {
    const navigate = useNavigate();
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
                background: 'rgba(0,0,0,0.4)',
                zIndex: 0
            }}></div>

            <div className="glass-card animate-float" style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="fade-in" style={{ fontSize: '4rem', marginBottom: '1rem', color: '#fda4af' }}>
                    Feliz San Valentín
                </h1>
                <p className="fade-in" style={{ fontSize: '1.5rem', marginBottom: '2rem', animationDelay: '0.3s' }}>
                    Chinita tengo un mensaje para ti❤️
                </p>

                <button className="btn btn-primary fade-in" style={{ animationDelay: '0.6s' }}
                    onClick={() => navigate('/mensaje')}

                >
                    Ver Mensaje
                </button>
            </div>
        </div>
    );
}
