import React from 'react';
import { Mountain, Globe, Sparkles, Heart, Star, BookOpen } from 'lucide-react';

export default function MFL() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white py-12 px-6 shadow-2xl border-b-4 border-orange-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3 animate-bounce">
            <Globe className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Explore Your Name 🌍</h1>
          <p className="text-lg md:text-xl opacity-90">Discovering the Origin and Meaning</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-8">
        
        {/* Name Title Card */}
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white rounded-3xl shadow-2xl p-10 text-center border-4 border-yellow-300 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-10 text-6xl animate-pulse">⭐</div>
            <div className="absolute bottom-4 right-10 text-6xl animate-bounce">✨</div>
            <div className="absolute top-1/2 left-1/4 text-5xl animate-pulse">🏔️</div>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-4 relative z-10">Kailash</h2>
          <p className="text-2xl font-semibold relative z-10">कैलाश</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-800">My Name Story</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            My name is <strong className="text-orange-600">Kailash</strong>, and it has a very interesting origin and meaning. The name Kailash comes from <strong>Sanskrit</strong>, one of the oldest languages in the world. It is most commonly used in India, but people in other countries also have this name.
          </p>
        </div>

        {/* Mount Kailash Connection */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-4 border-blue-300">
          <div className="flex items-center gap-3 mb-6">
            <Mountain className="w-10 h-10 text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-800">The Sacred Mountain 🏔️</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The name Kailash refers to a famous and sacred mountain called <strong className="text-blue-700">Mount Kailash</strong>. It is located in the <strong>Himalayas</strong>, and many religions, including Hinduism, Buddhism, etc, consider it a holy place.
            </p>
            <div className="bg-blue-100 rounded-lg p-4 border-l-4 border-blue-600">
              <p className="text-gray-700">
                <strong className="text-blue-800">🙏 Sacred Significance:</strong> In Hindu beliefs, it is said to be the home of <strong>Lord Shiva</strong>, one of the most important gods. Because of this, the name Kailash is often connected with ideas of <span className="text-blue-700 font-semibold">strength, peace, and spirituality</span>.
              </p>
            </div>
          </div>

          {/* Mountain Image Placeholder */}
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-b from-blue-200 to-white">
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-300 via-cyan-200 to-white relative">
              <div className="text-center">
                <div className="text-8xl mb-2">🏔️</div>
                <p className="text-gray-600 font-semibold">Mount Kailash</p>
                <p className="text-sm text-gray-500">The Sacred Peak of the Himalayas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Name Meanings */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-purple-600" />
            <h3 className="text-3xl font-bold text-purple-800">What Does It Mean? ✨</h3>
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The meaning of the name Kailash is often described as:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center border-2 border-purple-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">💎</div>
              <h4 className="text-2xl font-bold text-purple-900 mb-2">Crystal</h4>
              <p className="text-sm text-gray-700">Pure and transparent</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center border-2 border-yellow-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">✨</div>
              <h4 className="text-2xl font-bold text-yellow-900 mb-2">Shining</h4>
              <p className="text-sm text-gray-700">Bright and radiant</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center border-2 border-green-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-3">☮️</div>
              <h4 className="text-2xl font-bold text-green-900 mb-2">Peace</h4>
              <p className="text-sm text-gray-700">One who bestows peace</p>
            </div>
          </div>

          <div className="mt-6 bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
            <p className="text-gray-700">
              The mountain itself is known for its beautiful shape and pure white snow, which may be why the name carries such meanings.
            </p>
          </div>
        </div>

        {/* Cultural Background */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 border-4 border-amber-300">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-10 h-10 text-amber-600" />
            <h3 className="text-3xl font-bold text-amber-800">Cultural & Spiritual Background 🌟</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
              <h4 className="text-xl font-bold text-amber-800 mb-2">🌏 Origin</h4>
              <p className="text-gray-700">Sanskrit - One of the world's oldest languages</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
              <h4 className="text-xl font-bold text-orange-800 mb-2">🗺️ Geographic Connection</h4>
              <p className="text-gray-700">The Himalayas - Home to Mount Kailash</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
              <h4 className="text-xl font-bold text-red-800 mb-2">🙏 Religious Significance</h4>
              <p className="text-gray-700">Sacred in Hinduism, Buddhism, and other faiths</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-800 mb-2">💫 Symbolic Meaning</h4>
              <p className="text-gray-700">Represents strength, peace, and spirituality</p>
            </div>
          </div>
        </div>

        {/* Personal Reflection */}
        <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl shadow-xl p-8 border-4 border-pink-400">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-10 h-10 text-pink-600" />
            <h3 className="text-3xl font-bold text-pink-800">What I Discovered 💭</h3>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I discovered that my name has a <strong className="text-pink-700">strong cultural and spiritual background</strong>. It is not just a name, but a <strong>symbol of a place</strong> that many people around the world respect.
            </p>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4 border-2 border-pink-300">
              <p className="text-lg text-gray-800 font-semibold text-center">
                Knowing this makes me feel proud because my name represents something powerful and meaningful. 🌟
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-indigo-200">
          <h3 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Quick Facts About "Kailash" 📚</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border-l-4 border-indigo-500">
              <p className="font-bold text-indigo-800 mb-2">📜 Language Origin:</p>
              <p className="text-gray-700">Sanskrit (संस्कृत)</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-l-4 border-purple-500">
              <p className="font-bold text-purple-800 mb-2">🌍 Most Common In:</p>
              <p className="text-gray-700">India, Nepal, and South Asia</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-500">
              <p className="font-bold text-green-800 mb-2">⛰️ Named After:</p>
              <p className="text-gray-700">Mount Kailash in the Himalayas</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-5 border-l-4 border-orange-500">
              <p className="font-bold text-orange-800 mb-2">✨ Core Meanings:</p>
              <p className="text-gray-700">Crystal, Shining, Peace</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white py-6 mt-12 border-t-4 border-yellow-300">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-base md:text-lg mb-2 flex items-center justify-center gap-3">
            <span className="text-2xl">🏔️</span>
            <span className="font-bold">Kailash - A Name with Deep Meaning</span>
            <span className="text-2xl">✨</span>
          </p>
          <p className="text-xs md:text-sm opacity-90">From the sacred peaks to the heart</p>
        </div>
      </div>
    </div>
  );
}


