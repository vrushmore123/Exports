import React from "react";
import { ArrowLeft, Gem, Crown, Star, Award, Shield, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const GemsAndImitationJewellery = () => {
  const product = {
    title: "Gems & Imitation Jewellery",
    description:
      "Exquisite collection of natural gemstones and high-quality imitation jewellery crafted with precision and traditional artistry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    collections: [
      {
        name: "Natural Gemstones",
        items: ["Ruby", "Sapphire", "Emerald", "Diamond", "Topaz", "Amethyst"],
        description: "Authentic precious and semi-precious stones",
        price: "Premium Range",
      },
      {
        name: "Semi-Precious Stones",
        items: ["Turquoise", "Garnet", "Moonstone", "Opal", "Jade", "Coral"],
        description:
          "Beautiful semi-precious stones for various jewelry pieces",
        price: "Mid Range",
      },
      {
        name: "Fashion Jewellery",
        items: [
          "Necklaces",
          "Earrings",
          "Bracelets",
          "Rings",
          "Pendants",
          "Brooches",
        ],
        description: "Contemporary designs for modern fashion",
        price: "Affordable Range",
      },
      {
        name: "Costume Jewellery",
        items: [
          "Statement Pieces",
          "Party Wear",
          "Daily Wear",
          "Vintage Style",
          "Bohemian",
          "Minimalist",
        ],
        description: "Trendy costume jewelry for all occasions",
        price: "Budget Friendly",
      },
      {
        name: "Traditional Designs",
        items: [
          "Kundan",
          "Meenakari",
          "Temple Jewelry",
          "Antique",
          "Tribal",
          "Regional",
        ],
        description: "Heritage designs reflecting Indian craftsmanship",
        price: "Heritage Collection",
      },
    ],
    features: [
      {
        icon: Gem,
        title: "Premium Quality",
        description: "Carefully selected stones and materials",
      },
      {
        icon: Crown,
        title: "Exquisite Craftsmanship",
        description: "Handcrafted by skilled artisans",
      },
      {
        icon: Star,
        title: "Certified Authenticity",
        description: "Genuine stones with certificates",
      },
      {
        icon: Award,
        title: "Award Winning Designs",
        description: "Recognized by jewelry associations",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/60"></div>
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Collections */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Collections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.collections.map((collection, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:border-purple-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-600">
                    {collection.name}
                  </h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {collection.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {collection.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quality Assurance
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Eye className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Expert Inspection
                  </h3>
                  <p className="text-gray-600">
                    Each piece undergoes thorough quality inspection
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Certified Authenticity
                  </h3>
                  <p className="text-gray-600">
                    Genuine gemstones with authenticity certificates
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Industry Standards
                  </h3>
                  <p className="text-gray-600">
                    Compliant with international jewelry standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Customization Services</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Custom jewelry design</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Stone setting services</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Bulk order customization</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Private labeling</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Packaging customization</span>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold mt-8 hover:bg-purple-50 transition-colors">
              Request Custom Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemsAndImitationJewellery;
