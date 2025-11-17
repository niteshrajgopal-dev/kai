import React, { useState } from 'react';
import { BookOpen, Globe, Calculator, Beaker, History, Palette, Book, Laptop, Languages } from 'lucide-react';
import Geography from './components/Geography';
import Mathematics from './components/Mathematics';
import Science from './components/Science';
import English from './components/English';
import Computing from './components/Computing';
import MFL from './components/MFL';
import ComingSoon from './components/ComingSoon';

function App() {
  const [activeTab, setActiveTab] = useState('geography');

  const tabs = [
    { id: 'geography', name: 'Geography', icon: Globe, color: 'from-blue-500 to-purple-600' },
    { id: 'math', name: 'Mathematics', icon: Calculator, color: 'from-green-500 to-teal-600' },
    { id: 'science', name: 'Science', icon: Beaker, color: 'from-orange-500 to-red-600' },
    { id: 'english', name: 'English', icon: Book, color: 'from-purple-500 to-indigo-600' },
    { id: 'computing', name: 'Computing', icon: Laptop, color: 'from-cyan-500 to-blue-600' },
    { id: 'mfl', name: 'MFL', icon: Languages, color: 'from-orange-400 to-amber-500' },
    { id: 'history', name: 'History', icon: History, color: 'from-amber-500 to-yellow-600' },
    { id: 'art', name: 'Art', icon: Palette, color: 'from-pink-500 to-rose-600' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'geography':
        return <Geography />;
      case 'math':
        return <Mathematics />;
      case 'science':
        return <Science />;
      case 'english':
        return <English />;
      case 'computing':
        return <Computing />;
      case 'mfl':
        return <MFL />;
      case 'history':
        return <ComingSoon subject="History" icon="📚" />;
      case 'art':
        return <ComingSoon subject="Art" icon="🎨" />;
      default:
        return <Geography />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl relative overflow-hidden">
        {/* Fun Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-6xl animate-bounce">⭐</div>
          <div className="absolute top-8 right-20 text-5xl animate-pulse">🚀</div>
          <div className="absolute bottom-4 left-1/4 text-4xl animate-bounce delay-100">✨</div>
          <div className="absolute bottom-8 right-1/3 text-5xl animate-pulse delay-200">🎨</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full animate-bounce">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              My Awesome School Projects! 🎓
            </h1>
          </div>
          <p className="text-white/95 text-base md:text-lg text-center font-semibold">
            ✨ Click on any subject below to explore my work! ✨
          </p>
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-current text-white/10">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-xl sticky top-0 z-40 border-b-4 border-purple-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-3 py-5 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-2xl font-bold transition-all whitespace-nowrap text-sm md:text-base transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl scale-110 ring-4 ring-yellow-300`
                      : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span>{tab.name}</span>
                  {activeTab === tab.id && <span className="animate-bounce">✨</span>}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main>
        {renderContent()}
      </main>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default App;

