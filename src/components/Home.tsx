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
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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
        className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 shadow-lg shadow-cyan-400/50"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
              <stop offset="50%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0,${200 + i * 80} Q${400 + i * 50},${150 + i * 60} ${800},${250 + i * 70} T${1600},${200 + i * 80}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>

        {/* Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              height: [80, 120, 80],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Ripple Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-cyan-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="text-center max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-light text-white mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Hello, I'm👋
        </motion.h1>

        {/* Name */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            Muhammed Aadil Nv
          </span>
        </motion.h2>

        {/* Position */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl md:text-3xl text-gray-300 font-medium mb-4">
            Full Stack Developer
          </h3>
          <motion.div 
            className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="group relative p-3 rounded-full border border-white/20 hover:border-cyan-400/50 transition-colors duration-300"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(6, 182, 212, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon 
                size={24} 
                className="text-white group-hover:text-cyan-400 transition-colors duration-300" 
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {social.label}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}