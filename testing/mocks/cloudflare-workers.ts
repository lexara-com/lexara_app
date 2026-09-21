export let env: Record<string, string> = {};

export function setMockEnv(nextEnv: Record<string, string>): typeof env {
  env = nextEnv;
  return env;
}