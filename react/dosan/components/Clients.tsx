import React from 'react';

// Using text placeholders for logos as per image restrictions, styled to look like white logos
const clients = [
  'LANCOME', 'DIOR', 'dyson', 'Continental', 'MAHLE', 'HYUNDAI', 'TOYOTA', 'SAMSUNG C&T', 'LG Electronics'
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="relative py-24 bg-black overflow-hidden">
      {/* Background Globe Effect */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute -bottom-[50%] left-1/2 transform -translate-x-1/2 w-[120%] h-[120%] rounded-t-full bg-gradient-to-t from-blue-900 to-transparent blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Earth"
          className="absolute -bottom-20 left-0 w-full h-full object-cover object-top opacity-20 mix-blend-screen mask-image-gradient"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            전 세계 50개국 리딩 기업들이<br />
            두산 로봇 도입으로 생산성을 높이고,<br />
            비용을 절감했습니다.
          </h2>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, idx) => (
            <span key={idx} className="text-white text-xl md:text-2xl font-serif font-bold tracking-widest hover:text-blue-300 cursor-default transition-colors">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;