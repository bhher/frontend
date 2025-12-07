import React from 'react';
import { ChevronDown, Facebook, Youtube, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
        <footer id="footer" className="bg-[#111] text-gray-400 py-12 text-sm border-t border-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
                <h4 className="text-white font-bold mb-4">제품 & 솔루션</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">헤리티지</a></li>
                    <li><a href="#" className="hover:text-white transition">제품</a></li>
                    <li><a href="#" className="hover:text-white transition">솔루션</a></li>
                    <li><a href="#" className="hover:text-white transition">소프트웨어</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">교육 & 서비스</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">교육</a></li>
                    <li><a href="#" className="hover:text-white transition">다운로드 센터</a></li>
                    <li><a href="#" className="hover:text-white transition">서비스 센터</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">투자정보</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">IR 자료실</a></li>
                    <li><a href="#" className="hover:text-white transition">거버넌스</a></li>
                    <li><a href="#" className="hover:text-white transition">보고서</a></li>
                    <li><a href="#" className="hover:text-white transition">공고/공시</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4">회사소개</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">기업정보</a></li>
                    <li><a href="#" className="hover:text-white transition">지속가능경영</a></li>
                    <li><a href="#" className="hover:text-white transition">뉴스 & 이벤트</a></li>
                    <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
                <span className="text-2xl font-bold tracking-tighter text-white italic">DOOSAN</span>
                <span className="text-xs">© 2025 두산로보틱스(주).</span>
            </div>
            
            <div className="flex items-center gap-6">
                <div className="flex gap-4">
                    <Linkedin size={18} className="hover:text-white cursor-pointer" />
                    <Youtube size={18} className="hover:text-white cursor-pointer" />
                    <Instagram size={18} className="hover:text-white cursor-pointer" />
                    <Facebook size={18} className="hover:text-white cursor-pointer" />
                </div>
                
                <div className="relative group">
                    <button className="flex items-center gap-2 border border-gray-700 px-3 py-1.5 rounded text-xs hover:border-gray-500 hover:text-white transition">
                        Related Sites <ChevronDown size={14} />
                    </button>
                    {/* Dropdown would go here */}
                </div>
            </div>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-4 text-xs">
            <a href="#" className="hover:text-white">커리어 두산 ↗</a>
            <a href="#" className="hover:text-white">법적고지</a>
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="font-bold text-white hover:text-gray-200">개인정보처리방침</a>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#333] hover:bg-[#555] text-white p-3 rounded shadow-lg transition-colors z-50"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;