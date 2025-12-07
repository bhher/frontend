import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-white py-16 px-8 lg:px-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have a project in mind? Let's work together to create something extraordinary.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5FFFD2] transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5FFFD2] transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5FFFD2] transition-colors resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#5FFFD2] text-black px-8 py-4 rounded-lg hover:bg-[#4FEEC2] transition-colors flex items-center gap-2"
          >
            <span>Send Message</span>
            <Send size={18} />
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="mb-2">Email</h4>
              <p className="text-gray-600 text-sm">hello@paradigmshift.com</p>
            </div>
            <div>
              <h4 className="mb-2">Phone</h4>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="mb-2">Location</h4>
              <p className="text-gray-600 text-sm">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

