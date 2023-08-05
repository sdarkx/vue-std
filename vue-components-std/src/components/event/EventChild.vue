<template>
    <div>
        <h4>Child</h4>
        <div>
            <button @click="clickEventChild">数据传输</button>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {}
    },
    methods:{
        clickEventChild(){
            console.log("Child");
            // 自定义事件
            // 第二个参数是参数 数据
            this.$emit("clickEventParent", "this is child");
        },
    },
}
</script>