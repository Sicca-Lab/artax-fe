import { useEffect, useState } from 'react';

export default function DashboardMap() {
  const [isClient, setIsClient] = useState(false);
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [Popup, setPopup] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamic import to avoid SSR issues
    import('react-leaflet').then((modules) => {
      setMapContainer(() => modules.MapContainer);
      setTileLayer(() => modules.TileLayer);
      setMarker(() => modules.Marker);
      setPopup(() => modules.Popup);
    });

    // Import Leaflet CSS
    import('leaflet/dist/leaflet.css');
    
    // Fix for default markers in react-leaflet
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  if (!isClient || !MapContainer || !TileLayer || !Marker || !Popup) {
    return (
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-600 font-mono text-sm">Loading map...</div>
      </div>
    );
  }

  return (
    <MapContainer 
      center={[-7.2575, 112.7521]} 
      zoom={12} 
      style={{ height: '500px', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-7.2575, 112.7521]}>
        <Popup>Pusat Perintah</Popup>
      </Marker>
      <Marker position={[-7.1905, 112.7506]}>
        <Popup>Zona A</Popup>
      </Marker>
      <Marker position={[-7.2905, 112.7521]}>
        <Popup>Zona B</Popup>
      </Marker>
      <Marker position={[-7.2400, 112.7600]}>
        <Popup>Truk 01</Popup>
      </Marker>
      <Marker position={[-7.2650, 112.7400]}>
        <Popup>Truk 02</Popup>
      </Marker>
      <Marker position={[-7.1800, 112.7700]}>
        <Popup>Truk 03</Popup>
      </Marker>
    </MapContainer>
  );
}
