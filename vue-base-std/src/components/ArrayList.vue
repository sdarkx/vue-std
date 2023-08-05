<template>
    <div>
        <h2>数组变化侦测</h2>
        <button @click="AddList">Add</button>
        <ul v-for="(it, index) in name" :key="index">{{ it }}</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: [
                "iphone", "ipad", "imac"
            ]
        }
    },
    methods: {
        AddList(){
            // 引起UI变化
            // this.name.push("zhangsan");
            // 不引起Ui变化
            this.name.concat(["zhangsan"]);
            console.log(this.name.concat(["zhangsan"]));
            // 下面引起Ui变化
            this.name = this.name.concat(["zhangsan"]);
        },
    },
}
</script>
