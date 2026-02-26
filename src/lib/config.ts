function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `[FairDrop] Missing required environment variable: "${key}". ` +
        `Check your .env.local file.`
    );
  }
  return value;
}

export const config = {
  beeNodeUrl: requireEnv("BEE_NODE_URL"),
  postageBatchId: requireEnv("POSTAGE_BATCH_ID"),
} as const;