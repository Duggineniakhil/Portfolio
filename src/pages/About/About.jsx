import HeroImg from "@/assets/images/akhil_image.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 text-white bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
              /About<span className="text-cyan-400">_</span>
            </h2>
            <p className="text-zinc-500 font-mono italic">A brief introduction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-800/50 grayscale hover:grayscale-0 transition-all duration-700 aspect-square">
                <img
                  src={HeroImg}
                  className="w-full h-full object-cover"
                  alt="Duggineni Akhil"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-white tracking-tight">
                Building <span className="text-cyan-400">intelligent</span> systems and <span className="text-cyan-400">seamless</span> web experiences.
              </h3>
              
              <div className="space-y-4 text-zinc-400 font-mono text-sm leading-relaxed">
                <p>
                  Hello! I&apos;m Duggineni Akhil, a passionate Full Stack Developer and AI/ML enthusiast based in India. 
                  I specialize in creating innovative web solutions that are not only functional but also visually stunning.
                </p>
                <p>
                  With a strong foundation in Python, React, and Machine Learning, I dedicated to delivering high-quality, impactful projects. 
                  I thrive on solving complex problems, from building real-time dashboards to training convolutional neural networks.
                </p>
                <p>
                  My focus is on making web development faster, easier, and more accessible. I&apos;m a lifelong learner, 
                  constantly exploring new technologies and tools that deliver real value to the developer community.
                </p>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-cyan-400 font-mono font-bold text-xl">2+</div>
                  <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-mono font-bold text-xl">15+</div>
                  <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
