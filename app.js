const express = require('express')
const app = express()
const port = 3000

//設定路由
app.get('/', (req, res) => {
  res.send('hi')
})

//啟動、設定監聽器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})