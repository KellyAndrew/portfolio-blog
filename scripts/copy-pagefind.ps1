$ErrorActionPreference = "Stop"

New-Item -ItemType Directory -Force "public\pagefind" | Out-Null
Copy-Item -Recurse -Force "dist\pagefind\*" "public\pagefind\"
