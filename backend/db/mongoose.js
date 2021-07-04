const mongoose = require("mongoose");

//mongoDBとの接続「mongodb+srv://[ユーザーネーム]:[パスワード]@[クラスター名].~~~/[DB名]?~~~」
mongoose.connect(
  "mongodb+srv://masa:98J9ZogTz9OZirUp@test.nshi4.mongodb.net/test?retryWrites=true&w=majority",
  { useFindAndModify: false } //findAndmodifyメソッドは使いません、という指定。(findOneAndUpdateなどがあるため)
);
mongoose.connection.once("open", () => {
  console.log("db connected");
});

module.exports = mongoose;
