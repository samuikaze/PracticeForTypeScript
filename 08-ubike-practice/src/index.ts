import L from 'leaflet';
import mapConfig from './map.config';
import fetchData from './fetchData';

const {
  coordinate,
  zoomLevel,
  tileLayerURL,
  containerID,
} = mapConfig;

fetchData().then(data => {
  console.log(data);
});

const map = L.map(containerID);

map.setView(coordinate, zoomLevel);

L.tileLayer(tileLayerURL).addTo(map);
