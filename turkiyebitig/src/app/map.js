import { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

const MapPage = () => {
  useEffect(() => {
    // Harita öğelerini oluşturma
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [35.1683, 39.062],
        zoom: 6,
      }),
    });

    // GeoJSON veri kaynağı oluşturma
    const geojsonSource = new VectorSource({
      url: "turkiye.geojson", // GeoJSON veri dosyasının yolunu buraya girin
      format: new GeoJSON(),
    });

    // Sınırlar için vektör katmanı oluşturma
    const vectorLayer = new VectorLayer({
      source: geojsonSource,
    });

    // Vektör katmanını haritaya ekleme
    map.addLayer(vectorLayer);

    return () => {
      // Harita öğelerini temizleme
      map.setTarget(null);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapPage;
