import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1612652851130-fa9cf2367597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlJTIwZG9vcnxlbnwxfHx8fDE3NjQwNDI4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Minimal architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1650662576090-18e488f108ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0MDQyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Pink building"
  },
  {
    src: "https://images.unsplash.com/photo-1662103627854-ae7551d1eddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMGhhbmdlcnxlbnwxfHx8fDE3NjQwNDI4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Black t-shirt"
  },
  {
    src: "https://images.unsplash.com/photo-1616386573884-22531fd226e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGNpdHl8ZW58MXx8fHwxNzY0MDQyODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mountain landscape"
  },
  {
    src: "https://images.unsplash.com/photo-1650662576090-18e488f108ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0MDQyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Pink architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1720538907668-bfb51a929803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FyJTIwd2hlZWx8ZW58MXx8fHwxNzY0MDQyODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Vintage car"
  },
  {
    src: "https://images.unsplash.com/photo-1712815188653-20909b6b29cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGFncyUyMGJ1aWxkaW5nJTIwc2t5fGVufDF8fHx8MTc2NDA0Mjg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Flags building"
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc2NDAxMTIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1721396921574-22cfad8f4819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMG9jZWFuJTIwd2F2ZXN8ZW58MXx8fHwxNzYzOTQ1MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Beach ocean"
  },
  {
    src: "https://images.unsplash.com/photo-1617326021886-53d6be1d7154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGludGVyaW9yJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NjQwNDI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "White interior"
  }
];

const features = [
  { icon: Check, text: 'Creative Direction' },
  { icon: Check, text: 'Brand Strategy' },
  { icon: Check, text: 'Visual Design' },
  { icon: Check, text: 'User Experience' }
];

export function ImageGallery() {
  return (
    <section className="bg-gray-50 py-16 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {galleryImages.slice(0, 2).map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h3 className="mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5FFFD2] flex items-center justify-center flex-shrink-0">
                  <feature.icon size={16} className="text-black" />
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Single Image */}
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
          <ImageWithFallback
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {galleryImages.slice(3, 5).map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Single Image */}
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
          <ImageWithFallback
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {galleryImages.slice(6, 9).map((image, index) => (
            <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Final Large Image */}
        <div className="aspect-[16/9] overflow-hidden rounded-lg">
          <ImageWithFallback
            src={galleryImages[9].src}
            alt={galleryImages[9].alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
