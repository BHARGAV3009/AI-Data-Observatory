import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Button from '../components/common/Button';
import application_icon from '../assets/application_icon.png';
import { IoBarChartOutline, IoTrendingUpOutline, IoBulbOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';

const Intro = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Smart Data Monitoring',
      description: 'Continuous surveillance of your data assets with automated quality checks.',
      icon: <IoShieldCheckmarkOutline className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: 'AI Analytics',
      description: 'Deep dive into your data using advanced machine learning algorithms.',
      icon: <IoBarChartOutline className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: 'Forecasting',
      description: 'Predict future trends and outcomes with high accuracy models.',
      icon: <IoTrendingUpOutline className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: 'Business Intelligence',
      description: 'Transform complex data into actionable insights for decision making.',
      icon: <IoBulbOutline className="w-8 h-8 text-[var(--color-primary)]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full">
          <div className="flex items-center justify-center mb-4">
            <div className="w-25 h-25 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <img src={application_icon} alt="App Icon" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-text-main)] tracking-tight mb-4">
            AI Data Observatory
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-8 font-medium">
            Enterprise Data Intelligence Platform
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-12 max-w-2xl mx-auto">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 font-medium text-sm md:text-base">Monitor</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 font-medium text-sm md:text-base">Analyze</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 font-medium text-sm md:text-base">Predict</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 font-medium text-sm md:text-base">Recommend</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={() => navigate(ROUTES.LOGIN)}
              className="w-full sm:w-auto px-8"
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => navigate(ROUTES.LOGIN)}
              className="w-full sm:w-auto px-8"
            >
              Login
            </Button>
          </div>
          
          {/* Hero Illustration Placeholder */}
          <div className="mt-20 relative rounded-2xl bg-white shadow-2xl p-2 border border-gray-100 overflow-hidden aspect-video flex items-center justify-center max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 opacity-50"></div>
            <p className="text-gray-400 font-medium z-10">Hero Dashboard Illustration Placeholder</p>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-text-main)] mb-4">Platform Features</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to turn raw data into strategic advantage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[var(--color-background)] p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Data Observatory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Intro;
