"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { checkNodeHealth, type NodeHealth } from "@/lib/health";

type Status = "checking" | "healthy" | "unreachable";

export function NodeStatusBadge() {
  const [status, setStatus] = useState<Status>("checking");
  const [nodeHealth, setNodeHealth] = useState<NodeHealth | null>(null);

  useEffect(() => {
    checkNodeHealth()
      .then((health) => {
        setNodeHealth(health);
        setStatus(health.isHealthy ? "healthy" : "unreachable");
      })
      .catch(() => {
        setStatus("unreachable");
      });
  }, []);

  const variants: Record<Status, { label: string; className: string }> = {
    checking: {
      label: "Checking node…",
      className: "bg-zinc-700 text-zinc-300 animate-pulse",
    },
    healthy: {
      label: `Node connected${nodeHealth?.version ? ` · v${nodeHealth.version}` : ""}`,
      className: "bg-emerald-900 text-emerald-300",
    },
    unreachable: {
      label: "Node unreachable",
      className: "bg-red-900 text-red-300",
    },
  };

  const { label, className } = variants[status];

  return (
    <Badge className={`text-xs font-mono px-3 py-1 rounded-full ${className}`}>
      <span
        className={`mr-2 inline-block h-2 w-2 rounded-full ${
          status === "healthy"
            ? "bg-emerald-400"
            : status === "unreachable"
            ? "bg-red-400"
            : "bg-zinc-400"
        }`}
      />
      {label}
    </Badge>
  );
}