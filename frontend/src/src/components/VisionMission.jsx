import React from "react";
import {
  Eye,
  Target,
  Heart,
  Star,
  Shield,
  Users,
  Globe,
  Ship,
  Award,
  Lightbulb,
  TrendingUp,
  Handshake,
} from "lucide-react";

const VisionMission = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description:
        "Delivering premium quality Indian products that meet international standards",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building lasting partnerships with global clients through exceptional service",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Adopting modern logistics and technology for efficient export operations",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Handshake,
      title: "Trust & Transparency",
      description:
        "Operating with complete transparency in all international trade dealings",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "Promoting sustainable trade practices and long-term business relationships",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description:
        "Bridging cultures and markets through seamless international trade",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  const objectives = [
    {
      title: "Market Expansion",
      description:
        "Expand our export network to 50+ countries across all continents",
      target: "2024-2027",
    },
    {
      title: "Digital Transformation",
      description:
        "Implement advanced digital platforms for order tracking and customer service",
      target: "2024-2025",
    },
    {
      title: "Quality Certification",
      description:
        "Achieve international certifications for all product categories",
      target: "2024-2026",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Maintain 98%+ customer satisfaction rating across all international markets",
      target: "2024-2025",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Develop efficient supply chain networks for faster delivery times",
      target: "2024-2026",
    },
    {
      title: "Sustainable Practices",
      description:
        "Implement eco-friendly packaging and carbon-neutral shipping options",
      target: "2025-2027",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Export Excellence Award",
      description: "Recognized for outstanding export performance",
    },
    {
      icon: Star,
      title: "25+ Countries Served",
      description: "Successfully exporting to global markets",
    },
    {
      icon: Target,
      title: "5000+ Shipments",
      description: "Successfully delivered worldwide",
    },
    {
      icon: Users,
      title: "500+ Global Clients",
      description: "Trusted by businesses worldwide",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Driven by our vision to connect India with the world, we are
            committed to promoting Indian products globally while delivering
            exceptional value to our international clients.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-bl-full opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the leading global export company that showcases the best
                of India to the world. We envision a future where Indian
                products are recognized and valued in every corner of the globe,
                contributing to India's economic growth and international
                reputation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Leading Indian export company globally
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Promoting Made in India worldwide
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Contributing to India's economic growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To facilitate seamless international trade by connecting Indian
                manufacturers with global markets. We are committed to
                delivering superior quality products, exceptional service, and
                building lasting relationships that promote mutual growth and
                prosperity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Connect Indian manufacturers globally
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Deliver superior quality products
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Build lasting global partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${value.color} rounded-lg mb-4`}
                >
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Strategic Objectives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {objective.title}
                  </h4>
                  <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-medium">
                    {objective.target}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-xl leading-relaxed mb-8">
              We are committed to bridging the gap between Indian excellence and
              global demand. Our dedication to quality, reliability, and
              customer satisfaction drives us to continuously innovate our
              services and expand our global reach, creating value for our
              clients and partners worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-emerald-200">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-emerald-200">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-emerald-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
