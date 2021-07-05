# Synology_Line_notify

### DSM 7.0 Webhook to Line Notify

### Getting Started

### 1.Install DSM

開啟DSM docker套件/open DSM docker

- 搜尋/search kitten1156

- 下載/download  synlogy_line_notify
<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/set-docker1.png?raw=true" height="500px">

- 下載完成後/download finish

新增容器/create continer

 - CPU 低/low  RAM 128MB 
 
<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/set-docker2.png?raw=true"  height="500px">

進階設定/Advanced settings

- 啟用自動重啟/auto restart

<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/set-docker3.png?raw=true"  height="300px">

- port設定/port forwaring

<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/set-docker4.png?raw=true"  height="300px">


### 2.申請line notify Token
到這個網站 [LINE Notify](https://notify-bot.line.me/zh_TW/) 登入/Login
- 點擊發行權杖/ Generate token

<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/line-notify-1.png?raw=true"  height="300px">

- 填入通知顯示的名稱與選擇要通知的群組
- Please enter a token name to be displayed before each notification.Select a chat to send notifications to.

<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/line-notify-2.png?raw=true"  height="300px">

- 複製產生出來的token/copy the token
- If you leave this page, you will not be able to view your newly generated token again. Please copy the token before leaving this page.

<img src="https://github.com/kitten1156/Synology_Line_notify/blob/main/docs/line-notify-3.png?raw=true"  height="300px">
