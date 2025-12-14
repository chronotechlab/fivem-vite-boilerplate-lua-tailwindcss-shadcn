import { sendDataToLua } from '../module/senddatatolua'
import { useLuaMessage } from '../hook/useLuaMessage'

export default function Home() {

    const payload = [
        { Name: "John", LastName: "Doe" },
        { Name: "Jonathan", LastName: "Dev" }
    ]

    function GetParentResourceName() {
        return "cnt_mailbox"
    }

    function submit() {
        sendDataToLua(GetParentResourceName(), 'testsend', payload)
    }

    // ใช้ hook รับ mails จาก Lua
    const mails = useLuaMessage("updateMails")


    return (
        <div className='bg-amber-700'>
            <h1>Mailbox UI</h1>
            <button onClick={submit}>Send To Lua</button>

            <ul>
                {mails?.map((mail: any, index: number) => (
                    <li key={index}>{mail.Name}: {mail.Subject}</li>
                ))}
            </ul>
        </div>
    )
}
