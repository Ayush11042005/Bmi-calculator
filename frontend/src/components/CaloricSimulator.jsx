import React from 'react';

const CaloricSimulator = ({ tdee }) => {
  if (!tdee) return null;

  const goals = [
    {
      title: 'Lose Weight (-0.5kg/wk)',
      calories: Math.round(tdee - 500),
      color: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
      description: 'A sustainable deficit for healthy weight loss.',
    },
    {
      title: 'Maintain Weight',
      calories: Math.round(tdee),
      color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
      description: 'Your exact Total Daily Energy Expenditure (TDEE).',
    },
    {
      title: 'Build Muscle (+0.25kg/wk)',
      calories: Math.round(tdee + 250),
      color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
      description: 'A slight surplus to support muscle hypertrophy.',
    }
  ];

  return (
    <div className="glass-card p-6 border border-white/10 w-full mb-8 animate-fade-in-up">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
        Caloric Goal Simulator
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal, idx) => (
          <div key={idx} className={`p-6 rounded-xl border ${goal.color} flex flex-col justify-between hover-lift`}>
            <div>
              <h4 className="font-semibold mb-2">{goal.title}</h4>
              <p className="text-sm opacity-80 mb-4">{goal.description}</p>
            </div>
            <div className="text-3xl font-bold">
              {goal.calories} <span className="text-sm font-normal opacity-70">kcal/day</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaloricSimulator;
