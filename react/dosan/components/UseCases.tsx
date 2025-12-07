import React from "react";
import { UseCase } from "../types";
import { ArrowRight, ChevronDown } from "lucide-react";

const cases: UseCase[] = [
  {
    id: 1,
    category: "제조",
    tagColor: "text-blue-600 border-blue-600",
    title: "팔레타이징",
    subtitle: "Palletizing Solution",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "제조",
    tagColor: "text-blue-600 border-blue-600",
    title: "레이저 로봇 용접",
    subtitle: "Cobot Solution",
    image:
      "https://images.unsplash.com/photo-1565514020125-9980d23588f1?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "제조",
    tagColor: "text-blue-600 border-blue-600",
    title: "Sanding (샌딩)",
    subtitle: "Cobot Solution",
    image:
      "https://images.unsplash.com/photo-1624823183574-8b63e9d89201?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "제조",
    tagColor: "text-blue-600 border-blue-600",
    title: "머신텐딩",
    subtitle: "두산 M0617 공작기계 보조 작업",
    image:
      "https://images.unsplash.com/photo-1535973489816-90e8293967d6?w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "서비스",
    tagColor: "text-green-600 border-green-600",
    title: "Dr.Presso",
    subtitle: "Food Tech",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "서비스",
    tagColor: "text-green-600 border-green-600",
    title: "튀김",
    subtitle: "학교 단체급식 튀김로봇 솔루션",
    image:
      "https://images.unsplash.com/photo-1586548773950-5d6c8e9b6028?w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "서비스",
    tagColor: "text-green-600 border-green-600",
    title: "공항 수하물 핸들링",
    subtitle: "Test met bagagerobot",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "서비스",
    tagColor: "text-green-600 border-green-600",
    title: "전기차 충전",
    subtitle: "EV Charging Robot",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="usecases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-2">
              Use cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              로봇 도입으로 일하는 방식이 새로워집니다.
            </h2>
            <p className="text-gray-600">
              다양한 성공사례를 통해 일터를 혁신할 새로운 아이디어를 얻어보세요.
            </p>
          </div>

          <button className="mt-6 md:mt-0 flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">
            더 많은 도입사례 <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-light opacity-90 mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 border rounded ${item.tagColor}`}
                >
                  {item.category}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
