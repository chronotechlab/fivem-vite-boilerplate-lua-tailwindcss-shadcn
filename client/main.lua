local isUIOpen = false

local function OpenUI()
    if isUIOpen then return end
    isUIOpen = true

    SetNuiFocus(true, true)
    SetNuiFocusKeepInput(false) -- สำคัญ
    SendNUIMessage({ action = "open" })
end

local function CloseUI()
    if not isUIOpen then return end
    isUIOpen = false

    SetNuiFocus(false, false)
    SendNUIMessage({ action = "close" })
end

-- คำสั่งเปิด UI
RegisterCommand("mailbox", function()
    OpenUI()
end, false)

-- รับ callback จาก React (ESC หรือปุ่ม)
RegisterNUICallback("close", function(_, cb)
    CloseUI()
    if cb then cb("ok") end
end)


RegisterNUICallback('testsend', function(data, cb)
    print(json.encode(data)) -- ดูข้อมูลที่ส่งมา

    if cb then
        cb({ success = true, message = "Callback received!" })
    end
end)







-- สมมติ data ที่ส่งกลับ
local dataToSend = {
    mails = {
        { Name = "Alice", Subject = "Hello" },
        { Name = "Bob", Subject = "Update" }
    }
}

RegisterCommand("senddatatoreact", function()
    -- ส่งไป NUI
    SendNUIMessage({
        action = "updateMails",
        payload = dataToSend.mails -- array ตรง ๆ
    })

end)

