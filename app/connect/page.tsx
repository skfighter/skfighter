export default function Connect() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Let's Work Together</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <p>📧 <a href="mailto:sushantsharma739@gmail.com">sushantsharma739@gmail.com</a></p>
            <p>📱 <a href="tel:+918195927482">+91 8195927482</a></p>
            <p>🔗 <a href="https://linkedin.com/in/sushantkumar-1a4b30b2" target="_blank">LinkedIn Profile</a></p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}