function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_API_URL environment variable is not defined"
    );
  }

  return url.replace(/\/$/, "");
}

export const env = {
  apiBaseUrl: getApiBaseUrl(),
} as const;
