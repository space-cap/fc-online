import { getAllDocs } from '@/lib/docs';
import { SidebarNav } from './SidebarNav';

export function Sidebar() {
    const docs = getAllDocs();
    return <SidebarNav docs={docs} />;
}
