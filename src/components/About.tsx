import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development" },
    { icon: Server, name: "Backend Development" },
    { icon: Database, name: "Database Design" },
    { icon: Globe, name: "Web Technologies" },
    { icon: Smartphone, name: "Mobile Development" },
    { icon: Palette, name: "UI/UX Design" }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden cursor-none">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-3 h-3 bg-white rounded-full pointer-events-none z-50 shadow-2xl shadow-white/50"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />

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
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-16 px-8 relative z-10">
        
        {/* Left - Photo */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -200, rotate: -90 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-80 h-80 rounded-full overflow-hidden shadow-2xl shadow-white/30 border-2 border-white/20"
              animate={{ 
                boxShadow: [
                  "0 0 50px rgba(255, 255, 255, 0.3)",
                  "0 0 100px rgba(255, 255, 255, 0.6)",
                  "0 0 50px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <motion.div 
                  className="text-8xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  👤
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: [0, 360],
                  x: 180 * Math.cos((i * Math.PI * 2) / 6),
                  y: 180 * Math.sin((i * Math.PI * 2) / 6),
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <motion.div 
          className="flex-1 space-y-8 max-w-2xl"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.8)",
                  "0 0 10px rgba(255, 255, 255, 0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              About Me
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-white text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, staggerChildren: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate Full Stack Developer creating innovative digital experiences. 
              My journey evolved from curiosity to crafting elegant solutions.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Expertise in frontend and backend technologies, bringing ideas to life 
              through clean code and seamless user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Always exploring new technologies and contributing to meaningful projects 
              that make a positive impact.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 10 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-white/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon size={20} className="text-white" />
                </motion.div>
                <span className="text-white text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 40px rgba(255, 255, 255, 0.6)",
                  "0 0 20px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Connect With Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;