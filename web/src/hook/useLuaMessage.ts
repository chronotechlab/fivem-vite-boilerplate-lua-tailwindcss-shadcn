import { useState, useEffect } from "react"

// type LuaMessageHandler = (payload: any) => void

export function useLuaMessage(action: string) {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        const handler = (event: MessageEvent) => {
            if (event.data.action === action) {
                setData(event.data.payload)
            }
        }

        window.addEventListener("message", handler)

        return () => {
            window.removeEventListener("message", handler)
        }
    }, [action])

    return data
}
