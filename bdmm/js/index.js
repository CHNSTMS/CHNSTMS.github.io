$('#login-button').click(function (event) {
    var pwd=document.getElementById("pwd").value;
    if(pwd=="220114"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
		}
	else{
		alert("密码错误");
	}
});
