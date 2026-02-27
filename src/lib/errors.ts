export type ErrorCode =
  | "NODE_UNREACHABLE"
  | "INVALID_POSTAGE_BATCH"
  | "UPLOAD_FAILED"
  | "RETRIEVAL_FAILED"
  | "UNKNOWN";

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly cause?: unknown;

  constructor(message: string, code: ErrorCode, cause?: unknown) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.cause = cause;
  }
}

