<template>
    <div>
        <h2>Parent</h2>
        <div>
            <ChildVue :heritage="msg" :age="age" :names="names" :userInfo="userInfo"/>
        </div>
    </div>
</template>

<script>
import ChildVue from './ChildVue.vue'

export default {
    data(){
        return {
            msg: "123123",
            age: 100,
            names:['a', 'c', 'd', '123'],
            userInfo: {
                name: "tanphgo",
                phone: "18200000000",
            }
        }
    },
    components: {
        ChildVue,
    },
}
</script>