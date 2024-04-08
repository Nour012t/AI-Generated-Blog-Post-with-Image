import React, { useState, useEffect } from 'react';

const MapComponent = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                error => {
                    console.error('Error getting geolocation:', error);
                }
            );
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Latitude: {latitude}</h2>
            <h2>Longitude: {longitude}</h2>
        </div>
    );
};

export default MapComponent;
