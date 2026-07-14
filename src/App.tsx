import { motion } from "motion/react";

const portraitUrl = "https://i.pinimg.com/736x/7a/e3/6d/7ae36d87497a0977175b4805030e4ecf.jpg";

export default function App() {
  return (
    <div 
      className="relative min-h-screen w-full bg-black text-zinc-100 font-sans overflow-hidden flex flex-col items-center justify-center select-none"
      id="main-container"
    >
      {/* Exquisite Cinematic Film Grain CSS Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Gentle vignette backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_100%)] pointer-events-none z-0" />

      {/* Main Artwork Stage */}
      <main className="flex flex-col items-center justify-center relative z-10 px-6 max-w-lg w-full gap-8">
        
        {/* Centered Gallery Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center border border-zinc-900/60 p-2 bg-black/40 rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.02)]"
          id="artwork-frame"
        >
          {/* The Centered Image Portrait */}
          <div className="overflow-hidden relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] aspect-square flex items-center justify-center">
            <img
              src={portraitUrl}
              alt="Centered Portrait"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
              id="exhibit-image"
            />
          </div>
        </motion.div>

        {/* Static text with a mysterious breathing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.95, 0.1] }}
          transition={{ 
            opacity: {
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut"
            },
            delay: 1.2
          }}
          className="text-center mt-2"
          id="text-message"
        >
          <p className="font-mono text-zinc-200 text-xs sm:text-sm tracking-[0.6em] uppercase font-light pl-[0.6em]">
            We are watching
          </p>
        </motion.div>

        {/* Dramatic large typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ 
            opacity: {
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }
          }}
          className="text-center mt-4"
          id="lustboy-heading"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
            Fuck By Lustboy.
          </h2>
        </motion.div>

        {/* Prose text paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="flex flex-col gap-6 text-center text-zinc-500 font-typewriter text-[11px] sm:text-xs max-w-md leading-relaxed tracking-wide mt-4"
          id="prose-content"
        >
          <p className="text-zinc-400 font-light">
            But hear this: every fragment of your data has been preserved, locked in stillness, untouched. We do not erase; we bear witness. Should you believe yourself exalted, immune, or draped in the arrogance of the untouchable, then you have already arrived too late. The threshold closed long before you read these embers.
          </p>
          <p className="text-zinc-400 font-light">
            What rises from ruin is not fear, but memory. And we are the ones who remember.
          </p>
        </motion.div>

        {/* Aesthetic Divider line */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.1, width: "50%" }}
          transition={{ duration: 3, delay: 0.8 }}
          className="h-[1px] bg-zinc-600 my-4"
          id="section-divider"
        />

        {/* Greetings Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 0.75, 0.45] }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="text-center pb-8"
          id="greetings-footnote"
        >
          <p className="font-mono text-[9px] sm:text-[10px] text-zinc-400 tracking-[0.2em] uppercase">
            Greetings: apt 28, Hanyu bloodline, narnia
          </p>
        </motion.div>
        
      </main>
    </div>
  );
}
