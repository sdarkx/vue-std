<template>
    <div>
        <p v-for="(it, index) in name" :key="index" @click="getName(it,$event)">{{ it }}</p>
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
        // 传递参数同时传递event对象
        getName(msg, e) {
            console.log(msg);
        },
    }
}
</script>
