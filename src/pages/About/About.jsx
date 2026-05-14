import HeroImg from "@/assets/images/akhil_image.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-transparent">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Duggineni Akhil, a passionate Full Stack Developer and AI/ML enthusiast
                specializing in creating innovative web solutions and intelligent systems.{" "}
                <span className="font-bold text-white">
                  With a strong foundation in Python, React, and Machine Learning
                </span>
                , I'm dedicated to delivering high-quality, impactful projects.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and accessible to all developers.
                I thrive on solving complex problems, from building real-time dashboards to training convolutional neural networks.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. Whether it's developing an AI-powered healthcare system
                    or a sleek e-commerce platform, I bring dedication and creativity to every line of code.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Duggineni Akhil, Full Stack Developer
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
