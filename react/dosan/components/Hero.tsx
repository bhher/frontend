import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop")',
        }}
      >
         {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b3d]/90 to-[#002e6d]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          AI-Powered Robot Solutions<br /> for a Better Life
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light">
          Innovation in every motion, revolutionizing the way we work
        </p>
        
        <button className="group border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#002e6d] transition-all duration-300 flex items-center gap-2 mx-auto">
          두산 로봇과 함께 상상을 실현해 보세요
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;