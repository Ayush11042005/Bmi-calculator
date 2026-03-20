import { Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg group-hover:scale-105 transition-transform">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                BMI Calc
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            <Link
              to="/calculator"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${location.pathname === '/calculator' 
                  ? 'bg-white/15 text-white shadow-inner' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              🚀 Calculator
            </Link>
            <Link
              to="/history"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${location.pathname === '/history' 
                  ? 'bg-white/15 text-white shadow-inner' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              History
            </Link>
            <Link
              to="/info"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${location.pathname === '/info' 
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-inner' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
            >
              📖 BMI Info
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
