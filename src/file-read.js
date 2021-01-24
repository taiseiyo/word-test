const admin = require("firebase-admin");

// admin-sdk を使用する為の設定
const serviceAccount = require("./word-test-916dc-firebase-adminsdk-xfxsh-329680069f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://word-test-916dc-default-rtdb.firebaseio.com",
});

const fs = require("fs");
let text = fs.readFileSync("../build/word.txt", "utf-8");
let words = text.split("\n").slice(3000, 3100);

// admin.firestore().doc("words/the").set({});

for (let count in words) {
  admin.firestore().collection("words").doc(words[count]).set({});
  // console.log(words[count]);
}
