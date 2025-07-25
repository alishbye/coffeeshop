import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Bg from '/Background.jpeg';
import Cup from '/cup.png';
import Drip from '/drip.png';
import Mocha from '/mocha.png'; 
import Splash from '/splash.png'; 
import small from '/small.jpg'; 

const Section1 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Cup animations
 const scaleCup = useTransform(scrollYProgress, [0, 0.20], [1.4, 4.8]);
const yCup = useTransform(scrollYProgress, [0, 0.20], ['10vh', '10vh']);
const rotateCup = useTransform(scrollYProgress, [0, 0.20], [70, 0]);
const xCup = useTransform(scrollYProgress, [0, 0.20], ['0%', '0%']);
const cupOpacity = useTransform(scrollYProgress, [0.22, 0.30 ], [1, 0]);

const mochaTextOpacity = useTransform(scrollYProgress, 
  [0.45, 0.5],  // Starts appearing later (45-50% scroll)
  [0, 1]
);

const mochaTextScale = useTransform(scrollYProgress,
  typeof window !== 'undefined' && window.innerWidth < 640 
    ? [0.65, 0.7, 0.75]  // Later appearance on mobile
    : [0.45, 0.5, 0.55], // Original desktop timing
  [0.9, 1, 1]            // Same scale values
);

const mochaTextY = useTransform(scrollYProgress,
  typeof window !== 'undefined' && window.innerWidth < 640 
    ? [0.65, 0.7]  // Later appearance on mobile
    : [0.45, 0.5], // Original desktop timing
  ['30%', '0%']    // Same movement values
);

  // Smoother drip image animations
const dripOpacity = useTransform(scrollYProgress, 
  [0, 0.001, 0.5, 0.6],  // Now completes fade by 60% scroll
  [0, 1, 1, 0]
);

const dripScale = useTransform(scrollYProgress, 
  [0, 0.1],  // Faster scaling (0-10% scroll)
  [0.3, 1]
);

const dripY = useTransform(scrollYProgress, 
   [0, 0.05],  // Completes movement by 20% scroll
  ['-120%', '0%']
);
  // Mocha adjustments (appears earlier)
const mochaY = useTransform(scrollYProgress, 
  typeof window !== 'undefined' && window.innerWidth < 640 ? [0.4, 0.7] : [0.2, 0.5],
  ['80%', '10%']
);
const mochaScale = useTransform(scrollYProgress, 
  [0.2, 0.5, 1],  // Keep original timing points
  typeof window !== 'undefined' && window.innerWidth < 640 
    ? [0.02, 0.8, 0.9]   // Much smaller on mobile: starts tiny (0.02), grows to 0.8, then 0.9
    : [0.1, 1.2, 1.2]    // Original desktop values
);

const mochaRotate = useTransform(scrollYProgress, 
  [0.2, 0.4, 1],  // Adjusted timing
  [15, 8, 8]
);

// Splash adjustments (appears earlier)
const splashY = useTransform(scrollYProgress, 
  typeof window !== 'undefined' && window.innerWidth < 640 ? [0.4, 0.7] : [0.2, 0.5],
  ['80%', '10%']
);

const splashScale = useTransform(scrollYProgress, 
  [0.2, 0.5, 1],  // Keep original timing points
  typeof window !== 'undefined' && window.innerWidth < 640 
    ? [0.01, 0.8, 1.2]   // Adjusted for mobile: starts small (0.01), grows to 0.8, then 1.2
    : [0.01, 1, 1.5]     // Original desktop values
);

const splashRotate = useTransform(scrollYProgress, 
  [0.2, 0.4, 1],  // Adjusted timing
  [5, 5, 5]
);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      
      {/* Section 1 - Background only */}
