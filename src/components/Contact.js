import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn pr-8 md:pr-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Contact</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="p-3 bg-white dark:bg-gray-800 rounded border" />
          <input type="email" placeholder="Email" className="p-3 bg-white dark:bg-gray-800 rounded border" />
          <textarea placeholder="Message" rows="4" className="md:col-span-2 p-3 bg-white dark:bg-gray-800 rounded border"></textarea>
          <button type="submit" className="md:col-span-2 p-3 bg-primary text-white rounded hover:scale-105 transition-transform">Send Message</button>
        </form>
        {/* Adjust to match contact1.png */}
      </div>
    </section>
  );
};

export default Contact;
