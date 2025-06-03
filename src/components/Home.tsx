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
      
      {/* Custom Large Arrow Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="drop-shadow-2xl"
        >
          {/* Arrow Shadow */}
          <path
            d="M2.5 2.5L22.5 12L12.5 14.5L8.5 22.5L2.5 2.5Z"
            fill="rgba(0,0,0,0.3)"
            transform="translate(1,1)"
          />
          {/* Main Arrow Body */}
          <path
            d="M2 2L22 12L12 14L8 22L2 2Z"
            fill="white"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="0.5"
          />
          {/* Arrow Highlight */}
          <path
            d="M3 3L20 11L11 13L7.5 19L3 3Z"
            fill="url(#arrowGradient)"
          />
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glowing effect around arrow */}
        <motion.div
          className="absolute inset-0 -m-2"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 255, 255, 0.3)",
              "0 0 40px rgba(255, 255, 255, 0.6)",
              "0 0 20px rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Matrix-Style Background */}
      <div className="absolute inset-0">
        {/* Falling Code Rain */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 font-mono text-sm select-none"
            style={{
              left: `${(i * 2) % 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Dots */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Diagonal Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5"
            style={{
              width: '2px',
              height: '100vh',
              left: `${10 + i * 10}%`,
              transform: `rotate(${15 + i * 5}deg)`,
              transformOrigin: 'center',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Pulsing Circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Binary Rain */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-white/15 font-mono text-xs select-none"
            style={{
              left: `${5 + (i * 4.5) % 90}%`,
            }}
            animate={{
              y: [-50, window.innerHeight + 50],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          >
            {'10110010101101001011'.split('').map((bit, idx) => (
              <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
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
          animate={{ 
            textShadow: [
              "0 0 10px rgba(255, 255, 255, 0.5)",
              "0 0 20px rgba(255, 255, 255, 0.8)",
              "0 0 10px rgba(255, 255, 255, 0.5)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
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
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
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