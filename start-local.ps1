$env:PORT = if ($env:PORT) { $env:PORT } else { "8080" }
Write-Host "Pornesc serverul local DAC pe http://127.0.0.1:$env:PORT" -ForegroundColor Cyan
node .\server.js
