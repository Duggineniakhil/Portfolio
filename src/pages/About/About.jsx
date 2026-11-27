import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import HeroImg from "@/assets/images/akhil_image.jpeg";

// Number that counts up when it scrolls into view
function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 13, suffix: "", label: "Projects shipped" },
  { value: 2, suffix: "", label: "Hackathon podiums" },
  { value: 4, suffix: "", label: "Hackathons" },
];

function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm hover:border-cyan-400/40 transition-colors"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            <CountUp to={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-1 text-xs text-gray-400">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16"
        >
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Portrait of Duggineni Akhil"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I&apos;m Duggineni Akhil, a full-stack and applied-AI engineer in my final year of
                B.Tech Computer Science at Amrita Vishwa Vidyapeetham, Coimbatore.{" "}
                <span className="font-bold text-white">
                  I ship end-to-end products: LLM agents with tool calling and evaluation harnesses,
                  computer-vision pipelines, and production web apps
                </span>{" "}
                with CI/CD, tests and live deployments.
              </p>
              <p className="text-white">
                I won Fetch-A-Thon 3.0 for the Best Agentverse Deployment and took 2nd place at the
                NitroStack AI Agentic Hackathon with an 8-agent MCP platform. I&apos;m available for
                internships from January 2027 and open to full-time roles.
              </p>

              <AboutStats />

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I like problems where it has to actually work: measuring what a model gets wrong,
                    testing the edge cases, and shipping something people can use. Whether it&apos;s an AI
                    agent that reconciles payments or a pipeline that tracks a padel ball a few pixels wide,
                    I build it end to end.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Duggineni Akhil, Full-Stack & Applied-AI Engineer
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
