const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.quizplatform.wyf1pp0.mongodb.net",
  (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
  }
);