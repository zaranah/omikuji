'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=> {
    const results = ['大吉', '中吉', '凶'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    // 下記を7,８行目でまとめられる
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