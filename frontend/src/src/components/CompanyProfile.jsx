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
  Ship,
  Globe,
  Package,
  Shield,
  Zap,
  Target,
  Menu,
  X,
  ArrowRight,
  Quote,
  Truck,
  Anchor,
  Container,
  PlayCircle,
  ExternalLink,
  Eye,
  Lightbulb,
  TrendingUp,
  Handshake,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/vision-mission", label: "Vision & Mission" },
  { to: "/contact", label: "Contact" },
];

const stats = [
  { icon: Calendar, label: "Years of Experience", value: "1" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Ship, label: "Shipments Delivered", value: "5000+" },
  { icon: Star, label: "Client Satisfaction", value: "98%" },
];

const features = [
  {
    icon: Shield,
    title: "Reliable Shipping",
    description:
      "Secure and reliable shipping solutions with full cargo insurance coverage",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Quick order processing and expedited shipping to global destinations",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Quality Products",
    description:
      "Premium quality products sourced from trusted manufacturers and suppliers",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Extensive network covering major markets across continents",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const products = [
  {
    icon: Package,
    title: "Gems & Imitation Jewellery",
    description: "Exquisite gems and high-quality imitation jewellery",
    image:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      "Natural Gemstones",
      "Semi-Precious Stones",
      "Fashion Jewellery",
      "Costume Jewellery",
      "Artificial Jewellery",
      "Traditional Designs",
    ],
    color: "emerald",
  },
  {
    icon: Globe,
    title: "Spices & Food Products",
    description: "Authentic Indian spices and organic food products",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      "Whole Spices",
      "Ground Spices",
      "Organic Rice",
      "Pulses & Lentils",
      "Tea & Coffee",
      "Ayurvedic Products",
    ],
    color: "emerald",
  },
  {
    icon: Target,
    title: "Cold Pressed Oils",
    description: "Pure and natural cold pressed oils for health and wellness",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      "Coconut Oil",
      "Sesame Oil",
      "Groundnut Oil",
      "Mustard Oil",
      "Sunflower Oil",
      "Castor Oil",
    ],
    color: "emerald",
  },
  {
    icon: Shield,
    title: "Carpets",
    description: "Handwoven carpets and rugs with traditional craftsmanship",
    image: "/carpet.jpg",
    subCategories: [
      "Hand-knotted Carpets",
      "Silk Carpets",
      "Wool Carpets",
      "Cotton Dhurries",
      "Prayer Rugs",
      "Designer Carpets",
    ],
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Pulses",
    description: "High-quality pulses and legumes from Indian farms",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      "Chickpeas",
      "Black Gram",
      "Green Gram",
      "Red Lentils",
      "Kidney Beans",
      "Field Peas",
    ],
    color: "emerald",
  },
  {
    icon: Container,
    title: "Agricultural Products",
    description: "Fresh agricultural produce and processed foods",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      "Fresh Fruits",
      "Vegetables",
      "Grains & Cereals",
      "Nuts & Dry Fruits",
      "Processed Foods",
      "Organic Products",
    ],
    color: "emerald",
  },
];

const testimonials = [
  {
    name: "John Miller",
    company: "Global Trading Inc., USA",
    text: "DADHE Global Export has been our reliable partner for Indian textiles. Their quality control and timely delivery are exceptional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Maria Santos",
    company: "European Imports Ltd., Spain",
    text: "Professional service and competitive pricing. They handle all our spice imports from India with great care.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ahmed Hassan",
    company: "Middle East Trading Co., UAE",
    text: "Excellent logistics support and product quality. DADHE Global Export is our preferred Indian supplier.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Global Shipping",
    category: "Logistics",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Quality Textiles",
    category: "Products",
  },
  {
    src: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Spice Exports",
    category: "Products",
  },
  {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Container Loading",
    category: "Operations",
  },
  {
    src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Handicrafts",
    category: "Products",
  },
  {
    src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Global Network",
    category: "Logistics",
  },
];

// CEO Section data
const leadership = {
  founder: {
    name: "Mr. Omkar Dadhe",
    title: "Founder & Chairman",
    image: "/photo-1.jpeg",
    message: `As the founder of DADHE Global Export, I envisioned creating a bridge between India's rich heritage of quality products and the global marketplace. My journey began with a simple belief - that Indian craftsmanship and products deserve recognition worldwide. Today, I'm proud to see our company connecting cultures and creating lasting partnerships across continents.`,
    experience: "2+ Years",
    expertise: "International Trade & Business Development",
    email: "dadheomkar1717@gmail.com",
  },
  ceo: {
    name: "Mr. Popatrao Dadhe",
    title: "Cofounder ",
    image: "/photo.jpeg",
    message: `Leading DADHE Global Export into the future, I focus on innovation, sustainability, and building stronger relationships with our global partners. Our commitment to excellence and customer satisfaction drives every decision we make. Together, we're not just exporting products - we're sharing India's story with the world.`,
    experience: "2+ Years",
    expertise: "Operations & Strategic Management",
    email: "dadhepopatrao@gmail.com",
  },
};

