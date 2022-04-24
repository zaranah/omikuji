'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=> {
    // 単純おみくじ版
    // const results = ['大吉', '中吉', '凶'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    // 確率操作版
    const n = Math.random(); //Math.random()は０以上１未満の数字がランダムで出る
    if (n < 0.05) {
      btn.textContent = '大吉'; //5%
    } else if (n < 0.2){
      btn.textContent = '中吉'; //15%
    } else {
      btn.textContent = '凶'; // 80%
    }

    // 単純おみくじ版の記述長い版
    // const n = Math.floor(Math.random() * 3);
    // switch(n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}