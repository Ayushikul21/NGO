import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouch = () => {
  const handleSubmit = () => {
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us in our mission to create positive change. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-blue-100">
                    703-A, Rudra Sangam Apartment, Sarai Inayat, <br/>
                    GT Road near Prayag Dhaba, Prayagraj – 211019, U.P., India
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100">
                    <a href='tel:+917905226299' className="hover:text-white">
                      +91 7905226299
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-blue-200" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">
                    <a href="mailto:help@ankitawellbeingfoundation.org" className="hover:text-white">
                      help@ankitawellbeingfoundation.org
                    </a>  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;