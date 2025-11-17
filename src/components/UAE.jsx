import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Flag, Building2, Mountain, Waves, TreePine, Sun, Star } from 'lucide-react';

export default function UAE() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const [selectedEmirate, setSelectedEmirate] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const emirates = [
    {
      id: 'abu-dhabi',
      name: 'Abu Dhabi',
      emoji: '🏛️',
      coords: [24.4539, 54.3773],
      capital: true,
      area: '67,340 km²',
      population: '3.1 million',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      geography: 'Largest emirate, mostly desert with coastal areas and islands',
      uniqueFeatures: [
        'Capital city of the UAE',
        'Home to 90% of UAE\'s oil reserves',
        'Largest landmass in the federation',
        '200+ natural islands including Yas Island and Saadiyat Island'
      ],
      attractions: [
        'Sheikh Zayed Grand Mosque',
        'Louvre Abu Dhabi',
        'Yas Island (Ferrari World, Yas Waterworld)',
        'Emirates Palace',
        'Qasr Al Watan (Presidential Palace)',
        'Corniche Beach',
        'Sir Bani Yas Island (wildlife reserve)'
      ],
      contribution: 'Economic powerhouse and political capital, driving the UAE\'s global influence through energy resources and cultural investments'
    },
    {
      id: 'dubai',
      name: 'Dubai',
      emoji: '🏙️',
      coords: [25.2048, 55.2708],
      capital: false,
      area: '4,114 km²',
      population: '3.4 million',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      geography: 'Coastal city with desert hinterland, strategic location on Persian Gulf',
      uniqueFeatures: [
        'World\'s tallest building (Burj Khalifa)',
        'Largest man-made harbor (Jebel Ali Port)',
        'International aviation hub (Dubai International Airport)',
        'Palm Jumeirah and other artificial islands'
      ],
      attractions: [
        'Burj Khalifa',
        'Burj Al Arab',
        'Dubai Mall',
        'Palm Jumeirah',
        'Dubai Marina',
        'Dubai Frame',
        'Dubai Museum',
        'Dubai Aquarium',
        'IMG Worlds of Adventure',
        'Dubai Miracle Garden'
      ],
      contribution: 'Global tourism and business hub, showcasing innovation and luxury, making the UAE a world-renowned destination'
    },
    {
      id: 'sharjah',
      name: 'Sharjah',
      emoji: '📚',
      coords: [25.3573, 55.4033],
      capital: false,
      area: '2,590 km²',
      population: '1.8 million',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      geography: 'Coastal emirate with both Persian Gulf and Gulf of Oman coastlines',
      uniqueFeatures: [
        'UNESCO World Heritage Site (Al Qasba)',
        'Cultural capital of the UAE',
        'Only emirate with coastlines on both sides',
        'Rich archaeological sites'
      ],
      attractions: [
        'Sharjah Museum of Islamic Civilization',
        'Sharjah Aquarium',
        'Al Noor Island',
        'Sharjah Art Museum',
        'Al Qasba',
        'Sharjah Heritage Area',
        'Mleiha Archaeological Centre',
        'Kalba Bird of Prey Centre'
      ],
      contribution: 'Preserves and promotes Emirati culture and heritage, maintaining the UAE\'s identity and traditions for future generations'
    },
    {
      id: 'ajman',
      name: 'Ajman',
      emoji: '🏖️',
      coords: [25.4052, 55.5136],
      capital: false,
      area: '259 km²',
      population: '540,000',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      geography: 'Smallest emirate, mostly coastal with beautiful beaches',
      uniqueFeatures: [
        'Smallest emirate by area',
        'Longest natural beach in the UAE',
        'Traditional fishing and boat building',
        'Rich mangrove ecosystems'
      ],
      attractions: [
        'Ajman Museum',
        'Ajman Beach',
        'Al Zorah Nature Reserve',
        'Ajman Corniche',
        'Ajman City Centre',
        'Masfout (mountain enclave)'
      ],
      contribution: 'Represents the UAE\'s maritime heritage and provides a peaceful, family-friendly environment showcasing traditional Emirati lifestyle'
    },
    {
      id: 'umm-al-quwain',
      name: 'Umm Al Quwain',
      emoji: '🌊',
      coords: [25.5650, 55.5552],
      capital: false,
      area: '777 km²',
      population: '73,000',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-500',
      geography: 'Coastal emirate with lagoons and mangrove forests',
      uniqueFeatures: [
        'Second smallest emirate',
        'Rich archaeological sites (Ed-Dur)',
        'Important bird sanctuary (Al Sinniyah Island)',
        'Traditional fishing and pearl diving heritage'
      ],
      attractions: [
        'Umm Al Quwain Museum',
        'Dreamland Aqua Park',
        'Al Sinniyah Island',
        'Ed-Dur archaeological site',
        'Umm Al Quwain Fort',
        'Falaj Al Moalla (oasis)'
      ],
      contribution: 'Preserves the UAE\'s ancient history and natural heritage, offering insights into pre-Islamic civilizations and biodiversity'
    },
    {
      id: 'ras-al-khaimah',
      name: 'Ras Al Khaimah',
      emoji: '⛰️',
      coords: [25.7889, 55.9592],
      capital: false,
      area: '1,684 km²',
      population: '416,000',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      geography: 'Mountainous emirate with Jebel Jais (highest peak in UAE) and coastal areas',
      uniqueFeatures: [
        'Highest mountain in UAE (Jebel Jais - 1,934m)',
        'World\'s longest zipline',
        'Rich agricultural lands',
        'Ancient archaeological sites'
      ],
      attractions: [
        'Jebel Jais (mountain peak)',
        'Jebel Jais Flight (world\'s longest zipline)',
        'National Museum of Ras Al Khaimah',
        'Dhayah Fort',
        'Iceland Water Park',
        'Al Qawasim Corniche',
        'Jazirat Al Hamra (ghost village)'
      ],
      contribution: 'Showcases the UAE\'s natural diversity with mountains and adventure tourism, demonstrating the country\'s varied landscapes beyond deserts'
    },
    {
      id: 'fujairah',
      name: 'Fujairah',
      emoji: '🏔️',
      coords: [25.1288, 56.3264],
      capital: false,
      area: '1,165 km²',
      population: '256,000',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-500',
      geography: 'Only emirate on the Gulf of Oman, mountainous with wadis and beaches',
      uniqueFeatures: [
        'Only emirate entirely on the Gulf of Oman',
        'Mountainous terrain with wadis (valleys)',
        'No coastline on Persian Gulf',
        'Rich in natural springs and waterfalls'
      ],
      attractions: [
        'Fujairah Fort',
        'Al Bidyah Mosque (oldest in UAE)',
        'Snoopy Island (snorkeling)',
        'Wadi Wurayah (waterfalls)',
        'Fujairah Museum',
        'Ain Al Madhab Gardens',
        'Fujairah Heritage Village',
        'Bull Butting (traditional sport)'
      ],
      contribution: 'Provides strategic access to the Indian Ocean, showcases the UAE\'s mountainous beauty, and preserves ancient Islamic heritage'
    }
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
    if (mapLoaded && mapInstanceRef.current && selectedEmirate) {
      const emirate = emirates.find(e => e.id === selectedEmirate);
      if (emirate) {
        mapInstanceRef.current.flyTo(emirate.coords, 10, { duration: 1.5 });
      }
    }
  }, [selectedEmirate, mapLoaded]);

  const initMap = () => {
    if (!window.L || !mapRef.current) return;

    const map = window.L.map(mapRef.current, {
      center: [24.5, 55.0],
      zoom: 8,
      minZoom: 7,
      maxZoom: 18
    });
    mapInstanceRef.current = map;

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18
    }).addTo(map);

    // Add markers for each emirate
    emirates.forEach(emirate => {
      const icon = window.L.divIcon({
        html: `
          <div style="
            font-size: 32px;
            text-align: center;
            cursor: pointer;
            filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.4));
            transition: transform 0.2s;
          " class="emirate-marker">${emirate.emoji}</div>
        `,
        className: 'custom-emirate-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
      });

      const marker = window.L.marker(emirate.coords, { icon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px; min-width: 150px;">
            <div style="font-size: 36px; margin-bottom: 8px;">${emirate.emoji}</div>
            <strong style="font-size: 18px; color: #1f2937;">${emirate.name}</strong>
            ${emirate.capital ? '<br/><span style="font-size: 12px; color: #059669;">⭐ Capital of UAE</span>' : ''}
            <br/><span style="font-size: 12px; color: #666;">${emirate.area}</span>
          </div>
        `);

      marker.on('click', () => {
        setSelectedEmirate(emirate.id);
      });

      markersRef.current.push(marker);
    });

    // Add CSS for hover effects
    const style = document.createElement('style');
    style.textContent = `
      .emirate-marker:hover {
        transform: scale(1.3);
      }
    `;
    document.head.appendChild(style);
  };

  const flyToEmirate = (emirateId) => {
    const emirate = emirates.find(e => e.id === emirateId);
    if (emirate && mapInstanceRef.current) {
      setSelectedEmirate(emirateId);
      mapInstanceRef.current.flyTo(emirate.coords, 10, { duration: 1.5 });
    }
  };

  const selectedEmirateData = selectedEmirate ? emirates.find(e => e.id === selectedEmirate) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-black">
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 via-green-500 to-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <Flag className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">The Seven Emirates of the UAE</h1>
          <p className="text-lg md:text-xl opacity-90">Explore the unique identity and contributions of each Emirate</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-8">
        
        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-green-500 text-white p-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Interactive Map of the UAE
            </h2>
            <p className="text-sm opacity-90 mt-1">Click on any emirate marker to learn more!</p>
          </div>
          <div 
            ref={mapRef} 
            className="w-full h-[500px] md:h-[600px]"
            style={{ background: '#e5e7eb' }}
          />
        </div>

        {/* Selected Emirate Details */}
        {selectedEmirateData && (
          <div className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 ${selectedEmirateData.borderColor} animate-fadeIn`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl">{selectedEmirateData.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedEmirateData.name}</h2>
                  {selectedEmirateData.capital && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Capital
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    Area: {selectedEmirateData.area}
                  </span>
                  <span className="flex items-center gap-1">
                    <Sun className="w-4 h-4" />
                    Population: {selectedEmirateData.population}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedEmirate(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-gray-600" />
                    Geography
                  </h3>
                  <p className="text-gray-700">{selectedEmirateData.geography}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-gray-600" />
                    Unique Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedEmirateData.uniqueFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Waves className="w-5 h-5 text-gray-600" />
                    Key Attractions
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedEmirateData.attractions.map((attraction, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <Flag className="w-5 h-5 text-gray-600" />
                Contribution to UAE Identity
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedEmirateData.contribution}</p>
            </div>
          </div>
        )}

        {/* All Emirates Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Explore All Seven Emirates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emirates.map((emirate) => (
              <button
                key={emirate.id}
                onClick={() => flyToEmirate(emirate.id)}
                className={`${emirate.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-left border-2 ${emirate.borderColor} hover:scale-105 ${
                  selectedEmirate === emirate.id ? 'ring-4 ring-yellow-400' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{emirate.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{emirate.name}</h3>
                    {emirate.capital && (
                      <span className="text-xs bg-yellow-400 text-gray-800 px-2 py-1 rounded-full font-semibold">
                        Capital
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Area:</strong> {emirate.area}</p>
                  <p><strong>Population:</strong> {emirate.population}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-xs text-gray-600 line-clamp-2">{emirate.geography}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* UAE Identity Section */}
        <div className="bg-gradient-to-r from-red-600 via-green-600 to-black text-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How the Seven Emirates Create the UAE Identity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Flag className="w-6 h-6" />
                Unity in Diversity
              </h3>
              <p className="opacity-90 leading-relaxed">
                Each emirate brings unique strengths: Abu Dhabi's economic power, Dubai's global reach, Sharjah's cultural heritage, 
                and the smaller emirates' natural beauty and traditions. Together, they form a federation that balances modernity 
                with tradition, innovation with heritage.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Economic Synergy
              </h3>
              <p className="opacity-90 leading-relaxed">
                From oil and gas (Abu Dhabi) to tourism (Dubai), from manufacturing (Sharjah) to agriculture (Ras Al Khaimah, Fujairah), 
                each emirate contributes to a diversified economy that ensures the UAE's prosperity and resilience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TreePine className="w-6 h-6" />
                Geographic Diversity
              </h3>
              <p className="opacity-90 leading-relaxed">
                The UAE showcases remarkable geographic variety: from the vast deserts of Abu Dhabi to the mountains of Ras Al Khaimah 
                and Fujairah, from the Persian Gulf coastlines to the Gulf of Oman shores, creating a nation of stunning natural contrasts.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="w-6 h-6" />
                Cultural Richness
              </h3>
              <p className="opacity-90 leading-relaxed">
                While maintaining a unified national identity, each emirate preserves its local traditions, dialects, and customs, 
                creating a rich cultural tapestry that reflects the UAE's history as a federation of distinct but united states.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">UAE Quick Facts</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
              <div className="text-3xl font-bold text-red-600 mb-1">7</div>
              <div className="text-sm text-gray-700">Emirates</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-1">83,600</div>
              <div className="text-sm text-gray-700">km² Total Area</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">9.9M+</div>
              <div className="text-sm text-gray-700">Population</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-1">1971</div>
              <div className="text-sm text-gray-700">Federation Formed</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

