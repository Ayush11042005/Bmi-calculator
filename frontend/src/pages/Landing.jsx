import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, TrendingUp, Shield } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="z-10 text-center max-w-4xl">
                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md animate-float">
                        <Activity className="w-16 h-16 text-indigo-400" />
                    </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Know Your Body.<br />Own Your Health.
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Instantly calculate your BMI, uncover your BMR, compare your metrics to detailed charts for all age groups, and track your history completely securely on your own device.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button 
                        onClick={() => {
                            localStorage.removeItem('bmi_calc_formCache');
                            window.location.href = '/calculator?fresh=true';
                        }}
                        className="glass-panel px-10 py-5 rounded-xl text-lg font-bold hover:bg-indigo-500/20 transition-all border border-indigo-500/30 hover:scale-105 active:scale-95 shadow-xl text-indigo-300"
                    >
                        Get Started →
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                    <div className="glass-card p-6 border border-white/10 group hover:border-indigo-500/50 transition-colors">
                        <TrendingUp className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                        <p className="text-gray-400 text-sm">Review your historical body composition changes with interactive visual timelines.</p>
                    </div>
                    <div className="glass-card p-6 border border-white/10 group hover:border-purple-500/50 transition-colors">
                        <Activity className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Advanced Metrics</h3>
                        <p className="text-gray-400 text-sm">Go beyond BMI. We calculate your TDEE and BMR directly matching your lifestyle.</p>
                    </div>
                    <div className="glass-card p-6 border border-white/10 group hover:border-blue-500/50 transition-colors">
                        <Shield className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Frictionless</h3>
                        <p className="text-gray-400 text-sm">No account needed. Your settings are instantly saved locally so you can calculate faster.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
