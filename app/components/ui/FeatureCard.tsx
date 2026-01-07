interface FeatureCardProps {
  icon: string;
  text: string;
}

export default function FeatureCard({ icon, text }: FeatureCardProps) {
  return (
    <li className="rounded-2xl border-2 border-white/10 p-5 sm:p-6 bg-blue-900/40 
                 backdrop-blur-sm hover:bg-blue-900/60 hover:border-yellow-400/50 
                 transition-all duration-300 hover:scale-105 shadow-lg group">
      <span className="text-yellow-400 text-xl sm:text-2xl mr-2 group-hover:scale-110 inline-block transition-transform">
        {icon}
      </span>
      <span className="text-base sm:text-lg text-gray-100">
        {text}
      </span>
    </li>
  );
}