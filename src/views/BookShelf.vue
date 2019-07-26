<template>
    <div id="book-shelf">
        <!-- 书架 -->
        <div class='bookone'>
            <ul class='books'>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>小公司小公gcgjjjjjjjjjjjjjjjjjjjjjjjjc</p>
            </li>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>书嘻哈帮</p>
            </li>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>书</p>
            </li>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>书</p>
            </li>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>书</p>
            </li>
            <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=3963626460,748883260&fm=26&gp=0.jpg" alt="">
                <p>书</p>              
            </li>
             <li>
                <img src="http://img0.imgtn.bdimg.com/it/u=2417024038,232503512&fm=26&gp=0.jpg" alt="">             
            </li>
        </ul>  
        </div>
        
        <p>我是书架</p>  
    
    </div>
</template>

<script>
export default {
    name: "BookShelf"
}
</script>

<style lang='less' scoped>
#book-shelf{
     margin-top: 60px;
     width: 100%;
}
.bookone{
    width: 100%;
}
.books{
      width: 94%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow: hidden;
      align-items: center;
      margin: 0 auto;

}
li{
    width: 26%;
    height: 100%;
    // box-sizing: border-box;
}
li img{
    width: 80px;
    height: 120px;
    border-radius:10px; 
    text-align: center;
}
li p{
    text-align: center;
    font-size: 15px;
    height: 50px;    
     overflow: hidden;
     text-overflow: ellipsis;
}



</style>
