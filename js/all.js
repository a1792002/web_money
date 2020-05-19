$(function(){

  // header 搜尋按鈕
  $(".btn_search").click(function(){
    $(".menu_list").css("top","60px");
  });

  // header 菜單按鈕
  $(".btn_menu").click(function(){
    $(".menu_list").css("top","60px");
  })

  // header 菜單頁面關閉按鈕
  $(".btn_close").click(function(){
    $(".menu_list").css("top","-100%");
  })


});