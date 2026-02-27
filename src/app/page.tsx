import { NodeStatusBadge } from "@/components/NodeStatusBadge";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-swarm-orange mb-2">FairDrop</h1>
        <p className="text-zinc-400 text-sm">
          Decentralized file exchange on Swarm
        </p>
      </div>
      <NodeStatusBadge />
    </main>
  );
}

