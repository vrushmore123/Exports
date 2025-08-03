import React from "react";
import {
  ArrowLeft,
  Droplets,
  Leaf,
  Heart,
  Award,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const ColdPressedOils = () => {
  const product = {
    title: "Cold Pressed Oils",
    description:
      "Pure and natural cold pressed oils extracted using traditional methods to preserve nutrients and natural flavor",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      {
        name: "Coconut Oil",
        benefits: [
          "Natural properties",
          "High smoke point",
          "Cooking use",
          "Natural moisturizer",
        ],
        description: "Virgin coconut oil extracted from fresh coconut",
      },
      {
        name: "Sesame Oil",
        benefits: [
          "Rich in nutrients",
          "Traditional use",
          "Good for cooking",
          "Natural flavor",
        ],
        description: "Traditional sesame oil with nutty flavor",
      },
      {
        name: "Groundnut Oil",
        benefits: [
          "High smoke point",
          "Neutral taste",
          "Cooking versatile",
          "Good quality",
        ],
        description: "Premium groundnut oil ideal for cooking",
      },
      {
        name: "Mustard Oil",
        benefits: [
          "Traditional cooking",
          "Natural preservative",
          "Pungent flavor",
          "Popular in India",
        ],
        description: "Traditional mustard oil for Indian cuisine",
      },
      {
        name: "Sunflower Oil",
        benefits: [
          "Light texture",
          "Healthy option",
          "Versatile cooking",
          "Good quality",
        ],
        description: "Light sunflower oil for daily cooking",
      },
      {
        name: "Castor Oil",
        benefits: ["Multi-purpose", "Hair care", "Skin care", "Industrial use"],
        description: "Multi-purpose castor oil for various uses",
      },
    ],
    features: [
      {
        icon: Leaf,
        title: "100% Natural",
        description: "No chemicals or artificial additives",
      },
      {
        icon: Heart,
        title: "Health Benefits",
        description: "Rich in essential nutrients",
      },
      {
        icon: Droplets,
        title: "Cold Pressed",
        description: "Traditional extraction method",
      },
      {
        icon: Award,
        title: "Premium Quality",
        description: "High-grade oil seeds used",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Oil Varieties */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Oil Varieties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.subCategories.map((oil, index) => (
              <div
                key={index}
                className="border border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-colors hover:bg-emerald-50"
              >
                <h3 className="text-xl font-bold text-emerald-600 mb-3">
                  {oil.name}
                </h3>
                <p className="text-gray-600 mb-4">{oil.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Key Features:
                </h4>
                <div className="space-y-2">
                  {oil.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process & Information */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Product Benefits
            </h2>
            <div className="space-y-4">
              {[
                "Natural extraction process",
                "No chemical processing",
                "Retains natural nutrients",
                "Traditional methods used",
                "High quality standards",
                "Export ready products",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center py-2">
                  <Heart className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Selection</h3>
                  <p className="text-emerald-100">
                    Carefully selected high-quality oil seeds
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cold Extraction</h3>
                  <p className="text-emerald-100">
                    Traditional cold pressing method
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Testing</h3>
                  <p className="text-emerald-100">
                    Proper quality checks before packaging
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold mt-8 hover:bg-emerald-50 transition-colors">
              Get Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdPressedOils;
