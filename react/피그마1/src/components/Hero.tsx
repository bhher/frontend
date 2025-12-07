import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-8 lg:p-16">
      <div className="max-w-4xl w-full">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669059921524-327a4c52cff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjB3aGl0ZSUyMHNoaXJ0fGVufDF8fHx8MTc2NDA0Mjg3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fashion portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2>Introduction</h2>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}
