<template>
    <div id="book-city">
        <!-- 书城 -->
            <p>我是书城</p>  
            <More />
            <Book /> 
            <!-- <BookDetail /> -->
    </div>
</template>

<script>
  import More from '@/components/More'
  import Book from '@/components/Book'
  import BookDetail from '@/views/BookDetail'
export default {
    name: "BookCity",
    components:{
        More,Book,BookDetail
    }
}
</script>

<style scoped>
#book-city{
    margin-top: 100px;
}

</style>
