import React, { useState, useEffect } from 'react';
import { Menu, Globe, Search, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { id: 'product-lineup', label: '제품 & 솔루션' },
    { id: 'support-links', label: '교육 & 서비스' },
    { id: 'clients', label: '투자정보' },
    { id: 'solutions', label: '회사소개' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Scroll to the target while accounting for fixed navbar height
      const navEl = document.querySelector('nav');
      const navHeight = navEl ? navEl.getBoundingClientRect().height : 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#001b3d] py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold tracking-tighter italic">DOOSAN</span>
        </div>

        {/* Main Menu - Desktop */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Utility Menu */}
        <div className="hidden md:flex items-center gap-4 text-xs font-light">
          <button className="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition">
            A/S 신청
          </button>
          <button className="border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition">
            파트너 서비스 ↗
          </button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
            <Globe size={16} />
            <ChevronDown size={14} />
          </div>
          <Search size={18} className="cursor-pointer hover:text-blue-400" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;