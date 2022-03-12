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

  let str01 = document.getElementsByClassName("space"); //str01をおみくじの結果を入れる箱のクラス名として取得している。

  console.log(str01);

  let i = 0; //HTMLの要素数を示している

  console.log(str01.length); //HTMLの要素数を調べている

  // console.log(str01.length[0]); //添字を使って1つ目の要素を取り出す

  let str01_sub = str01.innerHTML; //divのHTML(文字列)を取得

  // console.log(str01_sub); //文字列の取得を確認する為に必要な項目

  console.log(str01[0]); //添字を使って一つ目の要素を取り出す (ここでいうと<div class="space">今日の運勢は何かな?</div>)
  
  let str02 = fortune[Math.floor(Math.random() * fortune.length)]; //str01を、おみくじの中身で何が出るかを決める形に定めている

  str02 = "今日の運勢は、" + str02 + "です。"; //「今日の運勢は、〇〇です。」という文字列を定義している

  console.log(str02);//コンソールで「今日の運勢は、〇〇です。」と出力する

  for (i = 0; i < str01.length; i++){
    var str_sub = str01[i].innerHTML; //HTMLを取り出す

    str_sub = str_sub.replace(/今日の運勢は何かな？/g , str02); // replaceする

    document.getElementsByClassName("space")[i].innerHTML = str_sub; //元のHTMLソースをreplaceしたものに置き換える

  }
  // str01_sub = str01_sub.replace(/今日の運勢は何かな?/g , 'str02'); //新しい変数を使って、「今日の運勢は何かな?」を「今日の運勢は〇〇です。」に置き換えている
  
  // console.log(str01_sub);

  // document.getElementsByClassName("space").innerHTML = str01_sub;//元のHTMLコードをreplaceしたものに置き換える

  // if (str01 = "今日の運勢は何かな?") {
  //   document.getElementsByClassName('space').innerHTML = result;
  // } else {
  //   document.getElementsByClassName('space').innerHTML = "今日の運勢は何かな?";
  // } もしもstr01が「今日の運勢は何かな?」となっていれば、おみくじの結果を入れて、

  // console.log(result); //置き換えた内容をコンソールで出す。



  // if (str01.textContent =="今日の運勢は何かな?") {
  //   str01.innerText = str02;
  // } else {
  //   str01.innerText = "今日の運勢は何かな?";
  // } //もしも文字が「今日の運勢は何かな?」となっていれば、おみくじの結果を出力する。そうでなければ、「今日の運勢は何かな?」と出力する

  // const btn = document.getElementsByClassName('btn');

  // btn.addEventListener('click', () => {
  //   btn.textContent = str02;
  // })

  // console.log(str01);
  // console.log(str02);

  // new_str = new_str.replace(str01, str02);
  // 取得したデータを書き換える

  // str01.textContent = "今日の運勢は、" + str01 + "です。";

  // let strElement = str01[0].innerHTML;

  // console.log(strElement);
  // document.getElementsByClassName("space").innerHTML = fortune[Math.floor(Math.random() * fortune.length)];
  // class要素の「space」に、「「fortune」という配列の内容を読み取る」というHTML要素を取得している

  // console.log(new_elements); //elementsクラスの内容をconsole.logで表現している
}

// window.onload = function () {
//   document.getElementById("sampleForm").onreset = function () {
//     return confirm("内容をリセットしますか？");
//   }
// }

function ButtonReload() {
  if (window.confirm('リセットしてもよろしいでしょうか？')) { //確認ダイアログを表示
    // return document.getElementsByClassName("space").innerHTML = "今日の運勢は何かな？"; //「OK」時はリセットを実行
    window.location.reload();
    //reloadメソッドよりページをリロード
  } else { //「キャンセル」時の処理
    window.alert('キャンセルされました'); //警告ダイアログを表示
    return false; //リセットを中止
  }
}