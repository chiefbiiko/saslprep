# saslprep

[![ci](https://github.com/chiefbiiko/saslprep/workflows/ci/badge.svg?branch=master)](https://github.com/chiefbiiko/saslprep/actions)

Stringprep Profile for User Names and Passwords, [rfc4013](https://tools.ietf.org/html/rfc4013).

## usage

``` ts
import { saslprep } from "https://denopkg.com/chiefbiiko/saslprep@v0.1.0/mod.ts";

saslprep('password\u00AD') // password
saslprep('password\u0007') // Error: prohibited character
```

## api

#### `saslprep(input: string, opts: SASLprepOptions): string`

Normalize user name or password. Options as follows:

``` ts
export interface SASLprepOptions {
  allowUnassigned?: boolean;
}
```

Opt-in a special behavior for unassigned code points, see https://tools.ietf.org/html/rfc4013#section-2.5. Disabled by default.

## license

[MIT](./LICENSE)
