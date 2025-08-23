'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function InteractiveReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    review: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Review submitted:', { ...formData, rating })
    alert('Thank you for your review! We appreciate your feedback.')
  }

  return (
    <Card className="bg-black/10 border-[#8A9A5B]/20">
      <CardHeader>
        <CardTitle className="text-[#E8EDE6] text-center text-2xl font-bold">
          Leave Us a Review
        </CardTitle>
        <p className="text-[#E8EDE6]/80 text-center">
          Share your experience and help other homeowners make informed decisions
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#E8EDE6] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#8A9A5B]/30 rounded-md bg-black/20 text-[#E8EDE6] placeholder-[#E8EDE6]/50 focus:border-[#8A9A5B] focus:outline-none transition-colors"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#E8EDE6] mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-[#8A9A5B]/30 rounded-md bg-black/20 text-[#E8EDE6] placeholder-[#E8EDE6]/50 focus:border-[#8A9A5B] focus:outline-none transition-colors"
                placeholder="Dallas, TX"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#E8EDE6] mb-2">
              Service Received *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-3 border border-[#8A9A5B]/30 rounded-md bg-black/20 text-[#E8EDE6] placeholder-[#E8EDE6]/50 focus:border-[#8A9A5B] focus:outline-none transition-colors [&>option]:bg-white [&>option]:text-black"
              required
            >
              <option value="" className="bg-white text-black">Select a service</option>
              <option value="Roof Replacement" className="bg-white text-black">Roof Replacement</option>
              <option value="Roof Repair" className="bg-white text-black">Roof Repair</option>
              <option value="Emergency Repair" className="bg-white text-black">Emergency Repair</option>
              <option value="Roof Inspection" className="bg-white text-black">Roof Inspection</option>
              <option value="Commercial Roofing" className="bg-white text-black">Commercial Roofing</option>
              <option value="Storm Damage Repair" className="bg-white text-black">Storm Damage Repair</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#E8EDE6] mb-2">
              Rating *
            </label>
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onMouseEnter={() => setHoverRating(num)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(num)}
                  className="transition-all duration-200 hover:scale-110"
                >
                  <Star 
                    className={`w-8 h-8 ${
                      num <= (hoverRating || rating) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-[#8A9A5B] hover:text-yellow-400'
                    }`} 
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-[#E8EDE6]/70">
                You rated us {rating} star{rating !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="review" className="block text-sm font-medium text-[#E8EDE6] mb-2">
              Your Review *
            </label>
            <textarea
              id="review"
              name="review"
              rows={4}
              value={formData.review}
              onChange={handleInputChange}
              className="w-full p-3 border border-[#8A9A5B]/30 rounded-md bg-black/20 text-[#E8EDE6] placeholder-[#E8EDE6]/50 focus:border-[#8A9A5B] focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your experience with Apex Roofing. What made your experience exceptional?"
              required
            />
            <p className="text-xs text-[#E8EDE6]/60 mt-1">
              {formData.review.length}/500 characters
            </p>
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#8A9A5B] hover:bg-[#4A6741] text-white font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg"
            disabled={!rating || !formData.name || !formData.location || !formData.service || !formData.review}
          >
            Submit Review
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
