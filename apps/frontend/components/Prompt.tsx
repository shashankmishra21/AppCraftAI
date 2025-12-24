"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import axios from "axios"
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "@/config";

export function Prompt() {

    const [prompt, setPrompt] = useState("")
    const { getToken } = useAuth();
    return (
        <div className="flex gap-2">
            <Textarea placeholder="enter your prompt here" className="flex-1 rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60" value={prompt} onChange={(e) => { setPrompt(e.target.value) }} />
            <Button onClick={async () => {
                const token = await getToken();
                const response = await axios.post(`${BACKEND_URL}/project`, {
                    prompt: prompt,
                }, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                console.log(response.data);
            }} className="cursor-pointer">
                Submit
            </Button>
        </div>
    )
}