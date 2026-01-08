import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center mb-16 md:mb-20">
      <div className="text-2xl sm:text-3xl font-bold text-white">
        <Link href="." className="hover:opacity-80 transition-opacity">
          <span className="text-yellow-400">F</span>low
          <span className="text-yellow-400">S</span>olo
        </Link>
      </div>
      <div className="text-base sm:text-lg font-semibold">
        <Link
          href="/contact"
          className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 sm:px-4 py-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}