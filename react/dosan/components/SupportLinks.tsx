import React from 'react';
import { ShoppingCart, MapPin, BookOpen, Headphones } from 'lucide-react';

const SupportLinks: React.FC = () => {
  return (
    <section id="support-links" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Item 1 */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group cursor-pointer">
             <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">구매 문의</h3>
                 <p className="text-sm text-gray-500 mb-2">로봇 도입을 고민하고 계신가요?</p>
                 <p className="text-sm text-gray-500">전문가에게 1:1 상담을 받아보세요.</p>
             </div>
             <div className="text-blue-200 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
                 <ShoppingCart size={48} />
             </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group cursor-pointer">
             <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">가까운 대리점 찾기</h3>
                 <p className="text-sm text-gray-500 mb-2">고객님에게 가장 가까운 대리점을</p>
                 <p className="text-sm text-gray-500">안내해 드립니다.</p>
             </div>
             <div className="text-blue-200 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
                 <MapPin size={48} />
             </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group cursor-pointer">
             <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">두산 로봇 교육</h3>
                 <p className="text-sm text-gray-500 mb-2">단계별 온/오프라인 교육으로</p>
                 <p className="text-sm text-gray-500">로봇 운용 능력을 향상시켜보세요.</p>
             </div>
             <div className="text-blue-200 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
                 <BookOpen size={48} />
             </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group cursor-pointer">
             <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">A/S 신청</h3>
                 <p className="text-sm text-gray-500 mb-2">로봇 전문가가 365일</p>
                 <p className="text-sm text-gray-500">고객님의 A/S를 지원합니다.</p>
             </div>
             <div className="text-blue-200 group-hover:text-blue-600 transition-colors transform group-hover:scale-110 duration-300">
                 <Headphones size={48} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportLinks;