import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "typescript",
  "javascript",
  "dart",
  "cplusplus",
  "react",
  "nextdotjs",
  "tailwindcss",
  "vite",
  "flutter",
  "nodedotjs",
  "express",
  "fastapi",
  "postgresql",
  "prisma",
  "sqlite",
  "firebase",
  "pytorch",
  "tensorflow",
  "opencv",
  "scikitlearn",
  "huggingface",
  "pandas",
  "numpy",
  "googlegemini",
  "docker",
  "git",
  "github",
  "vercel",
  "render",
  "vitest",
  "jest",
  "pytest",
  "streamlit",
];

import { CoolMode } from "./ui/cool-mode";

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <CoolMode options={{ particle: "circle", size: 20 }}>
        <div className="cursor-pointer">
          <IconCloud iconSlugs={slugs} />
        </div>
      </CoolMode>
    </div>
  );
}

export default IconCloudDemo;
