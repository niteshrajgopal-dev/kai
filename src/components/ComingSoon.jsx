import React from 'react';
import { Construction, Sparkles } from 'lucide-react';

export default function ComingSoon({ subject, icon }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Fun animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">⭐</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse opacity-20">✨</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce opacity-20">🎨</div>
        <div className="absolute bottom-40 right-1/3 text-6xl animate-pulse opacity-20">🚀</div>
      </div>
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center relative z-10 border-4 border-purple-300">
        <div className="text-9xl mb-6 animate-bounce">{icon}</div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          {subject}
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Construction className="w-10 h-10 text-orange-500 animate-bounce" />
          <p className="text-3xl text-gray-700 font-bold">Coming Soon!</p>
          <Sparkles className="w-10 h-10 text-yellow-500 animate-pulse" />
        </div>
        <p className="text-gray-600 text-xl font-semibold mb-4">
          🚧 This section is being built! 🚧
        </p>
        <p className="text-gray-500 text-lg">
          Check back later for awesome content!
        </p>
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-2xl border-2 border-purple-400">
          <p className="text-gray-800 font-semibold text-lg">
            🎉 More cool subjects are on the way! Stay tuned! 🎉
          </p>
        </div>
        
        {/* Fun footer */}
        <div className="mt-8 flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🌟</span>
          <span className="animate-pulse">✨</span>
          <span className="animate-bounce delay-100">💫</span>
          <span className="animate-pulse delay-200">⭐</span>
        </div>
      </div>
    </div>
  );
}

