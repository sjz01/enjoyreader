<template>
    <div id="type">
        <!-- 只是组件，不是路由 -->
        <!-- 图书分类 中包括book图书样本 和 more一个分类的全部图书  -->  
        <div id="typeTop">
           <span>中国文学</span> <span><button>更多></button></span>
           <div class="typeBook">
               <div></div>
               <div></div>
               <div></div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Type",

}
</script>
<style scoped>
#type{
    margin-top: 20px;

}
#typeTop span{
    margin-left: 22px;
    display: inline-block;
}
#typeTop  span:nth-of-type(2){
    float: right;
    margin-right: 22px;
}
.typeBook{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.typeBook :nth-of-type(1){
    height: 100px;
    width: 60px;
    background: #eee;
}
.typeBook :nth-of-type(2){
    height: 100px;
    width: 60px;
    background: #eee;
}
.typeBook :nth-of-type(3){
    height: 100px;
    width: 60px;
    background: #eee;
}



</style>
