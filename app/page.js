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
        <Button className="w-50 mt-6 ml-16 text-xl">
          <Loader2 className="mr-2 animate-spin" />
          <Link href="/profile"><SignInButton/></Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
