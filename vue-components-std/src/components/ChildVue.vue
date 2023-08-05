<template>
    <div>
        <h3>Child</h3>
        <div>
            <p>{{ title }}</p>
            <p>{{ age }}</p>
            <ul>
                <li v-for="(it, index) of names" :key="index">{{ it }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String, // 类型不同会有警告
            // 或者 type: [Number, String, Object ...]
            // required: true, // 必选项 必须传 没有这个参数会报警告
        },
        age: {
            type: Number,
            default: 13, // 没有数据传过来默认显示的值
        },
        // 数字和字符串可以直接default,但是如果是数组和对象，必须通过工厂函数返回默认值 
        names: {
            type: Array,
            default() {
                return ["null"];
            }
        }
    },
}
</script>