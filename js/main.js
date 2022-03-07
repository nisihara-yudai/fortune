'use strict';

// 自分が書いたコード

// let fortune = ["大吉", "中吉", "小吉", "末吉", "凶"]; //おみくじの内容を配列で作る

// let count = 0;
// // ボタンを押された回数を表示する

// function ButtonClick() {//ボタンがクリックされた時の処理が中に入る
//   while (count < 2) {
//     count += 1; //ボタンを一回押す度に追加される
//     let btn = Math.floor(Math.random() * 5) + 1;// ボタンをクリックするとランダムで数字を取ってくる
//     btn = fortune[btn];
//     // その数字を使っておみくじセットの中から一つ選ぶ
//     document.getElementById("space").innerHTML = btn;
//     // おみくじ結果を表示する
//   }
// }

// 手直し

// const fortune = ["大吉", "中吉", "小吉", "末吉", "凶"]; //おみくじの内容を配列で作る

// let count = 0;
// // ボタンを押された回数を表示する

// for (let i = 0; i < fortune.length; i++){
//   // 値が0から5までの配列
//   count += 1;
//   //ボタンの押した数だけカウントされる

//   let random = fortune[Math.floor(Math.random() * fortune.length)];
//   // おみくじの配列(fortune)の値からランダムに取り出す
  
//   document.getElementById("space").innerHTML = random;
//   // HTMLに値を表示する
// }


// const array = ["いちご", "パイン", "バナナ", "オレンジ"];
// let fruits = array[Math.floor(Math.random() * array.length)];
// console.log(fruits);

// 参考資料を元に作ってみた
function ButtonClick() {
  const fortune = ["大吉", "中吉", "小吉", "末吉", "凶"]; //おみくじの内容を配列で作る
  document.getElementById("space").innerHTML = fortune[Math.floor(Math.random() * fortune.length)];
  // id要素の「space」に、「「fortune」という配列の内容を読み取る」というHTML要素を取得している
}



