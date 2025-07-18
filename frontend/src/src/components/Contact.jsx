import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Calendar,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@trimurtifabrication.com",
        "sales@trimurtifabrication.com",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Plot No. 123, Industrial Area", "Pune, Maharashtra - 411019"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const services = [
    "Structural Steel Fabrication",
    "Custom Metal Fabrication",
    "Steel Furniture",
    "Installation & Maintenance",
    "Design & Engineering",
    "Consultation",
    "Other",
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
  ];

  return (
    <section ref={contactRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to start your next project? Contact us today for a free
            consultation and quote. Our expert team is here to help you bring
            your vision to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 ${info.color} rounded-full mb-4`}
              >
                <info.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700">
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please describe your project requirements..."
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Office Information */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Main Office</h4>
                    <p className="text-gray-600">
                      Plot No. 123, Industrial Area
                      <br />
                      Pune, Maharashtra - 411019
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      +91 9850139929
                      <br />
                      +91 9370776727
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      info@trimurtifabrication.com
                      <br />
                      sales@trimurtifabrication.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Working Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Location Map
              </h4>
              <p className="text-gray-600 mb-4">
                Interactive map would be embedded here
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                Get Directions
              </button>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-gray-300 mb-6">
                Stay connected with us on social media for updates and news
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Emergency Contact
          </h3>
          <p className="text-red-700 mb-4">
            For urgent fabrication needs or emergency repairs, contact us 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Emergency Hotline
            </a>
            <a
              href="https://wa.me/919876543210"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
