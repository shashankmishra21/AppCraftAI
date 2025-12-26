import { X } from "lucide-react";

export function SideBar({
    isOpen,
    onClose,
    projects,
}: {
    isOpen: boolean;
    onClose: () => void;
    projects?: Project[];
}) {

    return (
        <div>
            <aside className="fixed top-14 left-0 h-full w-72 bg-zinc-900 text-white transform transition-transform duration-300 z-50">

                {/* Headers */}
                <div className="mt-2 flex items-center justify-between p-4 border-b border-zinc-700">
                    <h2 className="font-semibold">Recent Projects</h2>
                    <X className="cursor-pointer" />
                </div>

                { /* Search Bar */}
                <div className="p-4">
                    <div className="flex items-center bg-zinc-800 rounded-md px-2 py-2">
                        <input placeholder="Search projects" className="bg-transparent outline-none ml-2 text-sm w-full" />
                    </div>
                </div>

                { /*New project */}
                <div className="mt-0 w-full flex items-center gap-2 text-white py-2 px-4 cursor-pointer">
                    New Project
                </div>
                
            
            </aside>
        </div>
    )
}