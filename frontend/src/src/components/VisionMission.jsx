import React from 'react';
import { 
  Eye, 
  Target, 
  Heart, 
  Star, 
  Shield, 
  Users, 
  Zap, 
  Globe,
  Award,
  Lightbulb,
  TrendingUp,
  Handshake
} from 'lucide-react';

const VisionMission = () => {
  const coreValues = [
    {
      icon: Shield,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering the highest quality in every project',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting partnerships through exceptional service and support',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously adopting new technologies and improving our processes',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical business practices',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Investing in our people, technology, and capabilities for sustainable growth',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Responsible manufacturing practices that protect our environment',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  const objectives = [
    {
      title: 'Market Leadership',
      description: 'Maintain our position as the leading steel fabrication company in Maharashtra',
      target: '2024-2025'
    },
    {
      title: 'Technology Advancement',
      description: 'Invest in cutting-edge machinery and digital fabrication technologies',
      target: '2024-2026'
    },
    {
      title: 'Skilled Workforce',
      description: 'Develop and maintain a highly skilled team of fabrication professionals',
      target: 'Ongoing'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Achieve 95%+ customer satisfaction rating across all projects',
      target: '2024-2025'
    },
    {
      title: 'Sustainable Practices',
      description: 'Implement eco-friendly manufacturing processes and waste reduction',
      target: '2024-2027'
    },
    {
      title: 'Geographic Expansion',
      description: 'Expand operations to neighboring states and serve national clients',
      target: '2025-2028'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'ISO 9001:2015 Certified',
      description: 'Quality management system certification'
    },
    {
      icon: Star,
      title: '500+ Satisfied Clients',
      description: 'Building trust across industries'
    },
    {
      icon: Target,
      title: '1000+ Projects Completed',
      description: 'Successfully delivered projects on time'
    },
    {
      icon: Users,
      title: '50+ Skilled Professionals',
      description: 'Expert team of fabricators and engineers'
    }
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
            Driven by our vision to be the leading steel fabrication company, we are committed to delivering 
            exceptional quality and innovative solutions that exceed our clients' expectations.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be the most trusted and innovative steel fabrication company in India, recognized for our 
                commitment to quality, sustainability, and customer satisfaction. We envision a future where 
                our steel structures contribute to building a stronger, more sustainable infrastructure for 
                generations to come.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Leading steel fabrication company in India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Recognized for quality and innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Contributing to sustainable infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-bl-full opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To deliver exceptional steel fabrication solutions through innovative engineering, advanced 
                technology, and skilled craftsmanship. We are committed to exceeding customer expectations 
                while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Deliver exceptional fabrication solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Exceed customer expectations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Maintain highest quality standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${value.color} rounded-lg mb-4`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{objective.title}</h4>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                    {objective.target}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
            <p className="text-xl leading-relaxed mb-8">
              We are committed to transforming the steel fabrication industry through innovation, quality, and 
              sustainable practices. Our dedication to excellence drives us to continuously improve our processes, 
              invest in our people, and deliver solutions that create lasting value for our customers and communities.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Quality Assurance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">25+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;