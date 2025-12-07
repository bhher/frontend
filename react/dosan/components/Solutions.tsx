import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section className="bg-gray-50 pt-20 pb-0">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-sm font-bold text-gray-500">Solutions</h2>
          <a href="#" className="text-sm text-gray-600 flex items-center gap-1 hover:text-blue-600 transition">
            전체 솔루션 보기 <ArrowRight size={14} />
          </a>
        </div>

        {/* Dr. Presso Block */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row mb-12">
          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-6 w-max">서비스용</span>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Dr.Presso</h3>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              탁월한 안전성과 편의성을 자랑하는 두산로보틱스의 국내 1위 협동로봇이 최고급 커피머신과 만나 전문 커피숍에 버금가는 양질의 서비스를 제공하며, 객관적인 인터페이스로 손쉬운 유지보수가 가능합니다.
            </p>
          </div>
          <div className="lg:w-1/2 bg-[#3e2b26] relative min-h-[400px]">
             <img 
               src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop" 
               alt="Dr. Presso Robot" 
               className="w-full h-full object-cover opacity-80 mix-blend-overlay"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Mockup of the kiosk from image */}
                <div className="bg-white p-4 rounded-xl shadow-2xl max-w-xs transform hover:scale-105 transition-transform duration-500">
                    <div className="bg-gray-100 h-40 rounded flex items-center justify-center mb-4">
                        <span className="text-gray-400 font-bold">ROBOT VIEW</span>
                    </div>
                    <h4 className="font-bold text-lg">DR. PRESSO</h4>
                    <p className="text-xs text-gray-500 mt-2">Perfect coffee solution.</p>
                </div>
             </div>
          </div>
        </div>
        
        {/* Palletizing Block */}
        <div className="flex flex-col lg:flex-row gap-6">
             <div className="lg:w-1/2 bg-white rounded-2xl p-12 flex flex-col justify-center min-h-[400px]">
                 <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-6 w-max">산업용</span>
                 <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Palletizing</h3>
                 <p className="text-gray-600 leading-relaxed">
                   팔레타이징 솔루션은 물류 및 운송 과정에서 물건을 팔레트에 적재하거나 적재하는 작업을 자동화합니다.
                 </p>
             </div>
             <div className="lg:w-1/2 rounded-2xl overflow-hidden min-h-[400px]">
                <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                    alt="Palletizing Robot"
                    className="w-full h-full object-cover"
                />
             </div>
        </div>
      </div>

      {/* Blue Banner - Training Kit */}
      <div className="bg-[#00346b] text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Training Kit</h3>
                <p className="text-blue-200 max-w-md leading-relaxed">
                    두산로보틱스 교육 키트는 여러분이 인증된 협동로봇 엔지니어가 될 수 있는 기회를 제공합니다. 협동로봇을 직접 티칭하고 어떻게 작업자와 협업 할 수 있는지 이해할 수 있는 첫번째 단계입니다.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
                 <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-md">
                    <img 
                        src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Training Kit" 
                        className="w-full h-64 object-cover rounded"
                    />
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;