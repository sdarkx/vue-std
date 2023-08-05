<template>
    <div>
        <h2>Parent</h2>
        <div>
            <ChildVue :heritage="msg"/>
        </div>
    </div>
</template>

<script>
import ChildVue from './ChildVue.vue'

export default {
    data(){
        return {
            msg: "123123"
        }
    },
    components: {
        ChildVue,
    },
}
</script>