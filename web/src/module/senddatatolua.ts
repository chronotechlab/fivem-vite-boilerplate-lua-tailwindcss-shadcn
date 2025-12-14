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
