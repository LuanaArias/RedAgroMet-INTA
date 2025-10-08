import './TeamCard.css';

export function TeamCard({ name, title, activity, photo }) {
    return (
        <div className="team-card">
            {photo && (
                <div className="team-card__photo-container">
                    <img src={photo} alt={name} className="team-card__photo" />
                </div>
            )}
            <h3 className="team-card__name">{name}</h3>
            {title && <p className="team-card__title">{title}</p>}
            {activity && <p className="team-card__activity">{activity}</p>}
        </div>
    );
}