import React from "react";
import {
  ArrowLeft,
  Home,
  Award,
  Palette,
  Users,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Carpets = () => {
  const product = {
    title: "Handwoven Carpets & Rugs",
    description:
      "Exquisite collection of handwoven carpets and rugs showcasing traditional Indian craftsmanship and contemporary designs",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: [
      {
        name: "Hand-knotted Carpets",
        materials: ["Wool", "Silk", "Cotton", "Jute"],
        description: "Premium hand-knotted carpets with intricate patterns",
        origin: "Kashmir, Rajasthan, Uttar Pradesh",
      },
      {
        name: "Silk Carpets",
        materials: ["Pure Silk", "Silk Blend", "Art Silk"],
        description: "Luxurious silk carpets with lustrous finish",
        origin: "Kashmir, Varanasi",
      },
      {
        name: "Wool Carpets",
        materials: ["Pure Wool", "Wool Blend", "New Zealand Wool"],
        description: "Durable and comfortable wool carpets",
        origin: "Rajasthan, Punjab",
      },
      {
        name: "Cotton Dhurries",
        materials: ["Cotton", "Cotton-Jute Mix", "Organic Cotton"],
        description: "Flat-woven cotton carpets perfect for modern homes",
        origin: "Rajasthan, Gujarat",
      },
      {
        name: "Prayer Rugs",
        materials: ["Wool", "Silk", "Cotton"],
        description: "Traditional prayer rugs with Islamic motifs",
        origin: "Kashmir, Uttar Pradesh",
      },
      {
        name: "Designer Carpets",
        materials: ["Mixed Fibers", "Wool-Silk Blend", "Synthetic"],
        description: "Contemporary designs for modern interiors",
        origin: "Pan India",
      },
    ],
    features: [
      {
        icon: Home,
        title: "Handcrafted Excellence",
        description: "Each carpet handwoven by skilled artisans",
      },
      {
        icon: Palette,
        title: "Rich Patterns",
        description: "Traditional and contemporary designs",
      },
      {
        icon: Award,
        title: "Premium Quality",
        description: "High-quality materials and construction",
      },
      {
        icon: Users,
        title: "Artisan Made",
        description: "Supporting traditional craftspeople",
      },
    ],
    specifications: {
      "Knot Density": "100-1000 knots per sq inch",
      Materials: "Wool, Silk, Cotton, Jute",
      "Sizes Available": "2x3 ft to 12x18 ft",
      Thickness: "8mm to 25mm",
      Patterns: "Traditional, Contemporary, Custom",
      Colors: "Natural dyes and modern colorfast dyes",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/60"></div>
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
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Carpet Categories */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Carpet Collections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.categories.map((category, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:border-red-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-red-600 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Materials:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.materials.map((material, materialIndex) => (
                      <span
                        key={materialIndex}
                        className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Origin:</strong> {category.origin}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications & Heritage */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Product Specifications
            </h2>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b border-gray-100"
                  >
                    <span className="font-semibold text-gray-700">{key}:</span>
                    <span className="text-gray-600 text-right">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Heritage & Craftsmanship
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Traditional Techniques</h3>
                  <p className="text-red-100">
                    Centuries-old weaving methods passed down through
                    generations
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Skilled Artisans</h3>
                  <p className="text-red-100">
                    Master weavers with decades of experience in carpet making
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Global Recognition</h3>
                  <p className="text-red-100">
                    Indian carpets appreciated worldwide for their quality and
                    beauty
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold mt-8 hover:bg-red-50 transition-colors">
              View Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carpets;
