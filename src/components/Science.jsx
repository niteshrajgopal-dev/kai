import React from 'react';
import { Lightbulb, Zap, CheckCircle, Cpu, Volume2, Radio } from 'lucide-react';

export default function Science() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-3">
            <Lightbulb className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Design a Gadget</h1>
          <p className="text-lg md:text-xl opacity-90">Angle Ace: Tennis Performance Technology</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-8">
        
        {/* Problem Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-800">The Problem</h2>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-4">
            <p className="text-lg text-gray-800 mb-3">
              <strong className="text-orange-700">Question:</strong> When hitting a tennis ball, what is the single most important thing that, if done correctly, makes a powerful and accurate shot?
            </p>
            <p className="text-2xl font-bold text-orange-800">
              💡 The angle of the wrist/racket face.
            </p>
          </div>

          <p className="text-lg text-gray-700">
            <strong>"Angle Ace"</strong> is designed to solve this clear problem: <span className="text-orange-600 font-semibold">improving shot accuracy</span>.
          </p>
        </div>

        {/* Solution Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">The Solution</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                <Cpu className="w-6 h-6" /> Hardware
              </h3>
              <p className="text-gray-700">
                Since the main goal is measuring the angle, it needs a <strong>sensor</strong> (like a gyroscope or accelerometer) attached to the racket.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Radio className="w-6 h-6" /> Sensor Location
              </h3>
              <p className="text-gray-700">
                Attaching the small sensor unit to the <strong>throat of the racket</strong> (the 'V' section) means it will be stable enough to get an accurate reading without being constantly jarred by hitting the ball.
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200">
              <h3 className="text-xl font-bold text-pink-800 mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6" /> Function
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Measures the angle of the racket face at impact.</strong>
              </p>
              
              <h4 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
                <Volume2 className="w-5 h-5" /> Feedback Mechanism
              </h4>
              <p className="text-gray-700">
                The device provides instant, <strong>spoken feedback</strong> (e.g., a small speaker says, "Too Open!" or "Perfect!"). Audio Coaching allows you to focus on the ball, which is crucial for a high-speed sport like tennis.
              </p>
            </div>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Angle Ace Device</h2>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
            <img 
              src="/angle-ace.jpeg" 
              alt="Angle Ace Tennis Gadget"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div 
              className="hidden w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 items-center justify-center flex-col gap-4"
            >
              <Cpu className="w-16 h-16 text-gray-400" />
              <p className="text-gray-500 font-semibold">Device image will appear here</p>
              <p className="text-sm text-gray-400">Save your device image as 'angle-ace.jpeg' in the public folder</p>
            </div>
          </div>
        </div>

        {/* Design Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Design Features</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Sleek Black Sensor Unit</h3>
                  <p className="text-sm text-gray-700">Compact rectangular design with smooth, curved edges for an ergonomic fit</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-900 mb-1">Circular Speaker Grill</h3>
                  <p className="text-sm text-gray-700">Prominent audio output feature for coaching feedback</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-5 border-l-4 border-cyan-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-cyan-900 mb-1">Glowing Blue LED</h3>
                  <p className="text-sm text-gray-700">Activity indicator light for power and operational status</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-orange-900 mb-1">Throat Mount Position</h3>
                  <p className="text-sm text-gray-700">Securely attached to the V-section of the racket without interfering with play</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-5 border-l-4 border-pink-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-pink-900 mb-1">Minimalist High-Tech Aesthetic</h3>
                  <p className="text-sm text-gray-700">Premium matte black finish with modern, professional look</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-900 mb-1">Studio Quality</h3>
                  <p className="text-sm text-gray-700">Professional lighting with clean white background, perfect for product presentations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-800">Demo Video</h2>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <video 
              className="w-full h-auto"
              controls
              poster="/angle-ace.jpeg"
            >
              <source src="/angle-ace-demo.mp4" type="video/mp4" />
              <source src="/angle-ace-demo.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-600">
              <strong className="text-purple-800">💡 Tip:</strong> To add your demo video, save it as <code className="bg-purple-100 px-2 py-1 rounded">angle-ace-demo.mp4</code> in the <code className="bg-purple-100 px-2 py-1 rounded">public</code> folder.
            </p>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">🎾 The Perfect Training Tool</h3>
          <p className="text-xl opacity-95 mb-4">
            The design successfully combines <strong>functionality with sleek aesthetics</strong>, making it look like a premium tennis tech accessory.
          </p>
          <p className="text-lg opacity-90">
            The sensor appears secure yet unobtrusive, ideal for real-world use during training sessions!
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Zap className="w-6 h-6" />
            <span className="font-semibold">Improving Tennis Performance Through Technology</span>
          </div>
        </div>

      </div>
    </div>
  );
}

