import React, { useState } from "react";
import {
  Star,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Wrench,
  Building,
  Factory,
  Shield,
  Zap,
  Target,
  Menu,
  X,
  ArrowRight,
  Quote,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/vision-mission", label: "Vision & Mission" },
  { to: "/contact", label: "Contact" },
];

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "25+" },
  { icon: Users, label: "Happy Clients", value: "100+" },
  { icon: Award, label: "Projects Completed", value: "100+" },
  { icon: Star, label: "Quality Rating", value: "4.9/5" },
];

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "ISO certified processes ensuring top-notch quality in every project",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient project management with on-time delivery guarantee",
  },
  {
    icon: Target,
    title: "Precision Work",
    description:
      "Advanced machinery and skilled craftsmen for precise fabrication",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailored solutions designed to meet your specific requirements",
  },
];

const services = [
  {
    icon: Building,
    title: "Structural Steel Work",
    description: "Complete structural steel fabrication and installation",
    features: ["Pre-engineered Buildings", "Industrial Sheds", "Warehouses"],
  },
  {
    icon: Factory,
    title: "Custom Metal Fabrication",
    description: "Precision metal work for industrial and commercial needs",
    features: ["CNC Cutting", "Welding Services", "Metal Forming"],
  },
  {
    icon: Wrench,
    title: "Steel Furniture",
    description: "Durable and stylish steel furniture solutions",
    features: ["Office Furniture", "Storage Solutions", "Custom Designs"],
  },
];

const testimonials = [
  {
    name: "Kundan Deshmukh",
    company: "Parbhani Agrotech",
    text: "Exceptional quality work and timely delivery. Trimurti Fabrication has been our go-to partner for all steel fabrication needs.",
    rating: 5,
  },
  {
    name: "AD. Kale",
    company: "Wedding construction",
    text: "Professional team with great attention to detail. Their custom solutions perfectly matched our requirements.",
    rating: 5,
  },
  {
    name: "NSL ",
    company: "NSL Sugar Factory",
    text: "Reliable, efficient, and cost-effective solutions. Highly recommend their services for any fabrication work.",
    rating: 5,
  },
];

const galleryImages = [
  "/channel.jpeg",
  "/work.jpeg",
  "/hood.jpeg",
  "/shed.jpeg",
  "/home.jpeg",
  "/shed-2.jpeg",
];

// CEO Section data
const ceo = {
  name: "Mr.Rajendra More",
  title: "Founder & CEO",
  image: "/ceo.jpg", // Place ceo.jpg in your public folder or update the path accordingly
  message: `At Trimurti Fabrication, our mission is to deliver the highest quality steel fabrication and furniture solutions with integrity, innovation, and a customer-first approach. With over 25 years of experience, we are committed to exceeding client expectations and building lasting relationships. Thank you for trusting us with your projects.`,
};

const TrimurtiFabrication = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-0 m-0">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">
                  Trimurti Fabrication
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.to)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === link.to
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.to)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.to
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Steel Fabrication
              <span className="block text-yellow-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              25+ years of excellence in structural steel work, custom metal
              fabrication, and industrial solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <stat.icon className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trimurti Fabrication?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence through proven expertise, advanced
              technology, and unwavering commitment to quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive steel fabrication solutions tailored to your
              industrial and commercial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-full">
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by hundreds of satisfied clients across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex mb-4">
                  <Quote className="text-yellow-400 mr-2" size={24} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse of our completed projects and fabrication excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={src}
                  alt={`Trimurti Fabrication Work ${idx + 1}`}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x220?text=Work+Image";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 rounded-lg shadow-lg bg-white">
          <img
            src={ceo.image}
            alt={ceo.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/160x160?text=CEO";
            }}
          />
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-1">
              {ceo.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-4">{ceo.title}</p>
            <p className="text-gray-700 text-lg italic">"{ceo.message}"</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-block mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 9850139929</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-block mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">info@trimurtifabrication.com</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 p-4 rounded-full inline-block mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Aurangabad, Maharashtra, India</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Get Free Quote Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Trimurti Fabrication
              </h3>
              <p className="text-gray-400">
                Your trusted partner for quality steel fabrication and
                structural solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Structural Steel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Metal Fabrication
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Steel Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  Mon-Sat: 9AM-6PM
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  +91 9850139929
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  info@trimurtifabrication.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Trimurti Fabrication. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrimurtiFabrication;
