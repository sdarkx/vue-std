<template>
    <div>
        <h2>Parent</h2>
        <div>
            <ChildVue :title="title" :age="age"/>
        </div>
    </div>
</template>

<script>
import ChildVue from './ChildVue.vue'

export default {
    data(){
        return {
            title: "测试标题",
            age: 12,
            names: ["a", "b", "c", "d"],
        }
    },
    components: {
        ChildVue,
    },
}
</script>