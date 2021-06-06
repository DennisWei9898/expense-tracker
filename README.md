# Project name：老爸 or AnyOne 的私房錢

- 廣志大發善心，為了普天下的老爸們，特地開放讓任何人可以註冊使用線上私房錢服務

- 透過網頁簡單記帳，核心功能為讓使用者輕鬆的新增、修改、刪除和統計不同種類的「支出紀錄」，並且快速從ＦＢ註測使用！

- 網址：https://thawing-lowlands-17413.herokuapp.com/

- 測試帳號：root@example.com 測試密碼：12345678

# Features：功能列表

- 使用者可以在首頁瀏覽所有支出種類和總金額

- 登入後網頁名字會變換成使用者的名稱

- 可以快速透過 email 或是ＦＢ註冊，讓使用者們的私房錢不會混再一起

- 可以新增一筆支出

- 可以編輯支出的所有屬性（一次一個）

- 可以刪除任何一筆敏感的支出（被打）

- 在首頁，可以篩選出不同類別的支出，以及對應的總金額

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)
[Mongodb](https://www.mongodb.com/)
[Heroku](https://dashboard.heroku.com/)

# Installing Procedure：專案安裝

1.開啟終端機，新建資料夾後，並 cd 到預計要儲存的專案位置，執行：

```
mkdir expense-tracker //建立專案資料夾
```

```
cd expense-tracker //切換到專案資料夾
```

```
git clone https://github.com/DennisWei9898/expense-tracker
```

2.安裝套件和種子資料：

```
npm install //安裝 npm 套件
```

```
npm run seed //安裝種子資料
```

3.啟動伺服器，執行 app.js 檔案

```
npm run dev //成功啟動後，終端機會顯示：This server is running on http://localhost:3000
            //mongodb connected!
```

4.打開網址，體驗專屬的私房錢服務

> 進入下列本地網址來體驗老爸的私房錢服務： [http://localhost:3000/](https://)
> 或是可以到自行部署的 heroku 網站上體驗服務

# 作業過程

- 這次綁定ＦＢ登入後，專案變得更完整～

- 來不及研究完如何用 date 來紀錄使用者登記的時間，所以暫時還是用 String

- 可以在優化的部分：之後會陸續加上使用者登錄、篩選年/月/日/時的功能，待整體完成的差不多後，再開始用此網站的格式，製作原子習慣的網站
