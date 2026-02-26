type Props = {
  params: { hash: string };
};

export default function DownloadPage({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <p className="text-zinc-400 text-sm">
        Retrieving <span className="font-mono text-swarm-orange">{params.hash}</span>…
      </p>
    </main>
  );
}