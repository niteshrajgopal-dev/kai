import React, { useState } from 'react';
import { Ruler, Calculator, LayoutGrid, Maximize2, Image } from 'lucide-react';
import DreamRoom3D from './DreamRoom3D';

export default function Mathematics() {
  const [activeView, setActiveView] = useState('calculations'); // 'calculations', '3d', 'actual'

  const zones = [
    { 
      name: 'Playstation/Media', 
      percentage: 45, 
      area: 13.5, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      icon: '🎮'
    },
    { 
      name: 'PE / Fitness', 
      percentage: 35, 
      area: 10.5, 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      icon: '💪'
    },
    { 
      name: 'Computing / Desk', 
      percentage: 20, 
      area: 6, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      icon: '💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <Calculator className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Dream Room Design</h1>
          <p className="text-lg md:text-xl opacity-90">Geometry & Measurement Project</p>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          <button
            onClick={() => setActiveView('calculations')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'calculations'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            📐 Calculations & Design
          </button>
          <button
            onClick={() => setActiveView('3d')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === '3d'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            🏠 3D Interactive Model
          </button>
          <button
            onClick={() => setActiveView('actual')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeView === 'actual'
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            📸 Actual Room
          </button>
        </div>

        {activeView === 'calculations' ? (
          <div className="space-y-6">
            {/* Room Dimensions Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Room Dimensions</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  When designing my dream room, I chose a generous size for a multi-purpose room:
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Maximize2 className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Length (L)</p>
                        <p className="text-3xl font-bold text-blue-700">6m</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Maximize2 className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">Width (W)</p>
                        <p className="text-3xl font-bold text-indigo-700">5m</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-600 mb-2">Formula:</p>
                    <p className="text-xl font-bold text-gray-800 mb-3">Area = Length × Width</p>
                    <p className="text-lg text-gray-700 mb-2">Therefore: Area = 6m × 5m</p>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 border-2 border-green-500">
                      <p className="text-2xl font-bold text-green-800">Total Area = 30m²</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                  <p className="text-gray-700">
                    <strong className="text-yellow-800">💡 Why is this important?</strong> In geometry and design, 
                    knowing the area is crucial for the next step, which is <strong>spatial allocation</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Spatial Allocation Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <LayoutGrid className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800">Spatial Allocation</h2>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-lg text-gray-700">
                  I decided to partition my room into the following zones:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {zones.map((zone, index) => (
                    <div key={index} className={`${zone.bgColor} rounded-xl p-4 border-2 ${zone.borderColor}`}>
                      <div className="text-4xl mb-2 text-center">{zone.icon}</div>
                      <h3 className="font-bold text-gray-800 text-center text-lg">{zone.name}</h3>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mt-6">
                  <p className="text-gray-700">
                    <strong className="text-orange-800">🤔 Critical Question:</strong> How does knowing the total 
                    available area force me to make choices about how much space to dedicate to the Fitness Zone 
                    versus the Media Zone versus the Computing Zone?
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Answer:</strong> Knowing the total area is crucial because it leads directly to the 
                    partitioning. I must ensure all zones add up to exactly 30m²!
                  </p>
                </div>
              </div>
            </div>

            {/* Partition Calculations */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">Partition Calculations</h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Based on my priorities and needs, I defined my partitions as follows:
              </p>

              {/* Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <th className="border border-indigo-700 p-4 text-left">Zone</th>
                      <th className="border border-indigo-700 p-4 text-center">Percentage Allocation</th>
                      <th className="border border-indigo-700 p-4 text-center">Calculation</th>
                      <th className="border border-indigo-700 p-4 text-center">Area (m²)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((zone, index) => (
                      <tr key={index} className={`${zone.bgColor} hover:opacity-80 transition-opacity`}>
                        <td className="border border-gray-300 p-4 font-semibold text-gray-800">
                          <span className="mr-2">{zone.icon}</span>
                          {zone.name}
                        </td>
                        <td className="border border-gray-300 p-4 text-center font-bold text-lg text-gray-800">
                          {zone.percentage}%
                        </td>
                        <td className="border border-gray-300 p-4 text-center font-mono text-gray-800">
                          30m² × {(zone.percentage / 100).toFixed(2)}
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-xl font-bold text-gray-800">{zone.area}m²</span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-green-100 to-emerald-100 font-bold">
                      <td className="border border-gray-300 p-4 text-gray-800">Total</td>
                      <td className="border border-gray-300 p-4 text-center text-lg text-gray-800">100%</td>
                      <td className="border border-gray-300 p-4 text-center font-mono text-gray-800">30m² × 1</td>
                      <td className="border border-gray-300 p-4 text-center">
                        <span className="text-xl font-bold text-green-800">30m²</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual Bar Chart */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-800 text-xl mb-4">Visual Distribution:</h3>
                {zones.map((zone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">
                        {zone.icon} {zone.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {zone.percentage}% ({zone.area}m²)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${zone.color} flex items-center justify-center text-white font-bold text-sm transition-all duration-1000`}
                        style={{ width: `${zone.percentage}%` }}
                      >
                        {zone.percentage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-6">
                <p className="text-gray-700">
                  <strong className="text-green-800">✅ Verification:</strong> 
                  {' '}13.5m² + 10.5m² + 6m² = 30m² ✓
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  All zones add up perfectly to our total room area!
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to see more?</h3>
              <p className="mb-4 text-lg opacity-90">
                Explore the interactive 3D model or view the actual room design!
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => setActiveView('3d')}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  🏠 View 3D Model
                </button>
                <button
                  onClick={() => setActiveView('actual')}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  📸 View Actual Room
                </button>
              </div>
            </div>
          </div>
        ) : activeView === '3d' ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <DreamRoom3D />
          </div>
        ) : (
          /* Actual Room View */
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Image className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">My Actual Dream Room</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Here's the inspiration and actual design of my dream room, bringing together all the zones we calculated!
              </p>
              
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/room-image.jpg" 
                  alt="My Dream Room Design"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="hidden w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center flex-col gap-4"
                >
                  <Image className="w-16 h-16 text-gray-400" />
                  <p className="text-gray-500 font-semibold">Room image will appear here</p>
                  <p className="text-sm text-gray-400">Save your room image as 'room-image.jpg' in the public folder</p>
                </div>
              </div>
              
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500">
                  <div className="text-3xl mb-2">🎮</div>
                  <h3 className="font-bold text-blue-800 mb-1">Media Zone</h3>
                  <p className="text-sm text-gray-600">Entertainment center with TV and gaming setup</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-500">
                  <div className="text-3xl mb-2">💪</div>
                  <h3 className="font-bold text-green-800 mb-1">Fitness Zone</h3>
                  <p className="text-sm text-gray-600">Exercise equipment and workout space</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-500">
                  <div className="text-3xl mb-2">💻</div>
                  <h3 className="font-bold text-purple-800 mb-1">Computing Zone</h3>
                  <p className="text-sm text-gray-600">Workspace with desk and storage</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Explore Different Views</h3>
              <p className="mb-4 text-lg opacity-90">
                Switch between calculations, 3D model, and actual room design!
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button
                  onClick={() => setActiveView('calculations')}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  📐 View Calculations
                </button>
                <button
                  onClick={() => setActiveView('3d')}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  🏠 View 3D Model
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

