import React, { useEffect, useRef } from 'react';
import { Brain, CheckCircle, XCircle, AlertTriangle, Cpu } from 'lucide-react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Computing() {
  const studentUseChartRef = useRef(null);
  const ethicalUseChartRef = useRef(null);
  const unethicalUseChartRef = useRef(null);
  
  const studentUseChartInstance = useRef(null);
  const ethicalUseChartInstance = useRef(null);
  const unethicalUseChartInstance = useRef(null);

  useEffect(() => {
    // Helper function to wrap labels
    function wrapLabels(label, maxWidth) {
      const words = label.split(' ');
      let lines = [];
      let currentLine = '';
      for (const word of words) {
        if ((currentLine + word).length > maxWidth && currentLine.length > 0) {
          lines.push(currentLine.trim());
          currentLine = '';
        }
        currentLine += word + ' ';
      }
      if (currentLine.length > 0) {
        lines.push(currentLine.trim());
      }
      return lines.length > 0 ? lines : [label];
    }

    const tooltipTitleCallback = {
      plugins: {
        tooltip: {
          callbacks: {
            title: function(tooltipItems) {
              const item = tooltipItems[0];
              let label = item.chart.data.labels[item.dataIndex];
              if (Array.isArray(label)) {
                return label.join(' ');
              } else {
                return label;
              }
            }
          }
        }
      }
    };

    // Student Use Chart
    if (studentUseChartRef.current) {
      studentUseChartInstance.current = new Chart(studentUseChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Have Used GenAI', 'Have Not Used'],
          datasets: [{
            data: [75, 25],
            backgroundColor: ['#007BFF', '#66D2D6'],
            borderColor: '#FFFFFF',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          ...tooltipTitleCallback,
          plugins: {
            ...tooltipTitleCallback.plugins,
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }

    // Ethical Use Chart
    if (ethicalUseChartRef.current) {
      const ethicalLabelsInput = ['Brainstorming Ideas', 'Explaining Hard Concepts', 'Summarizing Long Texts', 'Checking Code or Grammar'];
      const ethicalLabels = ethicalLabelsInput.map(l => wrapLabels(l, 16));
      
      ethicalUseChartInstance.current = new Chart(ethicalUseChartRef.current, {
        type: 'bar',
        data: {
          labels: ethicalLabels,
          datasets: [{
            label: 'Helpfulness Rating (out of 100)',
            data: [90, 85, 70, 75],
            backgroundColor: ['#007BFF', '#66D2D6', '#007BFF', '#66D2D6'],
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          ...tooltipTitleCallback,
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          },
          plugins: {
            ...tooltipTitleCallback.plugins,
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Unethical Use Chart
    if (unethicalUseChartRef.current) {
      const unethicalLabelsInput = ['Writing Your Entire Essay', 'Copy-Pasting AI Answers', 'Faking Research or Data'];
      const unethicalLabels = unethicalLabelsInput.map(l => wrapLabels(l, 16));
      
      unethicalUseChartInstance.current = new Chart(unethicalUseChartRef.current, {
        type: 'bar',
        data: {
          labels: unethicalLabels,
          datasets: [{
            label: 'Academic Misconduct Risk (out of 100)',
            data: [95, 80, 100],
            backgroundColor: ['#FF6B00', '#FF6B00', '#FF6B00'],
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          ...tooltipTitleCallback,
          scales: {
            x: {
              beginAtZero: true,
              max: 100
            }
          },
          plugins: {
            ...tooltipTitleCallback.plugins,
            legend: {
              display: false
            }
          }
        }
      });
    }

    // Cleanup
    return () => {
      if (studentUseChartInstance.current) studentUseChartInstance.current.destroy();
      if (ethicalUseChartInstance.current) ethicalUseChartInstance.current.destroy();
      if (unethicalUseChartInstance.current) unethicalUseChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* Header */}
        <header className="text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 shadow-2xl border-4 border-blue-300">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold">The Power of AI 🤖</h1>
          </div>
          <p className="text-xl">A Student's Guide to Using AI Ethically and Effectively</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* New Tool Section */}
          <section className="md:col-span-1 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">A New Tool in Your Backpack 🎒</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Generative AI is a powerful new technology, like a calculator or the internet. The key is learning when and how to use it. This guide helps you understand the line between using AI as a helpful academic partner and using it in ways that are considered unethical or academic misconduct.
            </p>
          </section>

          {/* Student Use Chart */}
          <section className="md:col-span-1 bg-white rounded-2xl shadow-xl p-6 border-2 border-cyan-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Most Students Are Using AI 📊</h3>
            <p className="text-center mb-4 text-gray-700">
              You're not alone in exploring these tools. A recent (hypothetical) poll shows that the majority of students have experimented with Generative AI for their schoolwork. The important part is using it to enhance your learning, not replace it.
            </p>
            <div className="relative w-full max-w-md mx-auto" style={{ height: '300px' }}>
              <canvas ref={studentUseChartRef}></canvas>
            </div>
          </section>

          {/* Ethical Use Section */}
          <section className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-6 border-4 border-green-400">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
              <h2 className="text-3xl font-bold text-green-800">The "OK" Zone: Ethical AI Use ✅</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              Using AI is ethical when it acts as a "tutor" or "assistant" to help you learn, brainstorm, and refine your *own* original work. These tasks boost your understanding and efficiency without sacrificing your learning.
            </p>
            <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">Helpfulness of Ethical AI Tasks 📈</h3>
            <p className="text-center text-gray-600 mb-4">
              This chart shows how different ethical AI uses can be highly helpful for students. These methods support your learning process.
            </p>
            <div className="relative w-full max-w-2xl mx-auto" style={{ height: '350px' }}>
              <canvas ref={ethicalUseChartRef}></canvas>
            </div>
          </section>

          {/* Unethical Use Section */}
          <section className="md:col-span-2 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-6 border-4 border-orange-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <XCircle className="w-10 h-10 text-orange-600" />
              <h2 className="text-3xl font-bold text-orange-600">The "Unethical" Zone: Academic Misconduct ⚠️</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              Using AI becomes unethical when it does the thinking *for* you. If you are submitting work that is not your own, you are not learning and are likely committing academic misconduct. This can lead to serious consequences.
            </p>
            <h3 className="text-xl font-semibold text-orange-600 mb-4 text-center">Risk Level of Unethical AI Tasks 📊</h3>
            <p className="text-center text-gray-600 mb-4">
              These actions carry a high risk of being flagged as plagiarism or cheating. They bypass the learning process entirely and represent AI as your own work.
            </p>
            <div className="relative w-full max-w-2xl mx-auto" style={{ height: '350px' }}>
              <canvas ref={unethicalUseChartRef}></canvas>
            </div>
          </section>

          {/* Decision Flowchart */}
          <section className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6 border-2 border-indigo-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 text-indigo-600" />
              <h2 className="text-3xl font-bold text-indigo-900">How to Decide: A Quick Ethics Check 🤔</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Feeling unsure? Ask yourself these questions. This simple flowchart can guide your decision. Remember: when in doubt, ask your teacher!
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 border-4 border-blue-600 rounded-2xl p-4 text-center text-blue-900 shadow-lg w-full md:w-3/4">
                <h4 className="font-bold text-lg">START: I want to use AI for a task. 🚀</h4>
              </div>
              
              <div className="text-5xl text-blue-400">↓</div>
              
              <div className="bg-blue-100 border-4 border-blue-600 rounded-2xl p-4 text-center text-blue-900 shadow-lg w-full md:w-3/4">
                <h4 className="font-bold text-lg mb-2">Question 1: Am I using this to understand, brainstorm, or review?</h4>
                <p className="text-sm">(e.g., "Explain this concept," "Give me ideas," "Check my grammar")</p>
              </div>
              
              <div className="flex justify-around w-full md:w-3/4 mt-4 gap-4">
                <div className="flex flex-col items-center w-1/2">
                  <span className="text-lg font-bold text-green-600 mb-2">YES ✓</span>
                  <div className="text-5xl text-green-400">↓</div>
                  <div className="bg-green-100 border-4 border-green-600 rounded-2xl p-4 text-center text-green-900 shadow-lg w-full h-full mt-2">
                    <h4 className="font-bold text-lg mb-2">Ethical Use ✔</h4>
                    <p className="text-sm">This helps you learn. You are still doing the primary work.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center w-1/2">
                  <span className="text-lg font-bold text-orange-600 mb-2">NO ✗</span>
                  <div className="text-5xl text-orange-400">↓</div>
                </div>
              </div>
              
              <div className="bg-orange-100 border-4 border-orange-600 rounded-2xl p-4 text-center text-orange-900 shadow-lg w-full md:w-3/4 mt-4">
                <h4 className="font-bold text-lg mb-2">Question 2: Is the AI creating the final, graded part of my assignment?</h4>
                <p className="text-sm">(e.g., "Write this essay," "Give me the code," "What's the answer?")</p>
              </div>
              
              <div className="flex justify-around w-full md:w-3/4 mt-4 gap-4">
                <div className="flex flex-col items-center w-1/2">
                  <span className="text-lg font-bold text-orange-600 mb-2">YES ⚠️</span>
                  <div className="text-5xl text-orange-400">↓</div>
                  <div className="bg-orange-100 border-4 border-orange-600 rounded-2xl p-4 text-center text-orange-900 shadow-lg w-full h-full mt-2">
                    <h4 className="font-bold text-lg mb-2">Unethical Use ✖</h4>
                    <p className="text-sm">This is academic misconduct. The AI is doing the work, not you.</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center w-1/2">
                  <span className="text-lg font-bold text-gray-600 mb-2">NO</span>
                  <div className="text-5xl text-gray-400">↓</div>
                  <div className="bg-gray-100 border-4 border-gray-600 rounded-2xl p-4 text-center text-gray-900 shadow-lg w-full h-full mt-2">
                    <h4 className="font-bold text-lg mb-2">Grey Area 🤷</h4>
                    <p className="text-sm">Check your school's policy or ask your teacher.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rule Cards */}
          <section className="md:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-2xl p-8 border-4 border-blue-400">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              🛠️ Rule #1: AI is the TOOL
            </h2>
            <p className="text-lg mb-4">
              An AI is a powerful assistant. Use it to schedule, organize, summarize, and get new perspectives. Let it handle the busywork so you can focus on the big picture.
            </p>
            <p className="text-lg">
              <strong className="text-yellow-300">Your prompt is the key.</strong> Learning to ask good questions is a new and valuable skill.
            </p>
          </section>

          <section className="md:col-span-1 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white rounded-2xl shadow-2xl p-8 border-4 border-cyan-300">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              🧠 Rule #2: YOU are the THINKER
            </h2>
            <p className="text-lg mb-4">
              You are the one in class, you are the one learning, and you are the one who is ultimately responsible. Your original thoughts, critical analysis, and personal voice are what matter.
            </p>
            <p className="text-lg">
              <strong className="text-yellow-300">Never trust, always verify.</strong> AI can make mistakes. Your brain is the final editor.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}



