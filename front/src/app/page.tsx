import HomeComponent from "@/components/Home";
import { Suspense } from "react";

export default function Home() {

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    </div>
  );
}
