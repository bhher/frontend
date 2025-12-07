import { Home, User, Mail, Settings } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-full lg:w-80 bg-[#5FFFD2] text-black p-8 lg:p-12 overflow-y-auto z-10">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-2">Paradigm</h1>
          <h1 className="mb-6">Shift</h1>
          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Navigation */}
        <nav className="mb-auto">
          <ul className="space-y-6">
            <li>
              <a href="#home" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <Home size={20} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <User size={20} />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <Mail size={20} />
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#settings" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                <Settings size={20} />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* About Section */}
        <div className="mt-16 space-y-12">
          <div>
            <h3 className="mb-3">CHANGE THE CULTURE</h3>
            <p className="text-sm opacity-80">
              Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            </p>
          </div>

          <div>
            <h3 className="mb-3">EMBRACE DIFFERENCE</h3>
            <p className="text-sm opacity-80">
              Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero.
            </p>
          </div>

          <div>
            <h3 className="mb-3">STAY DISRUPTIVE ETHICAL</h3>
            <p className="text-sm opacity-80">
              Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl.
            </p>
          </div>

          <div>
            <h3 className="mb-3">STEP INTO GREATNESS</h3>
            <p className="text-sm opacity-80">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-black/20">
          <p className="text-sm mb-4">© 2025 Paradigm Shift</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

