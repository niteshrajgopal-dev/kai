import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Home, School, Heart, Globe, Plane } from 'lucide-react';

export default function Geography() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [activeCity, setActiveCity] = useState('world');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const durbanSpots = [
    { emoji: '🏖', name: 'uShaka Marine World', desc: 'beaches, aquarium, water slides', coords: [-29.8579, 31.0446], city: 'durban' },
    { emoji: '🌊', name: 'Durban Beachfront', desc: 'great views and family walks', coords: [-29.8587, 31.0297], city: 'durban' },
    { emoji: '🛍', name: 'Gateway Theatre of Shopping', desc: 'movies, shopping, restaurants', coords: [-29.7661, 31.0537], city: 'durban' },
    { emoji: '🌿', name: 'Mitchell Park Zoo', desc: 'animals, picnics, nature', coords: [-29.8460, 30.9950], city: 'durban' },
    { emoji: '🎨', name: 'Durban Botanic Gardens', desc: 'beautiful plants and quiet spaces', coords: [-29.8481, 30.9797], city: 'durban' },
    { emoji: '⚽', name: 'Moses Mabhida Stadium', desc: 'sports, SkyCar, adventure', coords: [-29.8297, 31.0298], city: 'durban' }
  ];

  const dubaiSpots = [
    { emoji: '🛍', name: 'Dubai Mall', desc: 'aquarium, ice rink, VR park, shops, cinema', coords: [25.1972, 55.2796], city: 'dubai' },
    { emoji: '🌉', name: 'Dubai Marina', desc: 'relaxing walks, boats, restaurants', coords: [25.0804, 55.1398], city: 'dubai' },
    { emoji: '🌴', name: 'Kite Beach / Jumeirah Beach', desc: 'swimming, cycling track, activities', coords: [25.1843, 55.2375], city: 'dubai' },
    { emoji: '🎢', name: 'IMG Worlds of Adventure', desc: 'theme parks', coords: [25.0747, 55.3086], city: 'dubai' },
    { emoji: '🗼', name: 'Burj Khalifa', desc: 'famous landmark and shows', coords: [25.1972, 55.2744], city: 'dubai' },
    { emoji: '🎮', name: 'Expo City', desc: 'events, playgrounds, learning', coords: [25.0603, 55.1572], city: 'dubai' }
  ];

  const myLocations = [
    { name: 'My Home', location: 'Durban, South Africa', coords: [-29.8587, 31.0218], icon: '🏠', color: '#f97316', type: 'home' },
    { name: 'The English College', location: 'Dubai, UAE', coords: [25.1128, 55.2003], icon: '🏫', color: '#8b5cf6', type: 'school' }
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
    script.async = true;
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    document.body.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && mapInstanceRef.current) {
      updateMapView();
    }
  }, [activeCity, mapLoaded]);

  const initMap = () => {
    if (!window.L || !mapRef.current) return;

    const map = window.L.map(mapRef.current, {
      center: [0, 35],
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      worldCopyJump: true
    });
    mapInstanceRef.current = map;

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18
    }).addTo(map);

    // Draw connection line between home and school
    const connectionLine = window.L.polyline([
      myLocations[0].coords,
      myLocations[1].coords
    ], {
      color: '#8b5cf6',
      weight: 3,
      opacity: 0.6,
      dashArray: '10, 10'
    }).addTo(map);

    // Add my locations with custom styling
    myLocations.forEach(loc => {
      const homeIcon = window.L.divIcon({
        html: `
          <div style="
            font-size: 40px;
            text-align: center;
            animation: bounce 2s infinite;
            filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.4));
          ">${loc.icon}</div>
        `,
        className: 'custom-icon-large',
        iconSize: [50, 50],
        iconAnchor: [25, 50]
      });

      const marker = window.L.marker(loc.coords, { icon: homeIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <div style="font-size: 32px; margin-bottom: 8px;">${loc.icon}</div>
            <strong style="font-size: 16px; color: ${loc.color};">${loc.name}</strong><br/>
            <span style="font-size: 14px; color: #666;">${loc.location}</span>
          </div>
        `);
      
      marker.on('click', () => {
        setSelectedSpot({ ...loc, isMain: true });
      });
      
      markersRef.current.push(marker);
    });

    // Add Durban spots
    durbanSpots.forEach(spot => {
      const icon = window.L.divIcon({
        html: `
          <div style="
            font-size: 28px;
            cursor: pointer;
            transition: transform 0.2s;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
          " class="spot-marker">${spot.emoji}</div>
        `,
        className: 'custom-icon',
        iconSize: [35, 35],
        iconAnchor: [17.5, 35]
      });

      const marker = window.L.marker(spot.coords, { icon })
        .addTo(map)
        .bindPopup(`
          <div style="padding: 8px;">
            <div style="font-size: 28px; margin-bottom: 6px;">${spot.emoji}</div>
            <strong style="font-size: 15px; color: #f97316;">${spot.name}</strong><br/>
            <em style="font-size: 13px; color: #666;">${spot.desc}</em>
          </div>
        `);

      marker.on('click', () => {
        setSelectedSpot(spot);
      });

      markersRef.current.push(marker);
    });

    // Add Dubai spots
    dubaiSpots.forEach(spot => {
      const icon = window.L.divIcon({
        html: `
          <div style="
            font-size: 28px;
            cursor: pointer;
            transition: transform 0.2s;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
          " class="spot-marker">${spot.emoji}</div>
        `,
        className: 'custom-icon',
        iconSize: [35, 35],
        iconAnchor: [17.5, 35]
      });

      const marker = window.L.marker(spot.coords, { icon })
        .addTo(map)
        .bindPopup(`
          <div style="padding: 8px;">
            <div style="font-size: 28px; margin-bottom: 6px;">${spot.emoji}</div>
            <strong style="font-size: 15px; color: #3b82f6;">${spot.name}</strong><br/>
            <em style="font-size: 13px; color: #666;">${spot.desc}</em>
          </div>
        `);

      marker.on('click', () => {
        setSelectedSpot(spot);
      });

      markersRef.current.push(marker);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .spot-marker:hover {
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(style);
  };

  const updateMapView = () => {
    if (!mapInstanceRef.current || !window.L) return;

    const map = mapInstanceRef.current;

    if (activeCity === 'durban') {
      map.flyTo([-29.8587, 31.0218], 12, { duration: 1.5 });
    } else if (activeCity === 'dubai') {
      map.flyTo([25.1400, 55.2200], 11, { duration: 1.5 });
    } else {
      // World view showing both cities
      map.flyTo([0, 35], 2, { duration: 1.5 });
    }
  };

  const flyToLocation = (coords, zoom = 13) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(coords, zoom, { duration: 1.5 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <Globe className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Mapping My World</h1>
          <p className="text-lg md:text-xl opacity-90 mb-4">Click any location on the map to explore! ✈️</p>
          <div className="flex justify-center items-center gap-3 text-sm">
            <span className="text-2xl">🏠</span>
            <span>Durban</span>
            <Plane className="w-5 h-5" />
            <span>Dubai</span>
            <span className="text-2xl">🏫</span>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <button
            onClick={() => setActiveCity('world')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
              activeCity === 'world'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-purple-100 shadow'
            }`}
          >
            🌍 World View
          </button>
          <button
            onClick={() => setActiveCity('durban')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
              activeCity === 'durban'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-orange-100 shadow'
            }`}
          >
            🇿🇦 Durban
          </button>
          <button
            onClick={() => setActiveCity('dubai')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
              activeCity === 'dubai'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-blue-100 shadow'
            }`}
          >
            🇦🇪 Dubai
          </button>
        </div>

        {/* Selected Spot Info */}
        {selectedSpot && (
          <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border-l-4 border-purple-500 animate-fadeIn">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{selectedSpot.icon || selectedSpot.emoji}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{selectedSpot.name}</h3>
                {selectedSpot.location && (
                  <p className="text-gray-600 mb-2">{selectedSpot.location}</p>
                )}
                {selectedSpot.desc && (
                  <p className="text-gray-600">{selectedSpot.desc}</p>
                )}
                <button
                  onClick={() => flyToLocation(selectedSpot.coords)}
                  className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold"
                >
                  📍 Zoom to Location
                </button>
              </div>
              <button
                onClick={() => setSelectedSpot(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div 
            ref={mapRef} 
            className="w-full h-[500px] md:h-[600px]"
            style={{ background: '#e5e7eb' }}
          />
        </div>

        {/* Quick Access Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <button
            onClick={() => flyToLocation(myLocations[0].coords, 12)}
            className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-3xl mb-2">🏠</div>
            <div className="font-bold text-sm">My Home</div>
            <div className="text-xs opacity-90">Durban</div>
          </button>
          <button
            onClick={() => flyToLocation(myLocations[1].coords, 13)}
            className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-3xl mb-2">🏫</div>
            <div className="font-bold text-sm">My School</div>
            <div className="text-xs opacity-90">Dubai</div>
          </button>
          <button
            onClick={() => flyToLocation([-29.8579, 31.0446], 14)}
            className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-3xl mb-2">🏖</div>
            <div className="font-bold text-sm">uShaka</div>
            <div className="text-xs opacity-90">Marine World</div>
          </button>
          <button
            onClick={() => flyToLocation([25.1972, 55.2796], 15)}
            className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="text-3xl mb-2">🛍</div>
            <div className="font-bold text-sm">Dubai Mall</div>
            <div className="text-xs opacity-90">Shopping</div>
          </button>
        </div>

        {/* Location Lists */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Durban */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span className="text-3xl">🇿🇦</span> Durban, South Africa
            </h3>
            <div className="space-y-2">
              {durbanSpots.map((spot, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSpot(spot);
                    flyToLocation(spot.coords, 14);
                  }}
                  className="w-full bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all text-left hover:scale-102"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{spot.emoji}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">{spot.name}</h4>
                      <p className="text-xs text-gray-600">{spot.desc}</p>
                    </div>
                    <MapPin className="w-4 h-4 text-orange-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dubai */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="text-3xl">🇦🇪</span> Dubai, UAE
            </h3>
            <div className="space-y-2">
              {dubaiSpots.map((spot, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSpot(spot);
                    flyToLocation(spot.coords, 14);
                  }}
                  className="w-full bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all text-left hover:scale-102"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{spot.emoji}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">{spot.name}</h4>
                      <p className="text-xs text-gray-600">{spot.desc}</p>
                    </div>
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-base md:text-lg mb-2">🌍 Two cities, one world, endless memories 🗺️</p>
          <p className="text-xs md:text-sm text-gray-400">Click markers, buttons, or locations to explore interactively!</p>
        </div>
      </div>
    </div>
  );
}



