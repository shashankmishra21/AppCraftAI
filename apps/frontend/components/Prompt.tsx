"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import axios from "axios"
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "@/config";
import { History , Send } from "lucide-react";

export function Prompt(
    {
        onMenuClick,
        onSubmitPrompt,
    }: {
        onMenuClick: () => void;
        onSubmitPrompt: (prompt: string) => void;
    }
) {

    const [prompt, setPrompt] = useState("")
    const { getToken } = useAuth();
    return (
        <div className="flex gap-2">

            <Button onClick={() => {
                onMenuClick();
            }} className="p-2 min-h-11 cursor-pointer" >
                <History/>
            </Button>

            <Textarea placeholder="enter your prompt here" className="flex-1 rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 min-h-12" value={prompt} onChange={(e) => { setPrompt(e.target.value) }} />
            <Button onClick={async () => {

                const token = await getToken();

                onSubmitPrompt(prompt);

                const response = await axios.post(`${BACKEND_URL}/project`, {
                    prompt: prompt,
                }, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                console.log(response.data);
            }} className="min-h-11 cursor-pointer">
                <Send/>
            </Button>
        </div>
    )
}