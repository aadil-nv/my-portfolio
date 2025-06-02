import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />
      
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
               transition: 'background-image 0.3s ease'
             }}
        />
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/10 to-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${10 + i * 10}%`,
            }}
            animate={{
              y: ['-100vh', '100vh'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="text-center max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-white mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hello, Hi
          </motion.h1>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(255,255,255,0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Muhammed Aadil Nv</span>
          </motion.h2>
        </motion.div>

        {/* Position */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <motion.h3 
            className="text-2xl md:text-3xl text-gray-300 font-medium"
            whileHover={{ 
              color: "#ffffff",
              scale: 1.05
            }}
            transition={{ duration: 0.3 }}
          >
            Full Stack Developer
          </motion.h3>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              className="group relative cursor-none"
              aria-label={social.label}
            >
              <motion.div
                className="p-4 rounded-full border-2 border-white/20 hover:border-white/50 transition-colors duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 0 25px rgba(255,255,255,0.3)"
                }}
              >
                <social.icon 
                  size={28} 
                  className="text-white group-hover:text-white transition-colors duration-300" 
                />
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.label}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: -1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/5"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${10 + i * 20}%`,
                top: `${5 + i * 15}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Pulsing Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}