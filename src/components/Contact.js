import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn py-16 px-4">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full 
          border-2 border-indigo-600 text-indigo-600 dark:text-gray-200 
           shadow-[3px_3px_0px_0px_rgba(192,132,252,0.7)] 
           bg-gradient-to-r from-indigo-100/80 to-violet-100/80 
            dark:from-indigo-900/30 dark:to-violet-900/30 
              transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(192,132,252,0.9)]
           text-sm sm:text-base">
            Contact Information
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl py-2 sm:py-3 md:py-4 
          font-bold text-indigo-600 dark:text-white tracking-tight leading-tight">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 
          text-xs sm:text-sm md:text-base lg:text-lg 
          pt-1 sm:pt-2 md:pt-3 lg:pt-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'm just a message away.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          {/* Contact Information Card - 40% width on large screens */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white flex flex-col justify-center relative overflow-hidden group">
            <div className='absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/5 transition-transform duration-700 group-hover:bg-white/10 group-hover:scale-150'>

            </div>
            <div className='absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5 transition-transform duration-700 group-hover:bg-white/10 group-hover:scale-150'>

            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-blue-100">
                Fill up the form and I'll get back to you within 30 minutes.
              </p>
            </div>

            <div className="space-y-7">
              {/* Phone */}
              <div className="flex items-center space-x-4 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.144c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <span className="text-white">+92 315 1728837</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-white">junaid.ashraf4275@gmail.com</span>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <span className="text-white">+92 315 1728837</span>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer group">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <span className="text-white">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form - 60% width on large screens */}
          <div className="lg:col-span-7 p-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 text-primary dark:text-white bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 text-primary dark:text-white bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 text-sm">🇵🇰</span>
                    <span className="text-gray-400 text-sm ml-1">+92</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder=""
                    className="w-full pl-10 pr-4 py-3 text-primary dark:text-white bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 text-primary dark:text-white bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-90 group/btn overflow-hidden"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
