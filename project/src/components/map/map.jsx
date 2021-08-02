import React, {useRef, useState, useEffect} from 'react';
import leaflet from 'leaflet';
import { offersType } from '../../prop-types-const';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Map (props) {
  const {offers, hoveredOffer} = props;
  const city = [52.38333, 4.9];
  const mapRef = useRef(null);
  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const hoveredIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
  const zoom = 12;
  const [map, setMap] = useState(null);
  const setMarkers = () => {
    if (map !== null) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === hoveredOffer ? hoveredIcon : icon,
          })
          .addTo(map);
      });
    }
  };
  useEffect(() => {
    setMarkers();
  },[map, offers]);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city[0],
          lng: city[1],
        },
        zoom: zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    }
  }, [mapRef, map, city, offers, icon]);

  return (
    <div id="map" style={{height: '100%'}} ref={mapRef}></div>
  );
}

Map.propTypes = {
  offers: offersType,
  hoveredOffer: PropTypes.oneOfType([null, PropTypes.number]).isRequired,
};

const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer,
});

export default connect(mapStateToProps, null)(Map);

