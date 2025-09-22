const BookLoader = ({ message = "Loading your knowledge..." }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Books Container */}
        <div className="relative mb-8">
          {/* Background Books */}
          <div className="absolute inset-0 flex justify-center items-end space-x-2 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-sm transform rotate-${i * 2} animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  height: `${60 + i * 8}px`
                }}
              />
            ))}
          </div>
          
          {/* Main Animated Book Stack */}
          <div className="relative z-10 flex justify-center items-end space-x-1">
            {/* Book 1 */}
            <div className="relative">
              <div className="w-12 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg shadow-lg transform origin-bottom animate-bounce">
                <div className="absolute top-2 left-1 right-1 h-1 bg-emerald-300 rounded opacity-60"></div>
                <div className="absolute top-4 left-1 right-1 h-0.5 bg-emerald-300 rounded opacity-40"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-emerald-700 rounded"></div>
              </div>
              {/* Floating Pages */}
              <div className="absolute -top-2 -right-1 w-3 h-4 bg-white rounded-sm shadow animate-ping opacity-75"></div>
            </div>
            
            {/* Book 2 - Main Focus */}
            <div className="relative transform scale-125">
              <div className="w-12 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-xl animate-pulse">
                <div className="absolute top-2 left-1 right-1 h-1 bg-purple-300 rounded opacity-60"></div>
                <div className="absolute top-4 left-1 right-1 h-0.5 bg-purple-300 rounded opacity-40"></div>
                <div className="absolute top-6 left-1 right-1 h-0.5 bg-purple-300 rounded opacity-40"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-purple-700 rounded"></div>
                
                {/* Book spine highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 rounded-l-lg opacity-80"></div>
              </div>
              
              {/* Animated Pages */}
              <div className="absolute -top-3 -right-2 w-4 h-5 bg-white rounded-sm shadow-md animate-bounce opacity-90" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute -top-4 -right-3 w-4 h-5 bg-white rounded-sm shadow-lg animate-bounce opacity-70" style={{ animationDelay: '0.3s' }}></div>
            </div>
            
            {/* Book 3 */}
            <div className="relative">
              <div className="w-12 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg shadow-lg transform origin-bottom animate-bounce" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-2 left-1 right-1 h-1 bg-amber-300 rounded opacity-60"></div>
                <div className="absolute top-4 left-1 right-1 h-0.5 bg-amber-300 rounded opacity-40"></div>
                <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-amber-700 rounded"></div>
              </div>
              {/* Floating Pages */}
              <div className="absolute -top-2 -left-1 w-3 h-4 bg-white rounded-sm shadow animate-ping opacity-75" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          {/* Magical Sparkles */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-80" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">
            {message}
          </h3>
          <p 
            className="text-gray-600"
            style={{
              animation: 'fadeIn 2s ease-in-out infinite alternate',
            }}
          >
            Gathering wisdom from our collection...
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full origin-left"
            style={{
              animation: 'loadingBar 2s ease-in-out infinite',
            }}
          ></div>
        </div>
        
        {/* Floating Knowledge Icons */}
        <div 
          className="absolute top-1/4 left-1/4 opacity-30"
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            📚
          </div>
        </div>
        <div 
          className="absolute top-1/3 right-1/4 opacity-30" 
          style={{ 
            animation: 'float 3s ease-in-out infinite',
            animationDelay: '1s' 
          }}
        >
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
            💡
          </div>
        </div>
        <div 
          className="absolute bottom-1/3 left-1/3 opacity-30" 
          style={{ 
            animation: 'float 3s ease-in-out infinite',
            animationDelay: '2s' 
          }}
        >
          <div className="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
            🔍
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style>
        {`
          @keyframes loadingBar {
            0% { transform: scaleX(0); }
            50% { transform: scaleX(0.7); }
            100% { transform: scaleX(1); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};


export default BookLoader;