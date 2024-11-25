"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
    setIsSubmitting(false)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormState({ name: '', email: '', message: '' }) // Reset form after submission
  }, [])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }, [])

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
      <Input
        key="name-input"
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formState.name}
        onChange={handleInputChange}
      />
      <Input
        key="email-input"
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formState.email}
        onChange={handleInputChange}
      />
      <Textarea
        key="message-input"
        name="message"
        placeholder="Your Message"
        required
        value={formState.message}
        onChange={handleInputChange}
      />
      <Button key="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

