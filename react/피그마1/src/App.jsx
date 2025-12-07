import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { ImageGallery } from './components/ImageGallery';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-80">
        <Hero />
        <ImageGallery />
        <ContactForm />
      </main>
    </div>
  );
}

