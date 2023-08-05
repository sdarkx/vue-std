<template>
    <div>
        <h3>组件事件</h3>
        <div>
            <EventChild @clickEventParent="parentHandle"/>
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
import EventChild from './EventChild.vue'

export default {
    data() {
        return {
            msg: '',
        }
    },
    components: {
        EventChild,
    },
    methods: {
        parentHandle(data){
            console.log("Parent", data);
            this.msg = data;
        },
    },
}
</script>