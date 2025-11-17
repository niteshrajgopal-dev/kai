import React from 'react';
import { BookOpen, Heart, Brain, Lightbulb, Shield, Eye } from 'lucide-react';

export default function English() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 relative overflow-hidden">
      {/* FNAF Watermark Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23ffffff' opacity='0.3' text-anchor='middle' dominant-baseline='middle' transform='rotate(-45 100 100)'%3EFNAF%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }} />
      </div>

      {/* Animated Shadow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-gray-900/40 pointer-events-none" />

      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white py-12 px-6 shadow-2xl border-b-4 border-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3 animate-pulse">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-shadow-lg">My Favourite Book</h1>
          <p className="text-lg md:text-xl opacity-90">Five Nights at Freddy's</p>
          <div className="mt-4 flex justify-center items-center gap-4 text-yellow-300">
            <span className="text-2xl">🐻</span>
            <span className="text-2xl">🐰</span>
            <span className="text-2xl">🦊</span>
            <span className="text-2xl">🐤</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-8">
        
        {/* Main Essay Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-purple-200">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800 m-0">My Favourite Book</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My favourite book is <strong className="text-purple-700">Five Nights at Freddy's</strong>. It's based on the video game, and it's full of creepy animatronic animals that move around at night. The story is exciting, mysterious, and scary enough to make it fun. Every chapter makes me want to keep reading to find out what happens next.
              </p>
            </div>

            {/* Why I Love It */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-3 mb-4">
                <Heart className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-purple-800 m-0">Why I Love It</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed m-0">
                I love mystery stories where you have to guess what's going on, and this book has so many secrets. I also like robots and technology, so the idea of animatronics coming to life is really cool to me.
              </p>
            </div>

            {/* What It Says About Me */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border-l-4 border-indigo-600">
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-7 h-7 text-indigo-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-indigo-800 m-0">What It Says About Me</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                I think the book also shows a bit of my personality. I'm a curious person, and I like strange and unusual stories. The main character has to be brave, even when he is scared, and that inspires me. It reminds me that being brave doesn't mean you're not afraid—it means you keep going anyway.
              </p>
            </div>

            {/* Lessons Learned */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 mb-8 border-l-4 border-yellow-600">
              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-yellow-800 m-0">Important Lessons</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed m-0">
                The book also shows that hiding the truth can cause problems and that people should take responsibility for what they do. I believe honesty and courage are important, and the story shows that in a powerful way.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-7 h-7 text-pink-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-pink-800 m-0">Conclusion</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed m-0">
                Overall, <strong>Five Nights at Freddy's</strong> is my favourite book because it isn't just fun to read—it also connects to who I am. It reflects my interests in mystery and technology, my curiosity, and my belief in being brave and telling the truth.
              </p>
            </div>

          </div>
        </div>

        {/* Key Themes Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-800">Key Themes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-5 border-2 border-purple-400">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-bold text-purple-900 mb-2">Mystery</h3>
              <p className="text-sm text-gray-700">Uncovering secrets and solving puzzles throughout the story</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5 border-2 border-blue-400">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-bold text-blue-900 mb-2">Technology</h3>
              <p className="text-sm text-gray-700">Animatronics and robotics coming to life</p>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-5 border-2 border-red-400">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-bold text-red-900 mb-2">Courage</h3>
              <p className="text-sm text-gray-700">Being brave even when you're afraid</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-5 border-2 border-green-400">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-bold text-green-900 mb-2">Truth</h3>
              <p className="text-sm text-gray-700">The importance of honesty and responsibility</p>
            </div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl shadow-2xl p-8 text-center border-4 border-yellow-500">
          <div className="text-6xl mb-4">📖</div>
          <blockquote className="text-2xl font-bold italic mb-4">
            "Being brave doesn't mean you're not afraid—it means you keep going anyway."
          </blockquote>
          <p className="text-lg opacity-90">A lesson from Five Nights at Freddy's</p>
        </div>

      </div>

      {/* Footer with FNAF Theme */}
      <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-6 mt-12 border-t-4 border-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-base md:text-lg mb-2 flex items-center justify-center gap-3">
            <span className="text-2xl">🐻</span>
            <span>Five Nights at Freddy's</span>
            <span className="text-2xl">🐰</span>
          </p>
          <p className="text-xs md:text-sm text-gray-400">A story of mystery, courage, and truth</p>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}



