import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

function HomePage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center background-div">
      <div
        className="max-w-50 auto p-10 rounded"
        style={{ backgroundColor: "rgb(192, 192, 192, 0.6)" }}
      >
        <h1 className="text-center text-2xl font-semibold pb-8 tracking-wide">
          Test
        </h1>
        <h1 className="text-center text-2xl font-semibold pb-8 tracking-wide">
          Management Financiar
        </h1>
        <Link href="/profile" className="w-50 ml-20 mt-6 relative p-2 rounded text-xl border border-black">
          <Button >
            <SignInButton />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
