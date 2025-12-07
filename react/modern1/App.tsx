import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ArrowRight, Code, Palette, Smartphone, BarChart, Send, CheckCircle, Globe, Layers } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

// Mock Data
const services: ServiceItem[] = [
  {
    title: 'Web Design',
    description: 'Create stunning, user-friendly designs that captivate your audience and enhance brand identity.',
    icon: <Palette className="w-10 h-10 text-blue-500" />,
  },
  {
    title: 'Development',
    description: 'Build robust, scalable websites and web applications using the latest technologies and frameworks.',
    icon: <Code className="w-10 h-10 text-blue-500" />,
  },
  {
    title: 'Mobile Apps',
    description: 'Reach customers on the go with responsive mobile applications for iOS and Android platforms.',
    icon: <Smartphone className="w-10 h-10 text-blue-500" />,
  },
  {
    title: 'Digital Marketing',
    description: 'Drive traffic and convert leads with data-driven digital marketing strategies and SEO.',
    icon: <BarChart className="w-10 h-10 text-blue-500" />,
  },
];

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Project Alpha', category: 'Web App', imageUrl: 'https://picsum.photos/seed/101/600/400' },
  { id: 2, title: 'Studio Lens', category: 'Photography', imageUrl: 'https://picsum.photos/seed/102/600/400' },
  { id: 3, title: 'Eco Market', category: 'E-commerce', imageUrl: 'https://picsum.photos/seed/103/600/400' },
  { id: 4, title: 'Tech Blog', category: 'Content', imageUrl: 'https://picsum.photos/seed/104/600/400' },
  { id: 5, title: 'Fitness Tracker', category: 'Mobile App', imageUrl: 'https://picsum.photos/seed/105/600/400' },
  { id: 6, title: 'Finance Dash', category: 'UI Design', imageUrl: 'https://picsum.photos/seed/106/600/400' },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900">
      <Header />

      <main className="flex-grow">
        {/* --- HOME (HERO) SECTION --- */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://picsum.photos/seed/hero/1920/1080" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-0"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future</span><br />
              of the Web
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We provide creative solutions to turn your ideas into digital reality. 
              Modern design, cutting-edge technology, and passion for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#service" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/about/800/600" alt="About Us" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">About Us</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We Are Creative Agency</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Founded in 2024, ModernWeb has been at the forefront of digital innovation. We believe that great design is not just about how things look, but how they work. Our team of passionate developers and designers work together to build exceptional digital experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Innovative Solutions</h5>
                      <p className="text-sm text-slate-500">Always staying ahead of the curve with latest tech.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-slate-900">Client Centric</h5>
                      <p className="text-sm text-slate-500">Your success is our top priority.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    <div>
                      <h5 className="font-semibold text-slate-900">24/7 Support</h5>
                      <p className="text-sm text-slate-500">Always here when you need us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICE SECTION --- */}
        <section id="service" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Our Services</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What We Do</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                  <div className="mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { 
                      className: `w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300` 
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO SECTION --- */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Portfolio</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Recent Work</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-blue-400 text-sm font-medium mb-1">{item.category}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-colors duration-300">
                Load More Projects
              </button>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-blue-600 text-white">
                  <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
                  <p className="mb-8 text-blue-100">
                    We're ready to answer your questions and help you find the right solution for your business needs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <Globe className="w-5 h-5" />
                      </div>
                      <span>www.modernweb.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                        <Layers className="w-5 h-5" />
                      </div>
                      <span>Available for new projects</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                      <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="button" className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;