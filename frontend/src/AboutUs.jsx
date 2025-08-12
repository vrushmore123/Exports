import React from 'react';
import { Globe, Award, Users, Leaf, Gem, Palette, Target, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const products = [
    { name: 'Spices', description: 'Bold flavors of authentic Indian spices' },
    { name: 'Cold-Pressed Oils', description: 'Pure and natural oils with traditional methods' },
    { name: 'Agro Products', description: 'Fresh agricultural products from trusted farmers' },
    { name: 'Imitation Jewelry', description: 'Beautiful crafted jewelry pieces' },
    { name: 'Handwoven Carpets', description: 'Traditional carpets showcasing Indian craftsmanship' }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Delivering India\'s finest treasures to the global marketplace'
    },
    {
      icon: Users,
      title: 'Trusted Partners',
      description: 'Working closely with farmers, artisans, and producers across India'
    },
    {
      icon: Target,
      title: 'Authenticity',
      description: 'Every product carries the essence of authenticity and excellence'
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'Quality isn\'t a feature — it\'s a promise we make to every customer'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dadhe Global Exporters – Delivering India to the World
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Dadhe Global Exporters, we go beyond borders to bring the finest treasures of India to the global marketplace. 
            We are a modern export company rooted in rich traditions — proudly dealing in high-quality spices, cold-pressed oils, 
            agro products, imitation jewelry, and handwoven carpets.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began with a simple belief: <strong>"Quality isn't a feature — it's a promise."</strong>
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We work closely with trusted farmers, artisans, and producers across India to ensure every product we export 
              carries the essence of authenticity and excellence. From the bold flavors of Indian spices to the purity of 
              natural oils, every shipment tells a story — of care, culture, and craftsmanship.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Global Export Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Premium Quality Products</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Indian spices and products"
              className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Premium Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {index === 0 && <Leaf className="h-8 w-8 text-green-600 mr-3" />}
                  {index === 1 && <Gem className="h-8 w-8 text-yellow-600 mr-3" />}
                  {index === 2 && <Globe className="h-8 w-8 text-blue-600 mr-3" />}
                  {index === 3 && <Palette className="h-8 w-8 text-purple-600 mr-3" />}
                  {index === 4 && <Target className="h-8 w-8 text-red-600 mr-3" />}
                  <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
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

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-orange-50 to-red-100 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Dadhe Global Exporters?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Authentic Indian Products</h4>
                  <p className="text-gray-600">Genuine products sourced directly from trusted farmers and artisans</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Promise</h4>
                  <p className="text-gray-600">Every product carries our promise of authenticity and excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-gray-600">Delivering India's treasures to markets worldwide</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Rich Traditions</h4>
                  <p className="text-gray-600">Modern export company rooted in India's rich cultural traditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Diverse Portfolio</h4>
                  <p className="text-gray-600">Spices, oils, agro products, jewelry, and handwoven carpets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Care & Craftsmanship</h4>
                  <p className="text-gray-600">Every shipment tells a story of care, culture, and craftsmanship</p>
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
