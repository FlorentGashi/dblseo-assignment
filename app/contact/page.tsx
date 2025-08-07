"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(512) 555-1234", "Emergency 24/7"],
    action: "tel:+15125551234"
  },
  {
    icon: Mail,
    title: "Email", 
    details: ["info@abcplumber-austin.com", "Response within 2 hours"],
    action: "mailto:info@abcplumber-austin.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["1234 Congress Ave", "Austin, TX 78701"],
    action: null
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 7AM-7PM", "Emergency: 24/7"],
    action: null
  }
];

const services = [
  "Drain Cleaning",
  "Water Heater Repair/Installation", 
  "Leak Detection",
  "Emergency Plumbing",
  "Pipe Repair/Replacement",
  "Toilet Repair/Installation",
  "Faucet Installation",
  "Sewer Line Services",
  "Garbage Disposal",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    priority: "normal",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        priority: "normal",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="bg-blue-600 text-white border-blue-600">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact ABC Plumber
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              
              Ready to solve your plumbing problems? Contact Austin&lsquo;s most trusted plumbing 
              professionals today. We&lsquo;re here to help with free estimates, emergency services, 
              and expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-green-600 text-white border-green-600">
                Free Estimates
              </Badge>
              <Badge variant="outline" className="bg-red-600 text-white border-red-600">
                24/7 Emergency
              </Badge>
              <Badge variant="outline" className="bg-yellow-600 text-white border-yellow-600">
                Same-Day Service
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {isSubmitted ? "Thank You!" : "Get Your Free Estimate"}
                  </CardTitle>
                  {!isSubmitted && (
                    <p className="text-gray-600">
                      Fill out the form below and we&apos;ll get back to you within 2 hours with your free estimate.
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center space-y-4 py-8">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                      <h3 className="text-xl font-semibold text-gray-900">Message Sent Successfully!</h3>
                      <p className="text-gray-600">
                        We&apos;ve received your request and will contact you within 2 hours to discuss your plumbing needs.
                      </p>
                      <p className="text-sm text-gray-500">
                        For emergencies, please call (512) 555-1234 immediately.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(512) 555-0123"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priority Level
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="priority"
                              value="normal"
                              checked={formData.priority === "normal"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Normal</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="priority"
                              value="urgent"
                              checked={formData.priority === "urgent"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span>Urgent</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="priority"
                              value="emergency"
                              checked={formData.priority === "emergency"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span className="text-red-600">Emergency</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Describe Your Plumbing Issue
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          
                          placeholder="Please describe your plumbing issue in detail. Include when it started, what you&apos;ve tried, and any other relevant information."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message & Get Free Estimate
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted by ABC Plumber regarding your plumbing needs.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                              {info.action ? (
                                <a href={info.action} className="space-y-1 hover:text-blue-600 transition-colors">
                                  {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className={detailIndex === 0 ? "font-medium" : "text-sm text-gray-600"}>
                                      {detail}
                                    </p>
                                  ))}
                                </a>
                              ) : (
                                <div className="space-y-1">
                                  {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className={detailIndex === 0 ? "font-medium" : "text-sm text-gray-600"}>
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Notice */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-2">Plumbing Emergency?</h3>
                      <p className="text-red-700 mb-4">
                        Don&apos;t wait! For burst pipes, major leaks, or no hot water, call our emergency line immediately.
                      </p>
                      <Button className="bg-red-600 hover:bg-red-700" asChild>
                        <a href="tel:+15125551234">Call Emergency Line</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We proudly serve the greater Austin metropolitan area, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      "Austin", "Round Rock", "Cedar Park", "Georgetown",
                      "Pflugerville", "Leander", "Lake Travis", "Bee Cave",
                      "Lakeway", "West Lake Hills", "Rollingwood", "Sunset Valley"
                    ].map((area) => (
                      <div key={area} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Austin, serving the entire metropolitan area.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13776.631843709153!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1635959345738!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ABC Plumber Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}