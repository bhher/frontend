import React from 'react';
import { Linkedin, Youtube, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { SocialPost } from '../types';

const posts: SocialPost[] = [
  { id: 1, platform: 'linkedin', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop', content: 'Doosan Robotics at Automate 2024...', date: '2 days ago', author: 'Doosan Robotics' },
  { id: 2, platform: 'youtube', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop', content: 'New H-Series Launch Event', date: '1 week ago', author: 'Doosan Robotics' },
  { id: 3, platform: 'facebook', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop', content: 'Meet our partners in Europe.', date: '2 weeks ago', author: 'Doosan Robotics' },
  { id: 4, platform: 'instagram', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop', content: 'Innovation Lab behind the scenes.', date: '3 weeks ago', author: 'Doosan Robotics' },
  { id: 5, platform: 'linkedin', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop', content: 'Security safety certification achieved.', date: '1 month ago', author: 'Doosan Robotics' },
];

const SocialMedia: React.FC = () => {
    return (
        <section id="social-media" className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?q=80&w=2081&auto=format&fit=crop" 
            alt="Lab Background" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
                <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider block mb-2">Social Media</span>
                <h2 className="text-3xl font-bold text-white mb-6 max-w-lg">
                    두산로보틱스의 혁신적인 기술과 소식을 만나보세요.
                </h2>
                <div className="flex gap-4">
                    <Linkedin className="text-white hover:text-blue-400 cursor-pointer" size={24} />
                    <Youtube className="text-white hover:text-red-500 cursor-pointer" size={24} />
                    <Instagram className="text-white hover:text-pink-500 cursor-pointer" size={24} />
                    <Facebook className="text-white hover:text-blue-600 cursor-pointer" size={24} />
                </div>
            </div>
             
             {/* Slider Navigation Buttons */}
             <div className="flex gap-2 mt-6 md:mt-0">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">
                    <span className="transform rotate-180">➜</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10">
                    ➜
                </button>
             </div>
        </div>

        {/* Horizontal Scroll / Carousel Simulation */}
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
            {posts.map((post) => (
                <div key={post.id} className="min-w-[280px] bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-40 overflow-hidden relative">
                         <img src={post.image} alt="Social" className="w-full h-full object-cover" />
                         <div className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full">
                            {post.platform === 'linkedin' && <Linkedin size={14} className="text-blue-700" />}
                            {post.platform === 'youtube' && <Youtube size={14} className="text-red-600" />}
                            {post.platform === 'facebook' && <Facebook size={14} className="text-blue-600" />}
                            {post.platform === 'instagram' && <Instagram size={14} className="text-pink-600" />}
                         </div>
                    </div>
                    <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div className="text-xs">
                                <p className="font-bold text-gray-800">{post.author}</p>
                                <p className="text-gray-400">{post.date}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                            {post.content}
                        </p>
                        <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                            Read More <ArrowRight size={12} />
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;