<section className="w-full h-screen overflow-hidden relative">
  {/* Desktop background - hidden on mobile */}
  <motion.img
    src={Bg}
    className='w-full h-full object-cover relative z-30 hidden md:block'
    alt=""
    initial={{ scale: 1 }}
    animate={{
      scale: [1, 1.03, 1],
      x: ["0%", "-1%", "0%"],
      y: ["0%", "0.5%", "0%"]
    }}
    transition={{
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity
    }}
  />
  
  {/* Mobile background - shown only on mobile */}
  <motion.img
    src={small}
    className='w-full h-full object-cover relative z-30 block md:hidden'
    alt=""
    initial={{ scale: 1 }}
    animate={{
      scale: [1, 1.03, 1],
      x: ["0%", "-1%", "0%"],
      y: ["0%", "0.5%", "0%"]
    }}
    transition={{
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity
    }}
  />
</section>

      {/* Section 2 - Contains both background color and drip */}
     <section className="w-full h-screen relative" style={{ backgroundColor: '#A25E30' }}>
  <div className="absolute right-0 sm:right-10 top-[55%] -translate-y-1/2 text-[#F6EEE1] z-10">
    {/* Adjusted responsive text sizes with better mobile scaling */}
    <h1 className="italic text-center font-['Luckiest+Guy'] text-5xl sm:text-6xl md:text-7xl mb-1">Premium</h1>
    <p className="font-extrabold w-full text-center sm:text-left md:text-left text-6xl md:text-9xl mb-2">Cold Coffee</p>
  <p className="italic font-['Luckiest+Guy'] text-center sm:text-left text-3xl sm:text-4xl md:text-5xl mb-4">
  Days become better with a cup of coffee
</p>
    {/* "Upto 50% Off" text with better mobile scaling */}
    <motion.div
      className="text-black text-center font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-13"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "center" }}
    >
      Upto 50% Off
    </motion.div>

    {/* ORDER NOW Button - Better mobile sizing */}
    <div className="items-center justify-center flex">
      <motion.div
        className="max-w-59 bg-[#F6EEE1] border-3 rounded-lg border-[#A25E30] shadow-lg hover:bg-[#A25E30] text-[#A25E30] hover:text-[#F6EEE1] hover:border-[#F6EEE1] duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <button className="px-7 py-3 sm:px-8 sm:py-3 font-bold text-lg sm:text-xl"> 
          <a href="#">ORDER NOW</a>
        </button>
      </motion.div>
    </div>
  </div>
        {/* Drip image */}
        <motion.div 
          className="fixed inset-0 w-full h-full pointer-events-none"
          style={{
            opacity: dripOpacity,
            scale: dripScale,
            y: dripY,
            zIndex: 20,
            mixBlendMode: 'multiply'
          }}
        >
          <img
            src={Drip}
            className="w-full h-full object-cover sm:overflow-hidden"
            alt="Coffee drip effect"
          />
        </motion.div>
      </section>

  <section 
  className="w-full h-screen relative flex items-center justify-center"
  style={{
    background: 'linear-gradient(180deg, #A25E30 0%, #B28B67 50%, #B28B67 100%)'
  }}
