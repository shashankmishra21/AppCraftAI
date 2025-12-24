import { Button } from "./ui/button";

export function Prompt() {
    return (
        <div className="flex gap-2">
            <input placeholder="enter your prompt here" className="flex-1 rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60" />
            <Button className="shrink-50 cursor-pointer">
                Submit
            </Button>
        </div>
    )
}