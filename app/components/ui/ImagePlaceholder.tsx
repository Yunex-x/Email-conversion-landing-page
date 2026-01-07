interface ImagePlaceholderProps {
  icon: string;
  title: string;
  subtitle: string;
  aspectRatio?:  string;
}

export default function ImagePlaceholder({
  icon,
  title,
  subtitle,
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-linear-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
      <div className={`${aspectRatio} flex items-center justify-center`}>
        <div className="text-center space-y-4 p-8">
          <div className="w-20 h-20 mx-auto bg-yellow-400/20 rounded-full flex items-center justify-center">
            <span className="text-5xl">{icon}</span>
          </div>
          <p className="text-white text-xl font-semibold">{title}</p>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}