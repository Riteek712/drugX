import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "drugX",
  description:"this is a leading research platform for drug research!"
}
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index/>
      </DefaultLayout>
    </>
  );
}
