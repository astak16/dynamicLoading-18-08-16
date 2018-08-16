let len = 1
let isloading = false


$(document).ready(function(){
    $.ajax({
        url:'/xxx',
        method:'GET'
    }).then(
            (xhr)=>{
                render(xhr,2)
            },
            ()=>{}
        )
})

$('.tittle').on('click','li',function(){

    let $this = $(this)
    let index = $this.index()
    $this.addClass('active').siblings().removeClass('active')
    $('.content').parent('.wrapper').find('li > img').eq(index + 3)
        .attr('src',"http://img13.360buyimg.com/N3/jfs/t2461/336/2166939566/101221/3af27699/56c426a5N9b6673f4.jpg")
})

$('.button').on('click',function(){
    if(isloading){return}
    isloading = true
    $.ajax({
        type:'GET',
        url:'/yyy',
        data:{
            // current:current,
            len:len
        },
    }).then((xhr)=>{
        render(xhr,len)
        isloading = false

    },(xhr)=>{
        console.log(xhr.status)
        isloading = false

    })
})
function render(xhr,count){
    for(let key in xhr){
        let template = `      
        <li>
            <img src="" alt="">
            <span class="description"></span>
            <span class="price"></span>
            <div><span>立即抢购</span></div>
        </li>
    `
        for(let i = 0; i < count; i++){
            let $node = $(template)
            $node.find('img').attr('src',xhr[key].img)
            $node.find('.description').text(xhr[key].name)
            $node.find('.price').text(xhr[key].price)
            $('.content').append($node)
        }
    }
}
