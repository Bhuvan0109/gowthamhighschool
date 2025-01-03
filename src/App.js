import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, School, Phone, Mail, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

import checkImage from './images/check.jpeg';
import digital from './images/digital.jpeg';
import sport from './images/football.jpg';
import welcome from './images/bus.jpg';
import chem from './images/chemistry.jpg'
import stu from './images/digit.jpg'
import kids from './images/kids.jpg'
import kido from './images/kido.jpg'
// Card components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const GowthamSchoolWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const slides = [
    {
      image: checkImage ,
      title: "Welcome to Gowtham High School",
      subtitle: "Nurturing Excellence, Building Future Leaders"
    },
    {
      image: digital,
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Infrastructure for Modern Education"
    },
    {
      image: sport,
      title: "Holistic Development",
      subtitle: "Academics, Sports, and Cultural Activities"
    }
  ];

  const newsUpdates = [
    "Admissions open for Academic Year 2025-26",
    "National Science Day Celebrations on February 28th",
    "Annual Sports Meet scheduled for March 15th",
    "Parent-Teacher Meeting on February 10th"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isBot: false }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thanks for your message! Our team will get back to you soon.",
          isBot: true
        }]);
      }, 1000);
      setCurrentMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-tide text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> +91 123-456-7890</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> info@gowthamschool.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200">Parent Login</a>
            <a href="#" className="hover:text-blue-200">Staff Login</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <School className="h-12 w-12 text-goldenrod" />
              <div>
                <h1 className="text-2xl font-bold text-goldenrod">Gowtham High School</h1>
                <p className="text-sm text-gray-600">Affiliated to CBSE, Mallapur-Hyderabad</p>
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-gray-700">
                <li className="hover:text-blue-800 cursor-pointer">Home</li>
                <li className="hover:text-blue-800 cursor-pointer">About Us</li>
                <li className="hover:text-blue-800 cursor-pointer">Academics</li>
                <li className="hover:text-blue-800 cursor-pointer">Admissions</li>
                <li className="hover:text-blue-800 cursor-pointer">Facilities</li>
                <li className="hover:text-blue-800 cursor-pointer">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={slides[currentSlide].image}
            alt="Slider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h2>
              <p className="text-xl">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* News Updates
      <div className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold whitespace-nowrap">Latest Updates:</span>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {newsUpdates.map((news, index) => (
                  <span key={index} className="mx-8">• {news}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* News Updates */}
<div className="bg-tide text-white py-4">
  <div className="container mx-auto px-4">
    <div className="flex items-center gap-4 overflow-hidden">
      <span className="font-bold whitespace-nowrap">Latest Updates:</span>
      <div className="overflow-hidden flex-1">
        <div className="flex animate-marquee">
          {newsUpdates.map((news, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">• {news}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-goldenrod mb-4">Welcome to Gowtham High School</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide quality education, Gowtham High School has been 
                a center of academic excellence. Our institution focuses on holistic 
                development of students through a perfect blend of academics, sports, and 
                co-curricular activities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-goldenrod">1000+</h3>
                  <p className="text-gray-600">Students</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-goldenrod">100%</h3>
                  <p className="text-gray-600">Results</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-goldenrod">50+</h3>
                  <p className="text-gray-600">Faculty</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-goldenrod">25+</h3>
                  <p className="text-gray-600">Years</p>
                </div>
              </div>
            </div>
            <div>
              <img src={welcome} alt="School Building" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-goldenrod mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Academic Excellence</h3>
                <p className="text-gray-600">
                  Comprehensive curriculum designed to nurture critical thinking and creativity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Sports Facilities</h3>
                <p className="text-gray-600">
                  State-of-the-art sports infrastructure for physical development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Digital Learning</h3>
                <p className="text-gray-600">
                  Modern smart classrooms equipped with latest educational technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-goldenrod mb-12">Campus Life</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={chem}  alt="Event 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={kids} alt="Event 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={kido} alt="Event 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={stu} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tide text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4" />
                Mallapur, Hyderabad
              </p>
              <p className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4" />
                +91 123-456-7890
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@gowthamschool.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">About Us</a></li>
                <li><a href="#" className="hover:text-blue-200">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-200">Facilities</a></li>
                <li><a href="#" className="hover:text-blue-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-200">Facebook</a>
                <a href="#" className="hover:text-blue-200">Twitter</a>
                <a href="#" className="hover:text-blue-200">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-WHITE-800 mt-8 pt-8 text-center">
            <p>© 2025 Gowtham Model School. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-goldenrod text-white p-4 rounded-full shadow-lg hover:bg-tide"
          >
            <MessageCircle />
          </button>
        ) : (
          <Card className="w-80">
            <div className="bg-goldenrod text-white p-4 rounded-t-lg flex justify-between items-center">
              <span className="text-lg font-bold">Chat with us</span>
              <button onClick={() => setIsChatOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <CardContent className="p-4">
              <div className="h-64 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      msg.isBot
                        ? "bg-gray-100 mr-8"
                        : "bg-goldenrod ml-8"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-goldenrod text-white p-2 rounded hover:bg-tide"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GowthamSchoolWebsite;