'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Doc = {
    slug: string;
    title: string;
};

export function SidebarNav({ docs }: { docs: Doc[] }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-lg">FC Online Guide</span>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Container */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } pt-16 md:pt-0`}
            >
                <div className="h-full overflow-y-auto p-4">
                    <div className="mb-6 hidden md:block">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Book className="w-6 h-6" />
                            <span>Guide Book</span>
                        </h2>
                    </div>
                    <nav className="space-y-1">
                        {docs.map((doc) => {
                            const href = `/docs/${doc.slug}`;
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={doc.slug}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {doc.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
}
