import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-6 border-t-4 border-[#04B533] mt-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Section: Brand & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Left Column: Brand & Tagline */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              SARV Foundation
            </h2>
            <p className="text-[#04B533] font-semibold text-lg tracking-wide">
              Empowering Lives, Nurturing Humanity
            </p>
          </div>

          {/* Right Column: Legal & Compliance */}
          <div className="flex flex-col md:items-end text-center md:text-right">
            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
              Legal & Compliance
            </h3>
            <ul className="space-y-2 text-gray-700 font-medium">
              <li className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#04B533] text-sm">✔</span> 12A Registered
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#04B533] text-sm">✔</span> 80G Certified
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#04B533] text-sm">✔</span> DARPAN Registered
              </li>
              <li className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-[#04B533] text-sm">✔</span> CSR-Compliant
              </li>
            </ul>
          </div>
          
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Bottom Section: Socials & Dev Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          
          {/* Left Column: Social Media Logos */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#04B533] rounded-full flex items-center justify-center text-white hover:bg-[#03982a] hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/teamsarv?igsh=b2xycmM5M3E4dTJn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#04B533] rounded-full flex items-center justify-center text-white hover:bg-[#03982a] hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaInstagram size={18} />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/people/Sarv-Foundation/61589716634279/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-[#04B533] rounded-full flex items-center justify-center text-white hover:bg-[#03982a] hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <FaFacebookF size={18} />
            </a>
          </div>

          {/* Right Column: Developed by */}
          <div className="text-gray-600 font-medium text-sm text-center md:text-right">
            Developed by <span className="text-[#04B533] font-bold tracking-wide">Rizeonenterprises</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
