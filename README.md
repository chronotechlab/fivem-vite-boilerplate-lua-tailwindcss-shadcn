
# fivem-vite-boilerplate-lua-tailwindcss-shadcn

This is a starter project file + tailwindcss. It includes modules for data exchange and a basic UI display.


## Installation

Install fivem-vite-boilerplate-lua with npm

```bash
  https://github.com/chronotechlab/fivem-vite-boilerplate-lua-tailwindcss.git
  cd fivem-vite-boilerplate-lua
  npm install
```
## Documentation

#### sendDataToLua

'sendDataToLua' is a helper function used to send data from the Frontend (Vite + React / NUI) to the Lua side of a FiveM resource using NUI callbacks via an HTTP POST request.

```bash
export async function sendDataToLua(resourceName: string, name: string, payload: any = { hello: "world" }) {
  try {
    const res = await fetch(`https://${resourceName}/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.error("Failed to send data to Lua:", err)
    return null
  }
}

```

#### Example Usage (React)

```bash
sendDataToLua("my_resource", "getPlayerData", {
  playerId: 1,
})
```

#### Lua Side Example (FiveM)
```bash
RegisterNUICallback("getPlayerData", function(data, cb)
  print(data.playerId)

  cb({
    success = true,
    name = "PlayerName"
  })
