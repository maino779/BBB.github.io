document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".humburger");
    const navi = document.querySelector("#navi");


    const navLinks = document.querySelectorAll('.nav-menu a'); // メニュー内のリンク

     // リンクをクリックしたときにメニューを非表示にする
     navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navi.classList.remove('active'); // メニューを閉じる
            btn.classList.remove('active'); // ハンバーガーアイコンの状態をリセット
        });
    });


    if (btn && navi) {
        btn.addEventListener("click", function() {
            btn.classList.toggle("active");
            navi.classList.toggle("active");
        });
    }
});



$(window).on('scroll', function() {
    $('.reason-contents-text').each(function() {
        const elemPos = $(this).offset().top; // 要素の位置
        const scroll = $(window).scrollTop(); // 現在のスクロール位置
        const windowHeight = $(window).height(); // ウィンドウの高さ

        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('inview'); // 表示範囲に入ったらクラス追加
        }
    });
});


$(window).on('scroll', function () {
    $('.voice-contents').each(function () {
        const elemPos = $(this).offset().top; // 要素の位置
        const scroll = $(window).scrollTop(); // スクロール量
        const windowHeight = $(window).height(); // ウィンドウの高さ

        // 表示範囲に入ったら `inview` クラスを追加
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('inview');
        }
    });
});
