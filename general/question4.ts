const chains = {
  "base": 852,
  "optimism": 10,
  "mode": 34443
}

type T = unknown;

const myFunction = (arg: T): number => {
  return chains[arg]
}