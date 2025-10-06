'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Format the email content professionally
    const emailSubject = formData.subject || 'Project Inquiry - Let&apos;s Work Together';
    
    const emailBody = `Dear Sushant,

I hope this message finds you well. I am reaching out to discuss a potential collaboration opportunity.

CLIENT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Subject: ${formData.subject || 'General Inquiry'}

PROJECT DETAILS:
${formData.message}

I would appreciate the opportunity to discuss this project further at your convenience. Please let me know your availability for a brief call or meeting.

Looking forward to your response.

Best regards,
${formData.name}
${formData.email}

---
This message was sent through your professional website contact form at skfighter.com`;

    // Create mailto link with encoded parameters
    const mailto = `mailto:sushantsharma739@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailto;
  };

  return (
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-xl p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-60 blur-lg"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Ready to bring your ideas to life? Let&apos;s connect and discuss your project.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-500">Contact Information</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-center">
              <span className="mr-3 text-xl">📧</span>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a 
                  href="mailto:sushantsharma739@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  sushantsharma739@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">📱</span>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a 
                  href="tel:+918195927482" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 8195927482
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">🔗</span>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/sushant-kumar-1a4b30b2/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Professional Profile
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">🐙</span>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a 
                  href="https://github.com/skfighter" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Code Repository
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-xl">📸</span>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <a 
                  href="https://www.instagram.com/skfighter.ig/#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Personal Updates
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-blue-700 text-blue-400 rounded-full hover:bg-blue-700 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-purple-500">Send a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400" 
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                placeholder="What's this about? (Optional)"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-200">Message *</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100 placeholder-gray-400 resize-vertical"
                placeholder="Tell me about your project requirements, timeline, budget, or any specific questions you have..."
                required
              ></textarea>
            </div>
            <div className="text-sm text-gray-400">
              <p>* Required fields</p>
              <p className="mt-1">Clicking &quot;Send Message&quot; will open your default email client with a professionally formatted message.</p>
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 sm:py-8 text-gray-400 border-t border-gray-700">
        <p>© {new Date().getFullYear()} Sushant Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}