import { Info, AlertTriangle, Trophy, Star } from 'lucide-react';

interface GameCardProps {
    type?: 'info' | 'warning' | 'tip' | 'success';
    title: string;
    children: React.ReactNode;
}

export function GameCard({ type = 'info', title, children }: GameCardProps) {
    const styles = {
        info: {
            borderColor: 'border-blue-500',
            bg: 'bg-blue-50 dark:bg-blue-500/10',
            icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
            titleColor: 'text-blue-700 dark:text-blue-400'
        },
        warning: {
            borderColor: 'border-yellow-500',
            bg: 'bg-yellow-50 dark:bg-yellow-500/10',
            icon: <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
            titleColor: 'text-yellow-700 dark:text-yellow-400'
        },
        tip: {
            borderColor: 'border-green-500',
            bg: 'bg-green-50 dark:bg-green-500/10',
            icon: <Star className="w-5 h-5 text-green-600 dark:text-green-400" />,
            titleColor: 'text-green-700 dark:text-green-400'
        },
        success: {
            borderColor: 'border-purple-500',
            bg: 'bg-purple-50 dark:bg-purple-500/10',
            icon: <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
            titleColor: 'text-purple-700 dark:text-purple-400'
        }
    };

    const style = styles[type];

    return (
        <div className={`my-6 rounded-lg border-l-4 ${style.borderColor} ${style.bg} p-4 glass-panel`}>
            <div className="flex items-center gap-2 mb-2">
                {style.icon}
                <h3 className={`font-bold text-lg ${style.titleColor} font-gaming`}>{title}</h3>
            </div>
            <div className="text-gray-800 dark:text-gray-300">
                {children}
            </div>
        </div>
    );
}
