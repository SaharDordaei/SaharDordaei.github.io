
import React from "react";

export default function Projects() {
  return (
    // === Projects Container Box ===
    <div className="bg-white shadow rounded-2xl p-6">

      {/* === Section Title === */}
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      {/* === Project List === */}
      <ul className="space-y-3 text-black">

        {/* === Project 3: CMB Visualizer (with GitHub link) === */}
        <li>
          <p>
            <a
              href="https://github.com/SaharDordaei/CMB_Visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-800 hover:underline"
            >
              CMB Visualizer
            </a>
          </p>
          <p>
            Visualization of cosmic microwave background anisotropies using Python and Healpy.
          </p>
        </li>

        {/* === Project 2: Celestial Projectile Motion === */}
        <li>
          <p>
            <a
              href="https://github.com/SaharDordaei/Celestial_Projectile_Simulation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-800 hover:underline"
            >
              Celestial Projectile Motion Simulator
            </a>
          </p>
          <p>
            Interactive VPython simulation of projectile motion on various celestial bodies, featuring sliders to adjust parameters like mass, velocity, and gravity.
          </p>
        </li>

        {/* === Project 1: Undergraduate Research Project (No GitHub link) === */}
        <li>
          <p className="font-semibold text-blue-800">Undergraduate Physics Project Course</p>
          <p>
            Analyzed planetary surface features and characterized impact craters using ImageJ and image processing techniques.
          </p>
        </li>

      </ul>
    </div>
  );
}
