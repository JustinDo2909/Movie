import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SignUp = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://example.com/film-background.jpg')",
        }}
      ></div>

      {/* Sign Up Form */}
      <div className="relative flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-70 p-10 rounded-xl shadow-xl max-w-sm w-full"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Create an Account
          </h2>

          <form className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-4 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-4 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>

            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className={`w-full py-3 mt-4 font-semibold text-lg rounded-lg bg-red-600 text-white transition-all ${
                isHovered ? 'shadow-lg' : 'shadow-md'
              }`}
            >
              Sign Up
            </motion.button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center text-neutral-400">
            <p className="mb-2">
              Already have an account? <a href="login" className="text-red-500">Log In</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignUp
