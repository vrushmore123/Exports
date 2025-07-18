import React, { useState } from 'react';
import { 
  Building, 
  Factory, 
  Wrench, 
  Zap, 
  Shield, 
  Cog, 
  Layers, 
  CheckCircle,
  ArrowRight,
  Settings,
  Truck,
  HardHat
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      id: 1,
      icon: Building,
      title: 'Structural Steel Fabrication',
      description: 'Complete structural steel solutions for industrial and commercial projects',
      features: [
        'Pre-engineered Building Structures',
        'Industrial Shed Construction',
        'Warehouse Framework',
        'Multi-story Building Frames',
        'Bridges and Walkways',
        'Structural Repairs & Modifications'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      applications: ['Manufacturing Plants', 'Warehouses', 'Commercial Buildings', 'Infrastructure Projects']
    },
    {
      id: 2,
      icon: Factory,
      title: 'Custom Metal Fabrication',
      description: 'Precision metal fabrication services using advanced machinery and techniques',
      features: [
        'CNC Plasma Cutting',
        'Laser Cutting Services',
        'Sheet Metal Fabrication',
        'Pipe & Tube Bending',
        'Welding & Joining',
        'Surface Treatment & Finishing'
      ],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      applications: ['Machinery Components', 'Automotive Parts', 'Agricultural Equipment', 'Custom Prototypes']
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Steel Furniture & Fixtures',
      description: 'Durable and stylish steel furniture solutions for offices and industries',
      features: [
        'Office Desks & Workstations',
        'Filing Cabinets & Storage',
        'Industrial Shelving Systems',
        'Cafeteria Furniture',
        'Locker Systems',
        'Custom Furniture Design'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      applications: ['Corporate Offices', 'Educational Institutions', 'Healthcare Facilities', 'Industrial Facilities']
    },
    {
      id: 4,
      icon: Cog,
      title: 'Installation & Maintenance',
      description: 'Professional installation and ongoing maintenance services',
      features: [
        'On-site Installation',
        'Equipment Assembly',
        'Structural Erection',
        'Preventive Maintenance',
        'Repair Services',
        'Retrofitting Solutions'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      applications: ['Industrial Plants', 'Commercial Buildings', 'Infrastructure', 'Residential Projects']
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Design & Engineering',
      description: 'CAD design and structural engineering support',
      features: ['3D Modeling', 'Structural Analysis', 'Material Selection', 'Project Planning']
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Comprehensive quality assurance and testing',
      features: ['Material Testing', 'Welding Inspection', 'Dimensional Verification', 'Compliance Certification']
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Efficient delivery and transportation services',
      features: ['Timely Delivery', 'Careful Handling', 'Installation Support', 'Progress Tracking']
    },
    {
      icon: HardHat,
      title: 'Consultation',
      description: 'Expert consultation and project advisory',
      features: ['Feasibility Studies', 'Cost Estimation', 'Timeline Planning', 'Technical Guidance']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your requirements and project specifications'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Creating detailed drawings and project timeline'
    },
    {
      step: '03',
      title: 'Fabrication',
      description: 'Precision manufacturing using advanced equipment'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Rigorous testing and quality assurance processes'
    },
    {
      step: '05',
      title: 'Delivery & Installation',
      description: 'Professional installation and project handover'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive steel fabrication and metalworking solutions tailored to meet your specific needs. 
            From design to installation, we deliver excellence at every step.
          </p>
        </div>

        {/* Main Services - Interactive Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {mainServices.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeService === index
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white hover:bg-gray-50 shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <service.icon className={`h-6 w-6 mt-1 ${activeService === index ? 'text-white' : 'text-blue-600'}`} />
                      <div>
                        <h3 className={`font-semibold text-lg mb-2 ${activeService === index ? 'text-white' : 'text-gray-900'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm ${activeService === index ? 'text-blue-100' : 'text-gray-600'}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={mainServices[activeService].image}
                    alt={mainServices[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{mainServices[activeService].title}</h3>
                    <p className="text-gray-200">{mainServices[activeService].description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Features</h4>
                      <ul className="space-y-3">
                        {mainServices[activeService].features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Applications</h4>
                      <div className="space-y-2">
                        {mainServices[activeService].applications.map((app, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Manufacturing',
              'Construction',
              'Automotive',
              'Agriculture',
              'Mining',
              'Energy',
              'Healthcare',
              'Education'
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;