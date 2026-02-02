import Image from 'next/image';

interface HeroImageProps {
    src: string;
    title: string;
    subtitle?: string;
}

export function HeroImage({ src, title, subtitle }: HeroImageProps) {
    return (
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 group">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 neon-text-green font-gaming tracking-wide">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl bg-black/30 backdrop-blur-sm p-2 rounded-lg inline-block">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-xs font-mono text-green-400 border border-green-500/30 px-2 py-1 rounded bg-black/50 backdrop-blur-md">
                SYS.VER.2025
            </div>
        </div>
    );
}
