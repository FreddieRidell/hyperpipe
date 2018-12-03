# HyperPipe

> Uses hyperswarm to share stdin and stdout between two peers

## Why

-   **Simple** very quick way to share info between two computers
-   **Secret** only someone with access to the key can connect to the pipe
-   **Ephemeral** once a connection is closed, there's no way to recover the data that was sent through it

## Usage

**On computer 1**

```bash
$ echo "This is my spooky secret, tell no one" | hyperpipe 75489961d69a855463d67951fe72af37bd7add7fbe71ccfbd8bf17974ad26afd
```

**On computer 2**

```bash
$ hyperpipe 75489961d69a855463d67951fe72af37bd7add7fbe71ccfbd8bf17974ad26afd > spookySecret.txt
```

## Notes

-   if you provide no key, `hyperpipe` will create one for you
-   `hyperpipe` prints information about the connection to `stderr`, so please only pipe from `stdout`
-   `hyperpipe` currently only supports 2 peers connected to a key at a time, it's up to you to enforce this

## Roadmap

-   [ ] allow `n` peers to be connected to a key at once
-   [ ] add `--verbose` flag to print more info to `stderr`
-   [ ] add `--tee` flag to pipe everything that goes to `stdout` to `stderr` as well
-   [ ] add `--porcelan` flag to produce more machine readable meta output to `stderr`

> PRs welcome
