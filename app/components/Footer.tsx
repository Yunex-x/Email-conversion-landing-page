import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1A40]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-3">
              <span className="text-yellow-400">F</span>low
              <span className="text-yellow-400">S</span>olo
            </div>
            <p className="text-gray-300 text-sm">
              Built for freelancers and remote workers
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 FlowSolo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}