let examBtn, introField, mainTextField;
let chk = false;
let statements = {
    maintext: 
    `<span>알</span>아서<span>잘</span><br>
    <span>딱</span><br>
    <span>깔</span>끔하고<br>
    <span>센</span>스있게`
    ,introText: `<p>중국 상하이에서 16년간 유학 생활 상무중국어를 전공한 문과생,<br>하지만 이제는 프론트 엔드 개발자가 되는 것이 꿈이 되어버린 신입 개발자 김규중 입니다. <br>현재 코딩 경력은 학원에서 코딩을 배운 6개월이 전부입니다. </p><p>코딩을 배우며 업계의 최고가 되는 꿈을 갖고 지금을 준비해왔습니다. <br>지식을 배워나가고 업무를 이해하는데 있어서 패기와 열정을 갖고 임하겠습니다. <br>모든임무에 최선을 다해 임하여 자신의 가치를 높이며, 나아가는 사람이 되고싶습니다. <br></p><p>최종 목표로는 풀스택 개발자가 되는 것 이며,<br>풀 스택 개발자가 되는 그날까지 달리고 달리겠습니다.</p>`
}
//페이지 로드 후 바로 실행되는 부분
document.addEventListener("DOMContentLoaded", function(){
    mainTextField = document.getElementById("mainTextField");
    putMainText(statements.maintext);
    //
    base.initPage();
});

let base = {

    initPage : function(){
        base.events();
        introField.innerHTML = "";//introField 하위 element들 비우기
    },

    events : function(){
        examBtn = document.getElementById("examEvntBtn");
        introField = document.getElementById("introField");

        examBtn.addEventListener("click", function(){
            chk = !chk;
            if(chk){
                examBtn.disabled = true;
                test(statements.introText);
            } else {
                introField.innerHTML = "";//introField 하위 element들 비우기
            }
        })
    },

}
async function putMainText(data){
    await new Promise(resolve => setTimeout(resolve, 2000));
    mainTextField.innerHTML = "";
    let str = data;
    let arr = data.split("<span>");
    console.log(arr);
    
    for(let i = 1; i < arr.length; i++){
            str = `<span>${arr[i]}`;
        await new Promise(resolve => setTimeout(resolve, 500));
        mainTextField.innerHTML += str;
    }
}

async function test(data){
    let introStr = data
    let introArr = introStr.split("<br>");
    
    for(let i = 0; i < introArr.length; i++){
        await new Promise(resolve => setTimeout(resolve, 500));
        introField.innerHTML += introArr[i];
    }
    examBtn.disabled = false;
}

function scrollRotate() {
    let image = document.getElementById("hd");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}
window.addEventListener('scroll',scrollRotate);

$('a').click(function(){
    let id = $(this).attr('href')
    console.log(id)
    let target = $(id).offset().top
    $('html,body').animate({
        scrollTop:target
    },200)
})