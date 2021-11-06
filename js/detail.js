let articleNum=1;
$(document).ready(function(){
    initBtnFunc();  
    SetProgress();
});

// 按鍵event
function initBtnFunc(){
    $('.btn-next').click(function(event){;
        switchAriticle('next');
    });
    $('.btn-prev').click(function(event){
        switchAriticle('prev');
    });
    $('.btn-prev').hide();
}
//切換段落
function switchAriticle(situation){
    $('#article'+articleNum).show();
    switch (situation) {
        case 'next': 
            if(articleNum<5){
                $('nav').hide();
                gsap.to('#article'+articleNum,{
                    duration:1,
                    x:$('.whole').width()*-1,
                    onComplete : backtoCenter,
                    onCompleteParams: [articleNum,situation]
                });
                articleNum++;
                $('#article'+articleNum).show();
                gsap.to('#article'+articleNum,{duration:0, x:$('.whole').width()});
                gsap.to('#article'+articleNum,{duration:0, x:0});
                SetProgress();
            } 
            break;
        case 'prev': 
            if(articleNum>1){
                $('nav').hide();
                gsap.to('#article'+articleNum,{
                    duration:1,
                    x:$('.whole').width(),
                    onComplete : backtoCenter,
                    onCompleteParams: [articleNum,situation]
                });
                articleNum--;
                $('#article'+articleNum).show();
                gsap.to('#article'+articleNum,{duration:0, x:$('.whole').width()*-1});
                gsap.to('#article'+articleNum,{duration:0, x:0});
                SetProgress();
            }
            break;
    }
}
// 無條件進位
function SetProgress(){
    let w = Math.floor((articleNum/5)*100);
    $('.progress-bar').css('width',w+'%');
}
//隱藏與否
function backtoCenter(oldNum,situation){
    $('#article'+oldNum).hide();
    gsap.to('#article'+oldNum,{duration:0,x:0});
    $('nav').show();
    switch (situation) {
        case 'next':
            $('nav').show();
            $('.btn-next').show();
            $('.btn-prev').show();
            if(articleNum==5){
                $('.btn-next').hide();
            }
            else if(articleNum==6){
                $('nav').hide();
            }
            break;
        case 'prev':
            $('nav').show();
            $('.btn-next').show();
            $('.btn-prev').show();
            if(articleNum==1){
                $('.btn-prev').hide();
            }
            break;
    }
}
