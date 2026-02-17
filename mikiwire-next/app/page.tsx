import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-titanium overflow-x-hidden">
      <Hero />
      {/* 
        Next Sections (Planned):
        - Corporate Legacy (Timeline)
        - Manufacturing Matrix (Map)
        - Product Specs
        - Global Trade
        - Sustainability 
      */}
      <section className="h-screen w-full flex items-center justify-center bg-gunmetal text-silver">
        <p className="font-space">More content coming soon...</p>
      </section>
    </main>
  );
}
