import { Bee } from "@ethersphere/bee-js";
import { config } from "@/lib/config";
import { AppError } from "@/lib/errors";

export type NodeHealth = {
  isHealthy: boolean;
  nodeUrl: string;
  version?: string;
};

export async function checkNodeHealth(): Promise<NodeHealth> {
  const bee = new Bee(config.beeNodeUrl);

  try {
    const health = await bee.getHealth();

    return {
      isHealthy: health.status === "ok",
      nodeUrl: config.beeNodeUrl,
      version: health.version,
    };
  } catch (cause) {
    throw new AppError(
      `Swarm node at "${config.beeNodeUrl}" is unreachable. Is your Bee node running?`,
      "NODE_UNREACHABLE",
      cause
    );
  }
}