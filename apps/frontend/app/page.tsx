"use client";
import { useState } from "react";
import { Appbar } from "@/components/Appbar";
import { Prompt } from "@/components/Prompt";
import { SideBar } from "@/components/SideBar"

type Project = {
  id: String;
  prompt: String;
  createdAt: Date;
}

export default function Home() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleNewPrompt = (prompt: string) => {
    setProjects((prev) => [
      {
        id: crypto.randomUUID(),
        prompt,
        createdAt: new Date(),
      },
      ...prev,
    ]);

    setIsSideBarOpen(true);
  };
  return (
    <div>


      <div className="">
        <Appbar />
        <SideBar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} projects={projects} />

        <div className="max-w-2xl mx-auto pt-32">
          <div className="text-2xl font-bold text-center">
            What do you want to build today?
          </div>
          <div className="text-sm font-normal text-center mt-2 mb-8 text-muted-foreground">
            Give Prompt here and watch your app get built in seconds.
          </div>
          <div className="mt-2 pt-2">
            <Prompt 
              onMenuClick={() => { setIsSideBarOpen(true); }} 
              onSubmitPrompt={handleNewPrompt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
