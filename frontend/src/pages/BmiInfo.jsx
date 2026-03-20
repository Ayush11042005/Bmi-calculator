import React from 'react';
import { BookOpen, Calculator, Info } from 'lucide-react';

const BmiInfo = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in-up pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <BookOpen className="text-indigo-400" />
          Health Analytics Library
        </h1>
        <p className="text-gray-400 mt-2">Everything you need to know about the science behind our calculations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="glass-card p-8 border border-white/10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calculator className="text-purple-400 w-6 h-6" /> The Mathematics
            </h2>
            <p className="text-gray-300 mb-6">
                Body Mass Index (BMI) evaluates body weight relative to height. We natively support both standard formulas based on your selected unit system:
            </p>
            
            <div className="space-y-4">
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                    <h3 className="text-indigo-300 font-bold mb-2">Metric Formula</h3>
                    <code className="text-lg bg-black/30 px-3 py-1 rounded text-white font-mono break-all">
                        BMI = weight (kg) / [height (m)]²
                    </code>
                </div>
                
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <h3 className="text-emerald-300 font-bold mb-2">Imperial Formula</h3>
                    <code className="text-lg bg-black/30 px-3 py-1 rounded text-white font-mono break-all">
                        BMI = 703 × weight (lbs) / [height (in)]²
                    </code>
                </div>
            </div>
        </div>

        <div className="glass-card p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Adult Classifications</h2>
            <p className="text-sm text-gray-400 mb-4">Standard World Health Organization (WHO) categories for individuals aged 20 and older.</p>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="text-gray-400 bg-white/5 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3 rounded-tl-lg">Classification</th>
                            <th className="px-4 py-3 rounded-tr-lg">BMI Range</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-blue-300">Underweight</td><td className="px-4 py-3 font-mono">&lt; 18.5</td></tr>
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-emerald-300 font-bold">Healthy Weight</td><td className="px-4 py-3 font-mono">18.5 - 24.9</td></tr>
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-orange-300">Overweight</td><td className="px-4 py-3 font-mono">25.0 - 29.9</td></tr>
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-red-400">Obesity Class I</td><td className="px-4 py-3 font-mono">30.0 - 34.9</td></tr>
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-red-500">Obesity Class II</td><td className="px-4 py-3 font-mono">35.0 - 39.9</td></tr>
                        <tr className="hover:bg-white/5"><td className="px-4 py-3 text-red-600 font-bold">Obesity Class III</td><td className="px-4 py-3 font-mono">≥ 40.0</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="glass-card p-8 border border-white/10 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="text-blue-400" /> Children & Teens (Ages 2-19) Percentiles
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
                Because children's body compositions change dynamically as they grow, BMI calculations are mapped against age-and-gender-specific growth percentiles established by the CDC. Instead of raw thresholds, a child's relative standing is evaluated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl border-l-4 border-l-blue-400">
                    <div className="text-2xl font-black text-white mb-1">&lt; 5th</div>
                    <div className="text-blue-300 font-semibold mb-2">Percentile</div>
                    <div className="text-xs text-gray-400">Considered <strong>Underweight</strong> relative to peers matching age and sex.</div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl border-l-4 border-l-emerald-400">
                    <div className="text-2xl font-black text-white mb-1">5th - 85th</div>
                    <div className="text-emerald-300 font-semibold mb-2">Percentile</div>
                    <div className="text-xs text-gray-400">Considered a <strong>Healthy Weight</strong> indicating stable growth trajectory.</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl border-l-4 border-l-orange-400">
                    <div className="text-2xl font-black text-white mb-1">85th - 95th</div>
                    <div className="text-orange-300 font-semibold mb-2">Percentile</div>
                    <div className="text-xs text-gray-400">Considered <strong>At Risk / Overweight</strong> relative to developmental peers.</div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl border-l-4 border-l-red-500">
                    <div className="text-2xl font-black text-white mb-1">&gt; 95th</div>
                    <div className="text-red-400 font-semibold mb-2">Percentile</div>
                    <div className="text-xs text-gray-400">Considered <strong>Obese</strong> indicating high risk for weight-related clinical anomalies.</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BmiInfo;
