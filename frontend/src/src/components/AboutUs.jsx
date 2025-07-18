import React from 'react';
import { Factory, Award, Users, Calendar, Wrench, Shield, Target, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '1998', event: 'Company Founded', description: 'Started as a small fabrication unit' },
    { year: '2005', event: 'First Major Contract', description: 'Secured large industrial project' },
    { year: '2010', event: 'Facility Expansion', description: 'Doubled production capacity' },
    { year: '2015', event: 'ISO Certification', description: 'Achieved quality standards' },
    { year: '2020', event: 'Modern Equipment', description: 'Invested in CNC machinery' },
    { year: '2023', event: '25 Years Strong', description: 'Celebrated silver jubilee' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'Uncompromising quality standards in every project we undertake'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail and precision in all our fabrication work'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service'
    },
    {
      icon: Wrench,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of latest technologies'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      position: 'Founder & Managing Director',
      experience: '25+ Years',
      expertise: 'Structural Engineering'
    },
    {
      name: 'Priya Patel',
      position: 'Operations Manager',
      experience: '15+ Years',
      expertise: 'Project Management'
    },
    {
      name: 'Amit Kumar',
      position: 'Lead Fabricator',
      experience: '18+ Years',
      expertise: 'Welding & Fabrication'
    },
    {
      name: 'Sunita Desai',
      position: 'Quality Controller',
      experience: '12+ Years',
      expertise: 'Quality Assurance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Trimurti Fabrication
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With over 25 years of excellence in steel fabrication and metalworking, we have established ourselves 
            as a trusted partner for industries across Maharashtra. Our journey began in 1998 with a simple vision: 
            to deliver exceptional quality steel fabrication solutions that exceed our clients' expectations.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 1998 by Rajesh Sharma, Trimurti Fabrication started as a small workshop with big dreams. 
              What began as a modest operation has grown into one of Maharashtra's most respected steel fabrication companies.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over the years, we have continuously invested in advanced technology, skilled workforce, and quality 
              systems to ensure we deliver world-class fabrication solutions. Our commitment to excellence has 
              earned us the trust of over 500 satisfied clients.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">State-of-the-art Facility</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Our facility"
              className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-1">{member.experience}</p>
                <p className="text-gray-500 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Trimurti Fabrication?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">25+ Years of Experience</h4>
                  <p className="text-gray-600">Proven track record in steel fabrication industry</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                  <p className="text-gray-600">Modern CNC machines and welding equipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                  <p className="text-gray-600">ISO 9001:2015 certified quality management</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Skilled Workforce</h4>
                  <p className="text-gray-600">Trained professionals with years of expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Timely Delivery</h4>
                  <p className="text-gray-600">Committed to meeting project deadlines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                  <p className="text-gray-600">Cost-effective solutions without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;