const BmiHistory = ({ records, onDelete, loading }) => {

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Underweight': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'Normal':      return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Overweight':  return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Obese':       return 'text-red-400 bg-red-500/10 border-red-500/30';
      default:            return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  if (!records || records.length === 0) {
    return (
      <div className="glass-card p-8 animate-fade-in-up text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border-2 border-dashed 
                       border-white/20 flex items-center justify-center mb-4">
          <span className="text-2xl">📋</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-300 mb-2">No Records Yet</h3>
        <p className="text-gray-500">Calculate your BMI to start tracking your health journey</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 animate-fade-in-up overflow-hidden">
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 
                     bg-clip-text text-transparent">
        BMI History
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Weight
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                BMI
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr
                key={record.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="py-3 px-4 text-sm text-gray-300">
                  {new Date(record.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric'
                  })}
                </td>

                <td className="py-3 px-4 text-sm text-white font-medium">
                  {record.weightKg} kg
                </td>

                <td className="py-3 px-4 text-sm text-white font-bold">
                  {record.bmiValue}
                </td>

                <td className="py-3 px-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border
                                  ${getCategoryColor(record.category)}`}>
                    {record.category}
                  </span>
                </td>

                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => onDelete(record.id)}
                    disabled={loading}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 
                             px-3 py-1 rounded-lg text-sm transition-all duration-200 
                             disabled:opacity-50"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BmiHistory;
