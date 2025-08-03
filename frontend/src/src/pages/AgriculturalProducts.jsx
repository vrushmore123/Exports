import React from "react";

const AgriculturalProducts = () => {
  const product = {
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
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sub-Categories
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.subCategories.map((subCat, index) => (
                <li key={index}>{subCat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalProducts;
