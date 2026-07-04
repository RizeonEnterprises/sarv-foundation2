import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-12 pb-6 border-t mt-10">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Tagline & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Left: Brand & Tagline */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">SARV Foundation</h2>
            <p className="text-[#f38b27] font-medium text-lg italic">
              "Empowering Lives, Nurturing Humanity"
            </p>
          </div>

          {/* Right: Legal & Compliance */}
          <div className="flex flex-col md:items-end text-center md:text-right">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
                Legal & Compliance
              </h3>
              <ul className="space-y-1 text-gray-600 font-medium">
                <li>12A Registered</li>
                <li>80G Certified</li>
                <li>DARPAN Registered</li>
                <li>CSR-Compliant</li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Bottom Section: Socials & Dev Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Left Column: Social Media Logos */}
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/teamsarv?igsh=b2xycmM5M3E4dTJn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/people/Sarv-Foundation/61589716634279/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Right Column: Developed by */}
          <div className="text-gray-600 font-medium text-sm text-center sm:text-right">
            Developed by <span className="text-[#f38b27] font-semibold">Rizeonenterprises</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
