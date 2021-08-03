import L from 'leaflet';
import MapSingleton from './MapSingleton';
import MapInitializer from './MapInitializer';
import MapMarker from './MapMarker';
import MapMarkerLayer from './MapMarkerLayer';
import { MapConfig } from '../map.config';
import { UBikeInfo } from '../data';

export default class UBikeMapFacade {
  private map: L.Map | null = MapSingleton.getInstance();
  private mapInitializer: MapInitializer;
  private mapMarkerLayer: MapMarkerLayer;

  constructor(
    config: MapConfig,
    public tooltipTemplate: (data: UBikeInfo) => string
  ) {
    if (this.map === null) {
      throw new Error('Map is not correctly initialized!');
    }

    this.mapInitializer = new MapInitializer(this.map, config);
    this.mapMarkerLayer = new MapMarkerLayer(this.map);

    this.mapInitializer.initialize();
  }

  pinStops(data: UBikeInfo[]) {
    const markers = data.map(info => {
      const marker = MapMarker.create(info.latLng);
      marker.bindTooltip(
        this.tooltipTemplate(info)
      );

      return marker;
    });

    this.mapMarkerLayer.addMarkers(markers);
  }

  clearStops() {
    this.mapMarkerLayer.clear();
  }
}
