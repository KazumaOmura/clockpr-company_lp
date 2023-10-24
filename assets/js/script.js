/*===============================
スムーススクロール
===============================*/
jQuery('a[href^="#"]').on('click', function(e){
	e.preventDefault();

  let targetY = 0;
  let href = jQuery(this).attr("href");
  if(href === "#"){
    targetY = jQuery('html').offset().top;
  }else{
    let headerHeight = jQuery('header').innerHeight();
    targetY = jQuery(href).offset().top - headerHeight;
  }

  // animateで移動します
  jQuery('html, body').animate({scrollTop : targetY}, 500, 'swing');

	return false;
});

/*===============================
アニメーション ふわっと表示
===============================*/
new WOW().init();

/* アニメーション ふわっと表示オプション */
jQuery(function(){
  const durationTime = 2;     /* アニメーション継続時間(s) */
  const delayInterval = 0.3;  /* 横並び要素のアニメーション時差(s) */
  const offset = 20;          /* アニメーション開始オフセット(px) */

  /*** アニメーションの開始オフセットを調整 ***/
  $('.wow').attr('data-wow-offset',offset);

  /*** アニメーションの継続時間を調整 ***/
  $('.wow').attr('data-wow-duration',durationTime + "s");

  /*** 横並び要素の時差設定***/
  if(window.matchMedia('(min-width:768px)').matches) {
    /* PC（768px以上)のとき、横並びカードのWOWオプションを指定 */

    // setWowDelayForCard('.structure__list','.structure__card');
    // setWowDelayForCard('.effect__list','.effect__graph__img');

    /* 指定された横並びCardにWOW.jsアニメーションのdelayTimeを設定 */
    /* delayTimeはdelayIntervalずつ、ずらして設定する */
    function setWowDelayForCard(list,card){
      let delayTime = 0;
      $(list).find(card).each(function(index){
        delayTime = index * delayInterval;
        $(this).attr('data-wow-delay',delayTime + "s");
      });

    }
  }
});