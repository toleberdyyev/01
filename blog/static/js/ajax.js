var captcha = $("#gogl_captcha").html()
console.log(captcha.length)
$(document).ready(function(){
  $('#comment').submit(function(){
    var str=$(this).serialize()
    var content = $('#comments_content').html()
    var author = $('#id_author').val()
    var text =$('#id_text').val()
    var data_l="<p><b>"+String(author)+"</b>: "+String(text)+"</p>"
    $.ajax({
      type:'POST',
      data:str,
      success:function(html){
        $('#comments_content').html(content+data_l);
        console.log(captcha.length)
        $('#id_author').val('')
        $('#id_text').val('')
      }
})
    return false;

  })
})
