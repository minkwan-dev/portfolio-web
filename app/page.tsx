import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f9f9f9]">
      <SiteHeader active="home" />
    </div>
  );
}