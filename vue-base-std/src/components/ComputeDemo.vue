<template>
    <div>
        <h2>{{ result.name }}</h2>
        <!-- <p>{{ result.comcnt.length > 0 ? 'Yes' : 'No' }}</p> 不好 臃肿 -->
        <p>{{ ItComputed }}</p>
        <p>{{ ItComputeds() }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result:{
                name:"zhangsan",
                comcnt:[
                    "a", 'b', 'c',
                ]
            }
        }
    },
    // 计算属性
    computed: {
        ItComputed(){
            return this.result.comcnt.length > 0 ? 'Yes' : 'No';
        },
    },
    // 函数,方法
    methods: {
        ItComputeds() {
            return this.result.comcnt.length > 0 ? 'Yes' : 'No';
        },
    },
}
</script>
