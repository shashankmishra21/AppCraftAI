import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Appbar } from "@/components/Appbar";
import { Prompt } from "@/components/Prompt";
import { SideBar} from "@/components/SideBar"

export default function Home() {
  return (
    <div>
     

      <div className="">
        <Appbar />
         <SideBar />
        <div className="max-w-2xl mx-auto pt-32">
          <div className="text-2xl font-bold text-center">
            What do you want to build today?
          </div>
          <div className="text-sm font-normal text-center mt-2 mb-8 text-muted-foreground">
            Give Prompt here and watch your app get built in seconds.
          </div>
          <div className="mt-2 pt-2">
            <Prompt />
          </div>
        </div>
      </div>
    </div>
  );
}
