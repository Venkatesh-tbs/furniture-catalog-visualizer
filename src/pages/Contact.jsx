import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND_INFO, PRODUCTS } from '../data/products';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    furnitureInterest: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Studio Concierge
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-stone-600 text-sm sm:text-base">
          Whether you need fabric swatches mailed to your residence, customized dimension quotes, or showroom appointments, our design team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Contact Form (col-span-7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Inquiry Received
              </h3>
              <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A Furniture Studio concierge has received your request regarding <strong>{formData.furnitureInterest}</strong> and will contact you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', furnitureInterest: 'General Inquiry', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Hayes"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. julian@domain.com"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Furniture Silhouette Interest
                </label>
                <select
                  value={formData.furnitureInterest}
                  onChange={(e) => setFormData({ ...formData, furnitureInterest: e.target.value })}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                >
                  <option value="General Inquiry">General Studio Consultation</option>
                  <option value="Custom Fabric / Swatch Kit">Request Physical Swatch Kit (Complimentary)</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} (${p.price.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Message / Spatial Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your room layout, desired color finish, or questions..."
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-stone-900 hover:bg-brand-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Studio Info (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-900 text-stone-200 rounded-3xl p-8 border border-stone-800 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">
              Studio Showroom
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Address</strong>
                  <span className="text-stone-400">{BRAND_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Opening Hours</strong>
                  <span className="text-stone-400">{BRAND_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Telephone Concierge</strong>
                  <span className="text-stone-400">{BRAND_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">Direct Email</strong>
                  <span className="text-stone-400">{BRAND_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <div className="flex items-center gap-2 text-xs text-brand-300 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Private showroom appointments available on Sundays</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
