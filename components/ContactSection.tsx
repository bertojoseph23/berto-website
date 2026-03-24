"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<null | "sending" | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setFormState({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">TRANSMISSION</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-[#9F0000]">CONTACT</h3>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>
              Ready to collaborate on your next digital project? Send a transmission and I'll respond within 48 hours.
            </p>

            <div className="mt-12 space-y-4">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">LOCATION</h4>
                <p>San Francisco, CA</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">EMAIL</h4>
                <p>hello@bertojoseph.com</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2">SOCIAL</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#9F0000] transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-[#9F0000] transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-[#9F0000] transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2 block">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 focus:border-[#9F0000] text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2 block">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/20 focus:border-[#9F0000] text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm uppercase tracking-widest text-[#9F0000] red-glow mb-2 block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-white/5 border-white/20 focus:border-[#9F0000] text-white resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#9F0000] hover:bg-[#9F0000]/80 text-white font-bold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && <p className="text-[#9F0000] red-glow text-center">Message sent successfully!</p>}

            {status === "error" && (
              <p className="text-red-400 text-center">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

