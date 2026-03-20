import React, { useState, useEffect } from 'react';

const BmiForm = ({ onCalculate, loading }) => {
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  
  const [formData, setFormData] = useState({
    age: '',
    gender: 'Male',
    activityLevel: 'Sedentary',
    weight: '',
    heightCm: '', // For metric
    heightFt: '5', // For imperial
    heightIn: '0', // For imperial
  });

  useEffect(() => {
    const saved = localStorage.getItem('bmi_calc_formCache');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.unit) setUnit(parsed.unit);
      setFormData(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let weightKg = parseFloat(formData.weight);
    let heightCm = parseFloat(formData.heightCm);

    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592;
      const ft = parseFloat(formData.heightFt || 0);
      const inches = parseFloat(formData.heightIn || 0);
      heightCm = (ft * 30.48) + (inches * 2.54);
    }

    if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return;

    localStorage.setItem('bmi_calc_formCache', JSON.stringify({
      age: formData.age,
      gender: formData.gender,
      activityLevel: formData.activityLevel,
      weight: formData.weight,
      unit: unit,
      heightCm: unit === 'metric' ? formData.heightCm : '',
      heightFt: unit === 'imperial' ? formData.heightFt : '5',
      heightIn: unit === 'imperial' ? formData.heightIn : '0',
    }));

    onCalculate({
      weightKg: Math.round(weightKg * 10) / 10,
      heightCm: Math.round(heightCm * 10) / 10,
      age: parseInt(formData.age || 25),
      gender: formData.gender,
      activityLevel: formData.activityLevel
    });
  };

  return (
    <div className="glass-card p-8 animate-fade-in-up border border-white/10 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Analyzer Configuration</h2>
          <p className="text-gray-400 text-sm">Fill your specifications below. Results are generated instantaneously.</p>
        </div>
        
        <div className="flex bg-black/40 p-1 rounded-lg border border-white/10 shrink-0">
            <button 
                type="button"
                onClick={() => setUnit('metric')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${unit === 'metric' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                Metric (kg/cm)
            </button>
            <button 
                type="button"
                onClick={() => setUnit('imperial')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${unit === 'imperial' ? 'bg-indigo-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                Imperial (lbs/ft)
            </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Age</label>
              <input
                type="number" name="age" min="2" max="120" required
                className="input-field w-full"
                placeholder="Years"
                value={formData.age} onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Gender</label>
              <select name="gender" className="select-field w-full" required value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-white/5 rounded-xl border border-white/5">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Weight</label>
              <div className="relative">
                <input
                  type="number" name="weight" step="0.1" min="1" required
                  className="input-field w-full pl-12 text-lg"
                  placeholder={unit === 'metric' ? "e.g. 70" : "e.g. 155"}
                  value={formData.weight} onChange={handleChange}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  {unit === 'metric' ? 'kg' : 'lbs'}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">Height</label>
              {unit === 'metric' ? (
                <div className="relative">
                    <input
                    type="number" name="heightCm" step="0.1" min="50" max="300" required
                    className="input-field w-full pl-12 text-lg"
                    placeholder="e.g. 175"
                    value={formData.heightCm} onChange={handleChange}
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">cm</span>
                </div>
              ) : (
                <div className="flex gap-4">
                    <div className="relative w-1/2">
                        <input
                        type="number" name="heightFt" min="1" max="8" required
                        className="input-field w-full pl-10 text-lg"
                        value={formData.heightFt} onChange={handleChange}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">ft</span>
                    </div>
                    <div className="relative w-1/2">
                        <input
                        type="number" name="heightIn" min="0" max="11" required
                        className="input-field w-full pl-10 text-lg"
                        value={formData.heightIn} onChange={handleChange}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">in</span>
                    </div>
                </div>
              )}
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5 flex items-center gap-2">
                Activity Level <span className="text-xs text-indigo-400 font-normal">(Crucial for BMR/TDEE forecasting)</span>
            </label>
            <select name="activityLevel" className="select-field w-full" required value={formData.activityLevel} onChange={handleChange}>
                <option value="Sedentary">Sedentary (Little/No exercise)</option>
                <option value="Light">Lightly Active (1-3 days/wk)</option>
                <option value="Moderate">Moderately Active (3-5 days/wk)</option>
                <option value="Active">Very Active (6-7 days/wk)</option>
                <option value="Very Active">Extra Active (Labor/Athletics)</option>
            </select>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg mt-6 shadow-xl shadow-indigo-500/20">
          {loading ? 'Processing Equations...' : 'Calculate Health Metrics'}
        </button>
      </form>
    </div>
  );
};

export default BmiForm;
