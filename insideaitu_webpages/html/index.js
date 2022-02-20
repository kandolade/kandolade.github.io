document.addEventListener('DOMContentLoaded', () =>{
    const intro = document.querySelector('.intro');
    const header = document.querySelector('.nav_bar');
    const scrollItems = document.querySelectorAll('.cont');
    const textItemsR = document.querySelectorAll('.contXR');
    const textItemsL = document.querySelectorAll('.contXL');
    const logoAnim = document.querySelector('.intro__title');

    function logoAn()
    {
        logoAnim.classList.add('_anim');
    }
    function headerFixed()
    {
        let scrollTop = window.scrollY;
        let introHeight = intro.clientHeight*2;
        if(scrollTop >= introHeight)
        {
            header.classList.add('fixed');
        }
        else
        {
            header.classList.remove('fixed');
        }
    }
    function talksAnimation()
    {
        let animHeight;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            animHeight = (intro.clientHeight*2)+window.scrollY;

        }
        else
        {
            animHeight = (intro.clientHeight/1.4)+window.scrollY;
        }
        scrollItems.forEach(el=>{
            let scrollOffset = el.offsetTop;
            if(animHeight>=scrollOffset)
            {
                el.classList.add('talks_animation');
            }
            else
            {
                el.classList.remove('talks_animation');
            }
        });
    }
    function XAnimationR()
    {
        let animHeight;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            animHeight = (intro.clientHeight*2)+window.scrollY;

        }
        else
        {
            animHeight = (intro.clientHeight/1.4)+window.scrollY;
        }
        textItemsR.forEach(el=>{
            let scrollOffset = el.offsetTop;
            if(animHeight>=scrollOffset)
            {
                el.classList.add('_anim_xR');
            }
            else
            {
                el.classList.remove('_anim_xR');
            }
        });
    }
    function XAnimationL()
    {
        let animHeight;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            animHeight = (intro.clientHeight*2)+window.scrollY;

        }
        else
        {
            animHeight = (intro.clientHeight/1.4)+window.scrollY;
        }
        textItemsL.forEach(el=>{
            let scrollOffset = el.offsetTop;
            if(animHeight>=scrollOffset)
            {
                el.classList.add('_anim_xL');
            }
            else
            {
                el.classList.remove('_anim_xL');
            }
        });
    }

    headerFixed();
    talksAnimation();
    logoAn();
    XAnimationR();
    XAnimationL();
    window.addEventListener('scroll',()=>{
        headerFixed();
        talksAnimation();
        XAnimationR();
        XAnimationL();
    });
});
const buttons = document.querySelectorAll('.butt');
buttons.forEach(btn =>
{
    btn.addEventListener('click',function (e)
    {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        let ripples = document.createElement('div');
        ripples.className = 'butt_animation';
        ripples.style.left = x +'px';
        ripples.style.top = y +'px';
        this.appendChild(ripples);
        setTimeout(()=>{
            ripples.remove()
    },1000);
    })

})

var musicSpan = document.getElementById('musicSpan');
musicSpan.addEventListener('click',function(){
    document.getElementById('sound').play()
})