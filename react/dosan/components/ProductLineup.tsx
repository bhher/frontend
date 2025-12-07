import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  { id: 1, series: 'Prime', name: 'P-SERIES', desc: '최고의 퍼포먼스를 내는 프리미엄 라인업', image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&auto=format&fit=crop', tags: ['P3020'] },
  { id: 2, series: 'High-Power', name: 'H-SERIES', desc: '가반하중 25kg의 강력한 파워, H시리즈!', image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&auto=format&fit=crop', tags: ['H2515', 'H2017'] },
  { id: 3, series: 'Masterpiece', name: 'M-SERIES', desc: '최고의 품질과 안전을 자랑하는 M시리즈!', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&auto=format&fit=crop', tags: ['M1509', 'M1013', 'M0617', 'M0609'] },
  { id: 4, series: 'Agile', name: 'A-SERIES', desc: '가장 빠르고 효율적인 A시리즈!', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop', tags: ['A0912', 'A0509'] },
];

const ProductLineup: React.FC = () => {
  return (
    <section id="product-lineup" className="bg-[#050505] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider block mb-2">Products</span>
            <h2 className="text-4xl font-bold">전 세계 최대 규모의<br />Cobot 라인업</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-[#111] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-colors group border border-white/5">
                    <div className="p-8 h-64 flex items-center justify-center bg-white relative">
                        {/* Placeholder for robotic arm isolation */}
                        <img src={product.image} alt={product.name} className="max-h-full object-contain mix-blend-multiply filter contrast-125" />
                    </div>
                    <div className="p-8">
                        <span className="text-xs text-gray-400 block mb-1">{product.series}</span>
                        <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                        <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{product.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                            {product.tags?.map((tag, idx) => (
                                <span key={idx} className="text-[10px] bg-[#222] text-gray-300 px-2 py-1 rounded border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Navigation Dots (Visual Only) */}
        <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;