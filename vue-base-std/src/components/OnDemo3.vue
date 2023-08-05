<template>
    <div>
        <h3>事件修饰符</h3>
        <a @click="ButtonClick" href="https://www.baidu.com">百度</a>
        <!-- 或者下面这样写 -->
        <a @click.prevent="ButtonClick" href="https://www.baidu.com">百度</a>
        <h1>123</h1>
        <div @click="div">
            <p @click="divp">测试冒泡</p>
            <h1></h1>
            <p @click.stop="divp">测试冒泡</p>
            <!-- 阻止事件冒泡 -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 
        }
    },
    methods: {
        ButtonClick(e){
            // 阻止默认事件 点击不再跳转链接
            e.preventDefault(); 
            console.log("dianji");
        },
        // 单机会触发两个事件,父级div事件也会触发
        div(){
            console.log("div");
        },
        divp(e) {
            // 阻止父级元素事件执行
            e.stopPropagation();
            console.log("divp");
        },
    },
}
</script>
