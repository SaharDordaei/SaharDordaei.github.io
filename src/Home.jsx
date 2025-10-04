import React from "react";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      {/* === FIXED HEADER: Always visible name bar at the top === */}
      <header className="bg-gray-100 shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-black">Sahar Dordaei Joghan</h1>
        </div>
      </header>

      <main className="min-h-screen bg-gray-100 py-10 px-4 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* === SECTION 1: Bio and Contacts === */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h1 className="text-3xl font-bold mb-1">Sahar Dordaei Joghan</h1>
            <p className="text-black mb-6">M.Sc. Applicant in Physics and Astronomy</p>

            <p className="text-black mb-4">
              Hi! I’m a prospective graduate student in astrophysics, interested in understanding the universe at both large and small scales, from the early Universe, inflation, the CMB, dark matter/energy, to how galaxies, stars, and compact objects form and evolve.
            </p>
            <p className="text-black mb-4">
              I enjoy working on projects that bring together theoretical, computational, and observational approaches. Since graduation, alongside teaching physics, I’ve been building small tools to explore different cosmic phenomena, such as visualizing the cosmic microwave background and simulating motion under varying planetary gravities.
            </p>
            <p className="text-black mb-4">
              In my free time, I love playing music, chess, badminton, and visiting natural landscapes.
            </p>

            <hr className="border-gray-300 my-4" />

            <div className="flex flex-wrap gap-4 text-blue-800 font-medium">
              <a href="mailto:sahar.dordaei@gmail.com" className="flex items-center gap-1"><Mail size={16} /> Email</a>
              <a href="https://github.com/SaharDordaei" className="flex items-center gap-1"><Github size={16} /> GitHub</a>
              <a href="https://linkedin.com/in/sahardordaei" className="flex items-center gap-1"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>

          {/* === SECTION 2: CV + PDF Download === */}
          <div className="bg-white shadow rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Brief Curriculum Vitae</h2>
              <a href="/assets/(Sahar DORDAEI JOGHAN) CV.pdf" download className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-700">
                <FileDown size={16} /> CV (PDF)
              </a>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Education</h3>
              <ul className="list-disc list-inside text-black">
                <li>B.Sc. in Physics, Shahid Rajaee Teacher Training University (2019–2023)</li>
                <li>Final two years GPA: 19.10/20 (4.0/4), Overall GPA: 17.40/20 (3.61/4.0)</li>
                <li>Relevant Coursework: Stellar Structure & Evolution, Astronomy & Astrophysics, Cosmology, Numerical Computations, Quantum Mechanics, Electromagnetism, Thermodynamics & Statistical Physics, Optics, Spectroscopy, Laser Physics, Mathematical Physics, Analytical Mechanics, Physics Project</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Training and Certifications</h3>
              <ul className="list-disc list-inside text-black">
                <li><a href="https://coursera.org/verify/T64VLFKNACC6" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Data-driven Astronomy, The University of Sydney</a></li>
				<li><a href="https://coursera.org/verify/PVQ6MRLDAXBU" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">From the Big Bang to Dark Energy, The University of Tokyo</a></li>
                <li><a href="https://faradars.org/verify/E2CFE1C0" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Celestial Observation and Astronomy Essentials, Faradars</a></li>
				<li><a href="https://faradars.org/verify/9DB90D43" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Research Methods: Thesis Writing, Faradars</a></li>
                <li><a href="https://coursera.org/verify/BLVCVXQJY7AH" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Introduction to Data Science in Python, University of Michigan</a></li>
                <li><a href="https://coursera.org/verify/UBUJJJBUP7TH" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Improving Communication Skills, University of Pennsylvania</a></li>				
                <li><a href="https://coursera.org/verify/XPLP8GBGD3BY" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">Leading Teams, University of Michigan</a></li>
                <li>6 Specialized Training Workshops in Teaching Physics, Shahid Rajaee Teacher Training University</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Honors and Awards</h3>
              <ul className="list-disc list-inside text-black">
                <li>Merit-Based Admission Offer to the Master of Physics (Exempted from taking the national mandatory entrance exam with full tuition waiver)</li>
                <li>National Scholarship (Full Tuition Waiver + Monthly Stipend), Ministry of Education, Iran (B.Sc. Physics, 2019–2023)</li>
                <li>Graduating Class Academic Award (Top 10%), Shahid Rajaee Teacher Training University</li>
                <li>Astronomy Association Honors, Shahid Rajaee Teacher Training University</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Teaching Experience</h3>
              <ul className="list-disc list-inside text-black">
                <li>High School Physics Teacher (Mar 2023–current)</li>
                <li>Teaching Assistant, Electromagnetism I & II (Spring 2022–Fall 2022)</li>
                <li>Physics Teaching Intern (Oct 2021–Jun 2022)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Administrative, Volunteer, and Professional Activities</h3>
              <ul className="list-disc list-inside text-black">
                <li>Member, The Astronomical Society of Iran (2023–current)</li>
                <li>President, Astronomy Association, Shahid Rajaee Teacher Training University (2021–2023)</li>
                <li>Founding Member, Astronomy Association, Shahid Rajaee Teacher Training University (2021)</li>
              </ul>
            </div>
          </div>

          {/* === SECTION 4: Projects === */}
          <Projects />

          {/* === SECTION 5: Updates / Blog === */}
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Updates</h2>
            <ul className="list-disc list-inside text-black">
              <li>June 2025: Released GitHub projects</li>
            </ul>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="text-center text-sm text-gray-900 mt-8">
          Last updated: October 2025
        </div>
      </main>
    </>
  );
}