>
  <motion.div 
    className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20"
    style={{ height: '90vh' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-30% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Right card content - now comes first on mobile */}
    <motion.div 
      className="w-full md:w-120 p-5 bg-transparent rounded-2xl border-3 border-[#FBECD3]/20 shadow-xl z-30 backdrop-blur-lg order-1 md:order-2"
      style={{ marginTop: '0 md:-3%' }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-25% 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-[#ded2c8] text-3xl md:text-4xl tracking-tighter font-extrabold mb-6">Mocha Coffee</h2>
      <ul className="text-[#ded2c8]/90 text-xl md:text-2xl tracking-tighter space-y-4 list-disc pl-6">
        <li>Rich chocolatey flavor meets bold espresso</li>
        <li>Perfect balance of sweetness and bitterness</li>
        <li>Originated from Yemen's port city of Mocha</li>
        <li>Best served with whipped cream topping</li>
      </ul>
    </motion.div>

    {/* Left text content - now comes second on mobile */}
    <motion.div 
      className="font-extrabold font-sans text-[#e2deda] tracking-tighter z-30 w-full md:w-1/2 order-2 md:order-1 text-center md:text-left"
      style={{ marginTop: '20px md:-5%' }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-30% 0px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h1 className="italic text-5xl sm:text-6xl md:text-7xl mb-1">Introducing</h1>
      <p className="italic text-5xl sm:text-6xl md:text-7xl mb-2">Our</p>
      <p className="italic text-5xl sm:text-6xl md:text-7xl mb-4">New Flavour</p>
    </motion.div>
  </motion.div>
</section>
      <section 
  className="w-full h-screen relative flex items-center justify-center"
  style={{
    background: 'linear-gradient(180deg, #B28B67 0%, #B28B67 50%, #A25E30 100%)'
  }}
>
  {/* Section 4 content */}
  
</section>

<motion.div
  className="fixed inset-0 flex items-center justify-center z-[60] pointer-events-none"
  style={{
    opacity: typeof window !== 'undefined' && window.innerWidth < 640 
      ? useTransform(scrollYProgress, 
          [0.5, 0.55],  // Appears between 50-55% scroll
          [0, 1]        // Fades in and stays visible
        )
      : mochaTextOpacity,
    scale: typeof window !== 'undefined' && window.innerWidth < 640 
      ? useTransform(scrollYProgress,
          [0.5, 0.55],  // Scale only during appearance
          [0.95, 1]     // Slight grow effect
        )
      : mochaTextScale,
    y: typeof window !== 'undefined' && window.innerWidth < 640 
      ? useTransform(scrollYProgress,
          [0.5, 0.55],  // Movement during appearance
          ['50%', '-30%']  // Moves up from 20% below to center
        )
      : mochaTextY,
    x: 0  // No horizontal movement
  }}
>
  <h1 className="text-[#eadfd5] font-extrabold tracking-tighter text-6xl text-center sm:text-center md:text-left md:text-9xl">
    Mocha Coffee
  </h1>
</motion.div>

     <section 
  className="w-full h-screen relative flex items-center justify-center"
  style={{
    background: 'linear-gradient(180deg, #A25E30 0%, #8C4A2B 30%, #6B3A1F 70%, #4D2B15 100%)'
  }}
>
  
</section>

<section 
  className="w-full h-screen relative flex items-center justify-center"
  style={{
    background: 'linear-gradient(180deg, #4D2B15 0%, #3A1F0F 30%, #2A1508 70%, #1A0D04 100%)'
  }}
>
  
</section>


  <motion.div
  className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none"
  style={{
    y: mochaY,
    scale: mochaScale,
    rotate: mochaRotate,  // Add the rotation
    transformOrigin: "center bottom"  // Rotate from the bottom center
  }}
>
  <img 
    src={Mocha} 
    alt="Mocha coffee" 
    className="object-contain max-h-[70vh]"
  />
</motion.div>

<motion.div
  className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none"
  style={{
    y: splashY,
    scale: splashScale,
    rotate: splashRotate,
    transformOrigin: "center bottom"
  }}
>
  <img 
    src={Splash}
    alt="Splash effect" 
    className="max-h-[65vh] object-contain"
  />
</motion.div>

      {/* Cup animation - stays on top */}
      <motion.div 
        className="fixed left-[20%] z-50  hidden sm:block"
        style={{
          scale: scaleCup,
          y: yCup,
          rotate: rotateCup,
          x: xCup,
          opacity: cupOpacity, 
          bottom: '12vh',
          width: '6rem',
          height: '6rem',
          transformOrigin: 'bottom center'
        }}
      >
        <img
          src={Cup}
          className="w-full h-full object-contain"
          alt="Coffee cup"
        />
      </motion.div>
    </div>
  );
};

export default Section1;