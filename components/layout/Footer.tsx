import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-10 border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left Column: Social Media Logos */}
        <div className="flex gap-4">
          {/* LinkedIn (Link aana baaki hai) */}
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
    </footer>
  );
}
