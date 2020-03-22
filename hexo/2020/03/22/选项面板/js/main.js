$(function() {
  // 添加事件
  $('.tab-panels .tabs li').on('click', function() {
    //确定所在面板，保存到变量中
    const $panel = $(this).closest('.tab-panels');
    //找到该类，去掉active；然后给被点击的元素加这个类；
    $panel.find('.tabs li.active').removeClass('active');
    $(this).addClass('active');
    // 通过rel属性确定li对应显示的面板
    const panelToShow = $(this).attr('rel'); //$(this)指向当前点击对象
    // 隐藏当前面板
    $panel.find('.panel.active').slideUp(300, showNextPanel);

    function showNextPanel() {
      //上滑成功后，删除“active”
      $(this).removeClass('active');

      $('#' + panelToShow).slideDown(300, function() {
        //我们并不知道谁要下滑，面板下滑完成添加active类
        $(this).addClass('active');
      });
    }
  });
});
