import React from "react";
import { ArrowLeft, Package, Star, Shield, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const SpicesAndFoodProducts = () => {
  const product = {
    title: "Spices & Food Products",
    description:
      "Authentic Indian spices and organic food products sourced directly from trusted farmers and manufacturers across India",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subCategories: [
      {
        name: "Whole Spices",
        items: [
          "Cardamom",
          "Cinnamon",
          "Black Pepper",
          "Cloves",
          "Nutmeg",
          "Bay Leaves",
        ],
        description: "Premium quality whole spices with rich aroma and flavor",
      },
      {
        name: "Ground Spices",
        items: [
          "Turmeric Powder",
          "Red Chili Powder",
          "Coriander Powder",
          "Cumin Powder",
          "Garam Masala",
        ],
        description:
          "Freshly ground spices maintaining natural color and taste",
      },
      {
        name: "Organic Rice",
        items: [
          "Basmati Rice",
          "Brown Rice",
          "White Rice",
          "Parboiled Rice",
          "Jasmine Rice",
        ],
        description:
          "Premium quality rice varieties from select growing regions",
      },
      {
        name: "Tea & Coffee",
        items: [
          "Black Tea",
          "Green Tea",
          "Herbal Tea",
          "Arabica Coffee",
          "Robusta Coffee",
        ],
        description:
          "Premium tea leaves and coffee beans from renowned plantations",
      },
    ],
    features: [
      {
        icon: Shield,
        title: "Quality Assured",
        description: "High quality products with proper testing",
      },
      {
        icon: Globe,
        title: "Export Ready",
        description: "Meeting international food safety standards",
      },
      {
        icon: Award,
        title: "Premium Grade",
        description: "Carefully selected and processed products",
      },
      {
        icon: Package,
        title: "Secure Packaging",
        description: "Proper packaging to preserve freshness",
      },
    ],
    specifications: {
      Packaging: "Various sizes available",
      "Shelf Life": "12-24 months",
      Origin: "India",
      Quality: "Export grade",
      Certifications: "FSSAI approved",
      "Minimum Order": "As per requirement",
    },
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
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
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

        {/* Product Categories */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-emerald-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.subCategories.map((category, index) => (
              <div
                key={index}
                className="border border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-colors hover:bg-emerald-50"
              >
                <h3 className="text-xl font-bold text-emerald-600 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Product Specifications
            </h2>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(
                ([key, value], index) => (
                  <div
                    key={index}
                    className="flex justify-between py-3 border-b border-emerald-100"
                  >
                    <span className="font-semibold text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our Products?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Star className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Premium Quality</h3>
                  <p className="text-emerald-100">
                    High-grade products sourced from trusted suppliers
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Quality Tested</h3>
                  <p className="text-emerald-100">
                    All products undergo proper quality checks
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Export Ready</h3>
                  <p className="text-emerald-100">
                    Products ready for international markets
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold mt-8 hover:bg-emerald-50 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpicesAndFoodProducts;
