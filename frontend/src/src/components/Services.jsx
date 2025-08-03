import React, { useState } from "react";
import {
  Ship,
  Globe,
  Package,
  FileText,
  Shield,
  Truck,
  Anchor,
  CheckCircle,
  ArrowRight,
  Container,
  Plane,
  MapPin,
  Target,
  Zap,
} from "lucide-react";

const ProductsAndServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState("products");

  // Products from CompanyProfile
  const products = [
    {
      icon: Package,
      title: "Gems & Imitation Jewellery",
      description: "Exquisite gems and high-quality imitation jewellery",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subCategories: [
        "Natural Gemstones",
        "Semi-Precious Stones",
        "Fashion Jewellery",
        "Costume Jewellery",
        "Artificial Jewellery",
        "Traditional Designs",
      ],
      color: "purple",
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
      color: "yellow",
    },
    {
      icon: Shield,
      title: "Carpets",
      description: "Handwoven carpets and rugs with traditional craftsmanship",
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subCategories: [
        "Hand-knotted Carpets",
        "Silk Carpets",
        "Wool Carpets",
        "Cotton Dhurries",
        "Prayer Rugs",
        "Designer Carpets",
      ],
      color: "red",
    },
    {
      icon: Zap,
      title: "Pulses",
      description: "High-quality pulses and legumes from Indian farms",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e7c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subCategories: [
        "Chickpeas",
        "Black Gram",
        "Green Gram",
        "Red Lentils",
        "Kidney Beans",
        "Field Peas",
      ],
      color: "green",
    },
    {
      icon: Container,
      title: "Agricultural Products",
      description: "Fresh agricultural produce and processed foods",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subCategories: [
        "Fresh Fruits",
        "Vegetables",
        "Grains & Cereals",
        "Nuts & Dry Fruits",
        "Processed Foods",
        "Organic Products",
      ],
      color: "green",
    },
  ];

  const mainServices = [
    {
      id: 1,
      icon: Ship,
      title: "International Shipping & Logistics",
      description:
        "Complete shipping solutions to deliver your products worldwide",
      features: [
        "Sea Freight Services",
        "Air Freight Express",
        "Door-to-Door Delivery",
        "Container Load Services",
        "Break Bulk Cargo",
        "Temperature Controlled Shipping",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      applications: [
        "Bulk Shipments",
        "Express Delivery",
        "Fragile Goods",
        "Perishable Items",
      ],
    },
    {
      id: 2,
      icon: Package,
      title: "Product Sourcing & Quality Control",
      description:
        "Sourcing premium Indian products with stringent quality control",
      features: [
        "Manufacturer Verification",
        "Quality Inspection Services",
        "Product Sampling",
        "Factory Audits",
        "Compliance Testing",
        "Custom Product Development",
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      applications: [
        "Gems & Jewellery",
        "Spices & Food Products",
        "Cold Pressed Oils",
        "Agricultural Products",
      ],
    },
    {
      id: 3,
      icon: FileText,
      title: "Export Documentation & Compliance",
      description:
        "Complete export documentation and regulatory compliance services",
      features: [
        "Export License Processing",
        "Customs Documentation",
        "Certificate of Origin",
        "Shipping Documents",
        "Insurance Documentation",
        "Trade Finance Support",
      ],
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      applications: [
        "Export Licensing",
        "Customs Clearance",
        "Trade Compliance",
        "Documentation",
      ],
    },
    {
      id: 4,
      icon: Globe,
      title: "Market Research & Development",
      description: "Market intelligence and business development services",
      features: [
        "Market Analysis",
        "Competitor Research",
        "Buyer Identification",
        "Trade Show Participation",
        "Business Matching",
        "Market Entry Strategy",
      ],
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      applications: [
        "New Market Entry",
        "Buyer Development",
        "Market Expansion",
        "Trade Promotion",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive cargo protection and insurance services",
      features: [
        "Full Coverage",
        "Risk Assessment",
        "Claim Support",
        "Policy Management",
      ],
    },
    {
      icon: Container,
      title: "Warehousing & Storage",
      description: "Secure warehousing and inventory management",
      features: [
        "Climate Control",
        "Security Systems",
        "Inventory Tracking",
        "Distribution Services",
      ],
    },
    {
      icon: Truck,
      title: "Domestic Transportation",
      description: "Reliable transportation within India",
      features: [
        "Pickup Services",
        "Last Mile Delivery",
        "Tracking Systems",
        "Express Options",
      ],
    },
    {
      icon: Plane,
      title: "Express Air Services",
      description: "Fast air freight for urgent shipments",
      features: [
        "Same Day Service",
        "Priority Handling",
        "Real-time Tracking",
        "Global Network",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Inquiry & Quotation",
      description: "Submit your requirements and receive detailed quotation",
    },
    {
      step: "02",
      title: "Product Sourcing",
      description: "We source and verify products from trusted suppliers",
    },
    {
      step: "03",
      title: "Quality Inspection",
      description: "Thorough quality check and compliance verification",
    },
    {
      step: "04",
      title: "Documentation",
      description: "Complete export documentation and customs clearance",
    },
    {
      step: "05",
      title: "Shipping & Delivery",
      description: "Secure shipping and timely delivery to destination",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive export solutions and premium Indian products connecting
            global markets. From sourcing to delivery, we handle every aspect of
            international trade.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "products"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Our Products
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "services"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Products Section */}
        {activeTab === "products" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Premium Indian Products
              </h3>
              <p className="text-lg text-gray-600">
                Discover our extensive range of quality Indian products ready for
                global markets
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

                    {/* Sub-categories */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                        Sub-categories
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.subCategories.map((subCat, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <CheckCircle
                              className={`text-${product.color}-500 mr-2 flex-shrink-0`}
                              size={14}
                            />
                            <span>{subCat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View More Button */}
                    <button
                      className={`w-full bg-${product.color}-600 hover:bg-${product.color}-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center group-hover:scale-105 transform`}
                    >
                      View Product Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Export Services
              </h3>
              <p className="text-lg text-gray-600">
                Professional export services to facilitate your international
                trade
              </p>
            </div>

            {/* Main Services - Interactive Section */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Service Navigation */}
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  {mainServices.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        activeService === index
                          ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                          : "bg-white hover:bg-gray-50 shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <service.icon
                          className={`h-6 w-6 mt-1 ${
                            activeService === index
                              ? "text-white"
                              : "text-emerald-600"
                          }`}
                        />
                        <div>
                          <h3
                            className={`font-semibold text-lg mb-2 ${
                              activeService === index
                                ? "text-white"
                                : "text-gray-900"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              activeService === index
                                ? "text-emerald-100"
                                : "text-gray-600"
                            }`}
                          >
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
                      <h3 className="text-2xl font-bold mb-2">
                        {mainServices[activeService].title}
                      </h3>
                      <p className="text-gray-200">
                        {mainServices[activeService].description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Service Features
                        </h4>
                        <ul className="space-y-3">
                          {mainServices[activeService].features.map(
                            (feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Applications
                        </h4>
                        <div className="space-y-2">
                          {mainServices[activeService].applications.map(
                            (app, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <ArrowRight className="h-4 w-4 text-emerald-600" />
                                <span className="text-gray-700">{app}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Additional Services
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
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
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Our Export Process
              </h3>
              <div className="relative">
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>
                <div className="grid md:grid-cols-5 gap-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative text-center">
                      <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-600 text-white rounded-full mb-4 text-xl font-bold shadow-lg">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Global Markets */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Global Markets We Serve
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "North America",
                  "Europe",
                  "Middle East",
                  "Southeast Asia",
                  "Africa",
                  "Australia",
                  "South America",
                  "Far East",
                ].map((market, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsAndServices;
