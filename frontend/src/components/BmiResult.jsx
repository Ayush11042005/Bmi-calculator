const BmiResult = ({ result }) => {
  if (!result) {
    return (
      <div className="glass-card p-8 animate-fade-in-up hover-lift flex flex-col items-center 
                     justify-center min-h-[280px]">
        <div className="w-24 h-24 rounded-full bg-white/5 border-2 border-dashed border-white/20 
                       flex items-center justify-center mb-4">
          <span className="text-3xl">📊</span>
        </div>
        <p className="text-gray-400 text-center">
          Enter your weight and click "Calculate BMI" to see your results
        </p>
      </div>
    );
  }

  const getCategoryConfig = (category) => {
    switch (category) {
      case 'Underweight':
        return {
          color: 'from-blue-400 to-blue-600',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          text: 'text-blue-300',
          ring: 'ring-blue-500/30',
          emoji: '❄️',
          advice: 'Consider gaining some weight for better health',
        };
      case 'Normal':
        return {
          color: 'from-emerald-400 to-green-600',
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-300',
          ring: 'ring-emerald-500/30',
          emoji: '✅',
          advice: 'Great job! You have a healthy weight',
        };
      case 'Overweight':
        return {
          color: 'from-amber-400 to-yellow-600',
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-300',
          ring: 'ring-amber-500/30',
          emoji: '⚠️',
          advice: 'Consider moderate exercise and a balanced diet',
        };
      case 'Obese':
        return {
          color: 'from-red-400 to-red-600',
          bg: 'bg-red-500/10',
          border: 'border-red-500/30',
          text: 'text-red-300',
          ring: 'ring-red-500/30',
          emoji: '🔴',
          advice: 'Please consult a healthcare professional',
        };
      default:
        return {
          color: 'from-gray-400 to-gray-600',
          bg: 'bg-gray-500/10',
          border: 'border-gray-500/30',
          text: 'text-gray-300',
          ring: 'ring-gray-500/30',
          emoji: '📊',
          advice: '',
        };
    }
  };

  const config = getCategoryConfig(result.category);

  return (
    <div className="glass-card p-8 animate-fade-in-up hover-lift">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 
                     bg-clip-text text-transparent">
        Your BMI Result
      </h2>

      <div className="flex flex-col items-center">
        <div className={`w-36 h-36 rounded-full bg-gradient-to-br ${config.color} 
                       flex items-center justify-center shadow-2xl animate-pulse-glow mb-6`}>
          <div className="text-center">
            <span className="text-4xl font-bold text-white">{result.bmiValue}</span>
          </div>
        </div>

        <div className={`${config.bg} ${config.border} border rounded-full px-6 py-2 mb-4`}>
          <span className={`${config.text} font-semibold text-lg`}>
            {config.emoji} {result.category}
          </span>
        </div>

        <p className="text-gray-400 text-center text-sm mt-2">{config.advice}</p>

        <div className="w-full mt-6 space-y-3">
          {result.age && (
            <div className="flex justify-between items-center px-4 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg shadow-inner mb-4">
              <span className="text-indigo-300 text-sm font-semibold">Analyzed Profile</span>
              <span className="text-white font-medium text-sm">
                  {result.gender}, {result.age} yrs • {result.heightCm} cm
                  {result.activityLevel ? ` • ${result.activityLevel}` : ''}
              </span>
            </div>
          )}
          <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg">
            <span className="text-gray-400 text-sm">Weight Input</span>
            <span className="text-white font-medium">{result.weightKg} kg</span>
          </div>
          {result.bmr && (
            <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg">
              <span className="text-gray-400 text-sm">Basal Metabolic Rate</span>
              <span className="text-white font-medium">{result.bmr} kcal</span>
            </div>
          )}
          {result.tdee && (
            <div className="flex justify-between items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
              <span className="text-indigo-300 text-sm font-semibold">Maintenance Calories (TDEE)</span>
              <span className="text-white font-bold">{result.tdee} kcal</span>
            </div>
          )}
          <div className="flex justify-between items-center px-4 py-2 bg-white/5 rounded-lg">
            <span className="text-gray-400 text-sm">Date</span>
            <span className="text-white font-medium">{result.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiResult;
