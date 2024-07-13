import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

function HomePage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center background-div">
      <div className="max-w-50 auto p-10 rounded" style={{backgroundColor: "rgb(192, 192, 192, 0.6)"}}>
        <h1 className="text-center text-2xl font-semibold pb-8 tracking-wide">
          Test
        </h1>
        <h1 className="text-center text-2xl font-semibold pb-8 tracking-wide">
          Management Financiar
        </h1>
        <Link href="/profile">
          <Button className="mx-auto flex text-xl racking-wide hover:bg-green-600 transition duration-500">
            <Loader2 className="mr-2 animate-spin" /> Start Test
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage
