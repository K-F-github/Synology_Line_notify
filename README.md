# Synology_Line_notify

### DSM 7.0 Webhook to Line Notify

### Getting Started

### 1.Install DSM docker Container

開啟DSM docker套件/open DSM docker

- 搜尋/search K-F-github

- 下載/download  synlogy_line_notify
<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/set-docker1.png?raw=true" height="500px">

- 下載完成後/download finish

部屬容器/Deployment continer

 - CPU 低/low  RAM 128MB 
 
<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/set-docker2.png?raw=true"  height="500px">

進階設定/Advanced settings

- 啟用自動重啟/auto restart

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/set-docker3.png?raw=true"  height="300px">

- port設定/port forwaring

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/set-docker4.png?raw=true"  height="300px">


### 2.申請line notify Token
到這個網站 [LINE Notify](https://notify-bot.line.me/zh_TW/) 登入/Login
- 點擊發行權杖/ Generate token

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/line-notify-1.png?raw=true"  height="300px">

- 填入通知顯示的名稱與選擇要通知的群組
- Please enter a token name to be displayed before each notification.Select a chat to send notifications to.

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/line-notify-2.png?raw=true"  height="500px">

- 複製產生出來的token/copy the token
- If you leave this page, you will not be able to view your newly generated token again. Please copy the token before leaving this page.

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/line-notify-3.png?raw=true"  height="300px">

### 3.DSM 綁定/bind webhook
- 進入控制台/click ControlPanel
- 進入通知設定/click Notifications
- 點擊通知服務/click pushSettingTab
- 點擊管理 Webhook/click "Control Webhook"
- 點擊新增/click New

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-1.png?raw=true"  height="500px">

- 選自定 / click custom

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-2.png?raw=true"  height="500px">

- 填寫一個名稱/ write a name
- Webhook網址填入 http://127.0.0.1:[docker設定的port]/?message=Hello+world
- Webhook url : http://127.0.0.1:[docker port]/?message=Hello+world

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-3.png?raw=true"  height="500px">

- 新增/add header
- 參數/option：Authorization
- 值/value：Bearer [line token]
- PS.值Bearer與token中間有個空格
- PS.Bearer and token have a space in middle

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-4.png?raw=true"  height="500px">

-設定message 為 通知內文 / Set message type FULLTEXT

-設定Authorization 為 其他參數 / Set Authorization type OTHER

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-5.png?raw=true"  height="500px">

-完成後可以點擊發送測試通知  /  send test Notifications after finish setting

<img src="https://github.com/K-F-github/Synology_Line_notify/blob/main/docs/dsm-notify-6.png?raw=true"  height="500px">
