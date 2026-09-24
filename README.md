# 🎭 Haseeb — 3D Cinematic Portfolio

An immersive, high-performance 3D cinematic developer portfolio built with Next.js 14, React Three Fiber, GSAP, and Tailwind CSS. Featuring smooth camera transitions, interactive 3D skill universes, and dynamic particle effects.

🌐 **Live Demo:** [haseeb-portfolio-ochre.vercel.app](https://haseeb-portfolio-ochre.vercel.app/)

---

## 🚀 Key Features

- **🎬 3D Cinematic Experience:** Seamless interactive 3D Canvas integrated with smooth camera rigs and path animations.
- **🌌 Interactive Skills Universe:** Floating 3D elements representing technical skills and frameworks.
- **📜 Smooth Scroll Storytelling:** GSAP ScrollTrigger and Lenis smooth scrolling for high-fps layout transitions.
- **🏆 Interactive 3D Certificates:** Custom 3D plates displaying certifications and achievements.
- **📧 Dynamic Contact Form:** Web3Forms API integration for direct inline messaging.
- **⚡ Performance Optimized:** Dynamic performance tiering based on device capabilities.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **3D Engine:** React Three Fiber (R3F) / Three.js
- **Animations:** GSAP (ScrollTrigger) & Lenis Smooth Scroll
- **State Management:** Zustand
- **Styling:** Tailwind CSS & PostCSS
- **Forms:** Web3Forms API
- **Deployment:** Vercel

---

## 📂 Project Structure

```text
haseeb-portfolio/
├── public/                # Static assets, images, certificates
├── src/
│   ├── app/               # Next.js App Router pages & layouts
│   ├── components/
│   │   ├── canvas/        # R3F 3D Scenes, CameraRigs, Effects, Models
│   │   ├── ui/            # Overlay UI components (Hero, About, Projects)
│   │   └── providers/     # Page shells and experience stores
│   ├── data/              # Portfolio content & technical configuration
│   ├── hooks/             # Custom performance & animation hooks
│   ├── lib/               # Camera paths and GSAP setup
│   └── store/             # Zustand state management
└── tailwind.config.js     # Custom UI theme & styling variables

1. Clone the repository
git clone [https://github.com/muhammadhaseeb-va/haseeb-portfolio.git](https://github.com/muhammadhaseeb-va/haseeb-portfolio.git)
cd haseeb-portfolio

2. Install dependencies
npm install

3. Setup environment variables
Create a .env.local file in the root directory and add your Web3Forms access key:
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here

4. Run the development server
npm run dev
Open http://localhost:3000 in your browser to view the project.


📦 Build for Production
To create an optimized production build:
npm run build
npm run start


👤 Author
Muhammad Haseeb Ashraf

Portfolio: haseeb-portfolio-ochre.vercel.app

GitHub: @muhammadhaseeb-va

⭐ If you like this project, give it a star on GitHub!



