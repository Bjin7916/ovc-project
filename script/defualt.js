let navbar = document.getElementById("navbar");
let navbarOffset = navbar.offsetTop; // navbar 가 부모인 body 상단에서부터 떨어진 거리

window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset, document.documentElement.scrollTop);
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
// nav 클릭 이벤트
$('#join').click(function(){
	window.location.href="joinform.html"
})

$('#login-cl').click(function(){
    if($('#Username') == ""){
        alert('아이디를 입력해주세요.')
    }
})

$('#login-cl').click(function(){
    alert('비밀번호를 입력해주세요.')
    if($('#Password') == ""){
    }
})