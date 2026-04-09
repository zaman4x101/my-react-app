import { useState, use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const data = use(countriesPromise);
    const countries = data.countries;
    const [visitedCountries, setVisitedCountries] = useState(new Set());
    const [isVisitedMode, setIsVisitedMode] = useState(false);

    const handleVisitedToggle = () => {
        if (isVisitedMode) {
            // Reset: clear all visited countries
            setVisitedCountries(new Set());
        } else {
            // Mark all countries as visited
            const allCountryCodes = new Set(countries.map(country => country.cca3.cca3));
            setVisitedCountries(allCountryCodes);
        }
        setIsVisitedMode(!isVisitedMode);
    };

    const toggleCountryVisited = (countryCode) => {
        setVisitedCountries(prev => {
            const newSet = new Set(prev);
            if (newSet.has(countryCode)) {
                newSet.delete(countryCode);
            } else {
                newSet.add(countryCode);
            }
            return newSet;
        });
    };

    const visitedCount = visitedCountries.size;

    return (
        <div className="countries-container">
            <div className="countries-header">
                <h2>Country Count: {countries.length}</h2>
                <p className="visited-count">Visited Countries: {visitedCount}</p>
                <button 
                    className={`visit-toggle-btn ${isVisitedMode ? 'visited-active' : ''}`}
                    onClick={handleVisitedToggle}
                >
                    {isVisitedMode ? 'Reset All Visited' : 'Mark All Visited'}
                </button>
            </div>
            <div className="countries-grid">
                {
                    countries.map(country => (
                        <Country 
                            key={country.cca3.cca3} 
                            country={country}
                            isVisited={visitedCountries.has(country.cca3.cca3)}
                            onToggleVisit={toggleCountryVisited}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;