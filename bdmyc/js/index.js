$('#login-button').click(function (event) {
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(pwd=="210921"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
		}
	else{
		alert("Wrong Password");
	}
});
