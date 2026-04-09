import './Country.css';

const Country = ({ country, isVisited, onToggleVisit }) => {
    return (
        <div 
            className={`country-card ${isVisited ? 'visited' : ''}`}
            onClick={() => onToggleVisit(country.cca3.cca3)}
        >
            <img 
                src={country.flags.flags.png} 
                alt={country.flags.flags.alt || `${country.name.common} flag`}
            />
            <p>{country.name.common}</p>
            <p>Population : {country.population.population}</p>
            <p>{country.population.population < 40800 ? "Big country" : "Small Country"}</p>
            <button className="visit-card-btn">
                {isVisited ? 'Visited ✓' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;