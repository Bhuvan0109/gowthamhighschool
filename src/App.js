import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, School, Phone, Mail, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';


import checkImage from './images/kids.jpg';
import digital from './images/jump.png';
import sport from './images/football.jpg';
import welcome from './images/rana 2.jpeg';
import chem from './images/gps4.png'
import stu from './images/gps6.png'
import kids from './images/all.png'
import kido from './images/kido.jpg'
import check from './images/check.jpeg'
import check1 from './images/GPS2.png'
import check2 from './images/check2.jpg'
import check3 from './images/check3.jpg'

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
      title: "Welcome to Gowtham Public School Mallapur",
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
    "Special Gifts for Parents who took Admission by April-2025",
    "Free Summer Camp for Childrens 2025-2026",
    "Please visit your New Campus and High Tech Classrooms"
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
          text: "https://wa.me/919347083372",
          isBot: true
        }]);
      }, 1000);
      setCurrentMessage("");

    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917995799513", "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-tide text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> +91 7995799513</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> gpsmallapur@gmail.com</span>
          </div>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200">Parent Login</a>
            <a href="#" className="hover:text-blue-200">Staff Login</a>
          </div> */}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <School className="h-12 w-12 text-goldenrod" />
              <div>
                <h1 className="text-2xl font-bold text-goldenrod">Gowtham Public School Mallapur</h1>
                <p className="text-sm text-gray-600">Affiliated to CBSE, Mallapur-Hyderabad</p>
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-6 text-gray-700">
              <li><a href="#" className="hover:text-blue-800 cursor-pointer">Home</a></li>

                <li className="hover:text-blue-800 cursor-pointer">About Us</li>
                <li className="hover:text-blue-800 cursor-pointer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd1ouKFU_6Vw9yho41D7L8mP86uAJV1_VRCaUdpZw9XYQMGBQ/viewform?usp=sharing">
                Fee Receipts </a></li>
                <li className="hover:text-blue-800 cursor-pointer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxCakM1EGxBT3YFIORta2F7BvIAqIf1u4KTwiHZOaWLoKQWQ/viewform?usp=sharing">
               Admission Form</a></li>
                {/* <li className="hover:text-blue-800 cursor-pointer">Facilities</li> */}
                <li className="hover:text-green-800 cursor-pointer">
                <a
            href="tel:+917995799513"
            className="hover:underline text-black-600"
          >
            Contact
          </a>
                  </li>
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
              <h2 className="text-3xl font-bold text-goldenrod mb-4">Welcome to Gowtham Public School Mallapur </h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide quality education, Gowtham Public School Mallapur has been
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
                Our institution is committed to nurturing a culture of academic excellence. We offer a comprehensive and well-structured curriculum that is thoughtfully designed to:

Develop critical thinking skills, analytical reasoning, and intellectual curiosity.
Encourage creative problem-solving and innovation across all disciplines.Our goal is to create lifelong learners who are not just academically proficient but also capable of adapting to an ever-evolving global landscape.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Run By IIT Alumni</h3>
                <p className="text-gray-600">
                Our institution is founded and operated by alumni from the prestigious Indian Institutes of Technology (IITs), bringing in a high standard of education and vision for the future. With their guidance, we offer:

A future-ready curriculum aligned with global academic standards and technological advancements.
Mentorship from IIT-educated professionals who bring in-depth subject knowledge and real-world experience.This initiative ensures students are well-prepared for global challenges and opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Digital Learning</h3>
                <p className="text-gray-600">
                We integrate cutting-edge educational technology to create an immersive and interactive learning experience. Our digital learning approach includes:Access to e-learning platforms, online resources, and digital libraries.
Use of learning management systems (LMS) to track assignments, grades, and student performance.
Hybrid learning models combining physical and digital education for flexibility.Digital learning ensures that students are tech-savvy, self-motivated, and equipped with 21st-century skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Highly Experienced Faculty & Industry Experts</h3>
                <p className="text-gray-600">
                We take pride in our team of highly qualified educators and industry professionals, who bring both academic rigor and real-world insights into the classroom. Our faculty includes:
                Subject matter experts with advanced degrees from top institutions and years of teaching experience.
                Industry veterans who bridge the gap between academic knowledge and practical application.
                Dedicated mentors who provide personalized guidance to help students excel in academics and career planning.
                              </p>

              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Focus on Physical & Mental Well-being</h3>
                <p className="text-gray-600">
                We believe that true education extends beyond books and classrooms—it must nurture both mind and body. Our holistic development approach includes:
                Daily physical education and sports activities to promote fitness, teamwork, and discipline.
                Regular yoga, meditation, and mindfulness sessions to reduce stress and enhance emotional resilience.
                Workshops on mental health, stress management, and positive thinking.
                We prepare our students to lead balanced, healthy, and fulfilling lives, both academically and personally.
                              </p>

              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-goldenrod mb-4">Vedic Mathematics – The Ancient Power of Calculation</h3>
                <p className="text-gray-600">
                We incorporate Vedic Mathematics to help students develop speed, accuracy, and confidence in solving complex mathematical problems. Key benefits include:
                Faster mental calculations using ancient techniques based on logic and patterns.
                Easy-to-learn methods that improve numerical skills, concentration, and memory.
                Helps reduce math phobia and builds interest in numbers and problem-solving.
                Vedic Mathematics is not just a tool—it's a time-tested intellectual asset that builds a strong mathematical foundation from an early age.
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
            <img src={check} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check1} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check2} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check3} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"/>
            
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
          <a
            href="https://maps.app.goo.gl/TRvkvhmv8QJ5HjbdA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-600"
          >
            Mallapur, Hyderabad
          </a>
        </p>

        <p className="flex items-center gap-2 mb-2">
          <Phone className="h-4 w-4" />
          <a
            href="tel:+917995799513"
            className="hover:underline text-green-600"
          >
            +91 7995799513
          </a>
        </p>

        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a
            href="mailto:gpsmallapur@gmail.com"
            className="hover:underline text-green-600"
          >
            gpsmallapur@gmail.com
          </a>
        </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">Home</a></li>
                <li className="hover:text-green-800 cursor-pointer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd1ouKFU_6Vw9yho41D7L8mP86uAJV1_VRCaUdpZw9XYQMGBQ/viewform?usp=sharing">
                Fee Receipts </a></li>
                <li className="hover:text-green-800 cursor-pointer"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxCakM1EGxBT3YFIORta2F7BvIAqIf1u4KTwiHZOaWLoKQWQ/viewform?usp=sharing">
                Admission Form</a></li>
                <li className="hover:text-green-800 cursor-pointer">
                <a
            href="tel:+917995799513"
            className="hover:underline text-black-600" >
            Contact
          </a>
           </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@gpsmallapur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-red-600"
              >
                Youtube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573529066943"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gpsmallapur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-pink-600"
              >
                Instagram
              </a>
            </div>

            </div>
          </div>
          <div className="border-t border-WHITE-800 mt-8 pt-8 text-center">
            <p>© Gowtham Public School Mallapur. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isChatOpen ? (
          <button
            onClick={openWhatsApp} // Changed onClick to openWhatsApp function
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
                        : "bg-goldenrod ml-8 text-white"
                    }`}
                  >
                    {msg.isBot && msg.text.startsWith("https://wa.me/") ? (
                      <a
                        href={msg.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {msg.text}
                      </a>
                    ) : (
                      msg.text
                    )}
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
