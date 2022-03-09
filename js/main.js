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
function ButtonClick() { //関数ButtonClickで定義することで、ボタンをクリックする度に、繰り返し処理を使う事ができる
  const fortune = ["大吉", "中吉", "小吉", "末吉", "凶"]; //おみくじの内容を配列で作る

  // document.getElementsByClassName('space').textContent="今日の運勢は何かな？" //spaceクラスの文字をelementsで定義している

  // str01 = str01.textContent;

  // console.log(elements);

  let str01 = fortune[Math.floor(Math.random() * fortune.length)]; //str01を、おみくじの中身で何が出るかを決める形に定めている

  let str02 = document.getElementsByClassName('space'); //str02をおみくじの結果を入れる箱のクラス名に定めている。

  str02.textcontent = str02.replace(str02, str01);

  // str02 = str02.textContent;

  // console.log(str01);

  // console.log(str02);

  // .textContent = str02;

  // document.getElementsByClassName("space").innerHTML = fortune[Math.floor(Math.random() * fortune.length)];
  // class要素の「space」に、「「fortune」という配列の内容を読み取る」というHTML要素を取得している

  // console.log(new_elements); //elementsクラスの内容をconsole.logで表現している
}



