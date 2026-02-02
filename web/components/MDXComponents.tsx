import { HeroImage } from './HeroImage';
import { GameCard } from './GameCard';

export const components = {
    HeroImage,
    GameCard,
    // Custom Typography
    h1: (props: any) => (
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white neon-text-green font-gaming border-b-2 border-green-500 pb-2 inline-block" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white font-gaming flex items-center gap-2" {...props}>
            <span className="w-2 h-8 bg-blue-500 rounded-sm inline-block"></span>
            {props.children}
        </h2>
    ),
    h3: (props: any) => (
        <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-blue-700 dark:text-blue-200" {...props} />
    ),
    p: (props: any) => (
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-4 text-lg" {...props} />
    ),
    ul: (props: any) => (
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800 dark:text-gray-300 marker:text-green-500 dark:marker:text-green-400" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-800 dark:text-gray-300 marker:text-blue-500 dark:marker:text-blue-400" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-6 bg-purple-100 dark:bg-purple-500/10 italic text-purple-700 dark:text-purple-200 rounded-r-lg" {...props} />
    ),
    a: (props: any) => (
        <a className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 underline underline-offset-4 transition-colors font-medium" {...props} />
    ),
    table: (props: any) => (
        <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left text-sm text-gray-800 dark:text-gray-300" {...props} />
        </div>
    ),
    th: (props: any) => (
        <th className="bg-gray-100 dark:bg-gray-800 px-4 py-3 font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700" {...props} />
    ),
    td: (props: any) => (
        <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors" {...props} />
    ),
    code: (props: any) => (
        <code className="bg-gray-200 dark:bg-black/50 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-sm border border-gray-300 dark:border-white/10" {...props} />
    ),
    pre: (props: any) => (
        <pre className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-800 my-6 text-sm" {...props} />
    ),
};
