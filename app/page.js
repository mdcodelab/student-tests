import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

function HomePage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center background-div">
      <div className="max-w-50 auto bg-slate-400 p-4">
        <h1 className="text-center text-2xl font-semibold pb-6 tracking-wide">
          Test
        </h1>
        <h1 className="text-center text-2xl font-semibold pb-6 tracking-wide">
          Management Financiar
        </h1>
        <Link href="/profile">
          <Button className="mx-auto block flex text-xl racking-wide hover:bg-green-600 transition duration-500">
            <Loader2 className="mr-2" animate-spin /> Start Test
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage
