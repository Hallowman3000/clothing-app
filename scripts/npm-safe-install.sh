#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: npm run add -- <package...>"
  exit 1
fi

# npm@11 warns on npm_config_http_proxy. Normalize to supported key when present.
if [ -n "${npm_config_http_proxy:-}" ] && [ -z "${npm_config_proxy:-}" ]; then
  export npm_config_proxy="$npm_config_http_proxy"
fi

registry="${NPM_REGISTRY_URL:-https://registry.npmjs.org/}"

if ! npm view "$1" version --registry "$registry" >/dev/null 2>&1; then
  cat >&2 <<MSG
Unable to access npm registry ($registry). This environment appears to block the public npm registry.
Set NPM_REGISTRY_URL to an allowed internal registry/mirror and retry.
Example:
  NPM_REGISTRY_URL=https://<your-internal-registry>/npm/ npm run add -- $*
MSG
  exit 2
fi

npm install --registry "$registry" "$@"