const DADHEGlobalExport = () => {
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-xl">
                    <Ship className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      DADHE GLOBAL EXPORTERS
                    </h1>
                    <p className="text-xs text-gray-500 font-medium">
                      Connecting India to the World
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.to)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeSection === link.to
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-105"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
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
                className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.to)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    activeSection === link.to
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ship.jpg"
            alt="Global Export Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-emerald-400/5 to-teal-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30">
                🚢 Premium Export Services Since 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              DADHE GLOBAL
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                EXPORTERS
              </span>
            </h1>

            <p className=" text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-red-100 leading-relaxed">
              Connecting global markets with premium authentic spices, exquisite
              handicrafts, and quality products through seamless export
              solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 flex items-center">
                <Ship className="mr-3 h-6 w-6" />
                Start Exporting Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center">
                <PlayCircle className="mr-3 h-6 w-6" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Design */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Globally
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                    <stat.icon className="text-white" size={40} />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              <Eye className="h-4 w-4" />
              Our Foundation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Vision &{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Driven by our vision to connect India with the world, we are
              committed to promoting Indian products globally while delivering
              exceptional value to our international clients.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-2xl overflow-hidden border border-emerald-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-300/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors duration-300">
                  Our Vision
                </h3>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the{" "}
                    <span className="font-semibold text-emerald-600">
                      leading global export company
                    </span>{" "}
                    that showcases the best of India to the world. We envision a
                    future where Indian products are recognized and valued in
                    every corner of the globe.
                  </p>

                  <div className="bg-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                    <h4 className="font-semibold text-emerald-800 mb-3">
                      Our Global Impact Goals:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Establishing India as a premium export destination
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Creating sustainable trade partnerships worldwide
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Contributing to India's economic growth and global
                          reputation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Vision Timeline</span>
                    <span className="text-emerald-100">2024-2030</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-2xl overflow-hidden border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  Our Mission
                </h3>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To facilitate{" "}
                    <span className="font-semibold text-blue-600">
                      seamless international trade
                    </span>{" "}
                    by connecting Indian manufacturers with global markets. We
                    are committed to delivering superior quality, exceptional
                    service, and building lasting relationships.
                  </p>

                  <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Our Core Commitments:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Connecting Indian manufacturers with global
                          opportunities
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Ensuring superior quality in every product and service
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Building lasting partnerships for mutual growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Active Since</span>
                    <span className="text-blue-100">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Enhanced */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental principles that guide every aspect of our
                business operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Quality Excellence",
                  description:
                    "Delivering premium quality Indian products that exceed international standards and customer expectations",
                  color: "emerald",
                  percentage: "100%",
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  description:
                    "Building lasting partnerships with global clients through exceptional service and personalized attention",
                  color: "blue",
                  percentage: "24/7",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "Adopting cutting-edge logistics technology and modern practices for efficient export operations",
                  color: "yellow",
                  percentage: "Latest",
                },
                {
                  icon: Handshake,
                  title: "Trust & Transparency",
                  description:
                    "Operating with complete transparency, integrity, and reliability in all international trade dealings",
                  color: "purple",
                  percentage: "Always",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-${value.color}-100 rounded-bl-3xl opacity-50`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-${value.color}-100 text-${value.color}-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="h-8 w-8" />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {value.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {value.description}
                    </p>

                    <div
                      className={`inline-flex items-center px-3 py-1 bg-${value.color}-100 text-${value.color}-700 rounded-full text-sm font-semibold`}
                    >
                      {value.percentage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Commitment Statement */}
          <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Heart className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                Our Commitment to Excellence
              </h3>

              <p className="text-xl md:text-2xl leading-relaxed mb-12 text-emerald-100">
                We are committed to bridging the gap between Indian excellence
                and global demand. Our dedication to quality, reliability, and
                customer satisfaction drives us to continuously innovate our
                services and expand our global reach, creating value for our
                clients and partners worldwide.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "100%", label: "Quality Guarantee", icon: Shield },
                  { number: "24/7", label: "Global Support", icon: Clock },
                  { number: "1+", label: "Years Experience", icon: Calendar },
                  { number: "25+", label: "Countries Served", icon: Globe },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                      <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-emerald-200 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button className="bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Learn More About Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-2xl font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Indian Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of quality Indian products ready for
              global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 bg-${product.color}-600 p-2 rounded-xl`}
                  >
                    <product.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* View Details Button */}
                  <Link
                    to={`/products/${product.title
                      .toLowerCase()
                      .replace(/ /g, "")
                      .replace(/&/g, "and")}`} // Remove spaces and replace '&' with 'and'
                    className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center group-hover:scale-105 transform`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section with Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Shipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for sourcing and exporting quality Indian
              products worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with Sub-categories */}

      {/* Testimonials Section with Photos */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-emerald-900/20 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Client Reviews
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for quality and reliability
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery with Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Export Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-9">
              Premium quality Indian products ready for global markets
            </p>
            <p className="text-2xl text-black max-w-3xl mx-auto ">
              Coming Soon...
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Leadership Team
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Visionary leaders driving innovation and excellence in global
              trade, committed to connecting India with the world through
              quality products and exceptional service.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Founder Card */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative">
                {/* Header Background */}
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-800/30 rounded-full blur-3xl"></div>

                  <div className="relative z-10 text-center">
                    <img
                      src={leadership.founder.image}
                      alt={leadership.founder.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl mx-auto mb-4"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face";
                      }}
                    />
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {leadership.founder.name}
                    </h3>
                    <p className="text-emerald-100 font-semibold mb-4">
                      {leadership.founder.title}
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white font-medium">
                          {leadership.founder.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Founder's Vision
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    {leadership.founder.message}
                  </p>

                  <div className="bg-emerald-50 rounded-2xl p-4 border-l-4 border-emerald-500">
                    <h5 className="font-semibold text-emerald-800 mb-2">
                      Expertise:
                    </h5>
                    <p className="text-emerald-700">
                      {leadership.founder.expertise}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-sm">
                      Connect with Founder
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">Contact:</span>{" "}
                    <span> {leadership.founder.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Card */}
            <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
              <div className="relative">
                {/* Header Background */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-800/30 rounded-full blur-3xl"></div>

                  <div className="relative z-10 text-center">
                    <img
                      src={leadership.ceo.image}
                      alt={leadership.ceo.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl mx-auto mb-4"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face";
                      }}
                    />
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {leadership.ceo.name}
                    </h3>
                    <p className="text-blue-100 font-semibold mb-4">
                      {leadership.ceo.title}
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white font-medium">
                          {leadership.ceo.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      Co-founder's Message
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic mb-6">
                    {leadership.ceo.message}
                  </p>

                  <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      Expertise:
                    </h5>
                    <p className="text-blue-700">{leadership.ceo.expertise}</p>
                  </div>

                  <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="font-semibold text-sm">
                      Connect with Co-founder
                    </span>{" "}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">Contact:</span>{" "}
                    <span> {leadership.ceo.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Export with Us?
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Contact us today to discuss your export requirements and join our
              global success story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 9765924777",
                info2: "+91 9511660982",
                description: "24/7 Support Available",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "dadheglobalexporters@gmail.com",
                description: "Quick Response Guaranteed",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "Chhatrapati Sambhajinagar, Maharashtra, India",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-white/20 p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-xl font-bold text-yellow-400 mb-1">
                    {contact.info}
                  </p>
                  <p className="text-emerald-100 text-sm">
                    {contact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25">
              Get Export Quote Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer with Enhanced Design */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Global Export Ships and Containers"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/98 via-gray-900/85 to-gray-900/95"></div>
          {/* Additional overlay for better text readability */}
          <div className="absolute inset-0 bg-emerald-900/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-emerald-200 to-teal-200 p-3 rounded-xl shadow-lg">
                  <Ship className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    DADHE Global Export
                  </h3>
                  <p className="text-emerald-300 text-sm font-medium">
                    Connecting India to the World
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Your trusted partner for exporting quality Indian products
                worldwide. Building bridges between cultures through exceptional
                trade relations since 2024.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-600/20 backdrop-blur-sm p-2 rounded-lg border border-emerald-500/30">
                    <Globe className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="bg-emerald-600/20 backdrop-blur-sm p-2 rounded-lg border border-emerald-500/30">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="bg-emerald-600/20 backdrop-blur-sm p-2 rounded-lg border border-emerald-500/30">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Products", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-emerald-400">
                Export Products
              </h4>
              <ul className="space-y-3">
                {[
                  "Textiles",
                  "Spices",
                  "Handicrafts",
                  "Food Products",
                  "Electronics",
                ].map((product) => (
                  <li key={product}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <Package className="h-4 w-4 mr-2 text-emerald-500" />
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 DADHE Global Export. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center">
                <Phone className="mr-2" size={16} />
                +91 9765924777
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DADHEGlobalExport;
