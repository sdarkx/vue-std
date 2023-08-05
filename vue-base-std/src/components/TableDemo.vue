<template>
    <div>
        <div v-for="it in result" :key="it.id">
            <p>{{ it.id }}, {{ it.name }}, {{ it.age }}</p>
            <img :src="it.avator" style="height:100px">
        </div>
        <div v-for="(it, index) of result" :key="it.id">
            <p>{{ it.id }}, {{ it.name }}, {{ it.age }}, {{ index }}</p>
        </div>
        <!-- 遍历对象信息 -->
        <div>
            <p v-for="it of userInfo" :key="it">{{ it }}</p>
        </div>
        <div>
            <p v-for="(val, key, index) of userInfo" :key="index">{{ val }}-{{ key }}-{{ index }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: [
                { id: 1, name: 'jack', age: '19', avator:"https://ts1.cn.mm.bing.net/th/id/R-C.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0" },
                { id: 2, name: 'john', age: '19', avator:"https://ts1.cn.mm.bing.net/th/id/R-C.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0" },
                { id: 3, name: 'abc', age: '19' },
                { id: 4, name: 'tango', age: '19' },
                { id: 5, name: 'tanphgo', age: '19' }
            ],
            userInfo: {
                name: "ph",
                age: "13",
                sex: "nan",
                phone: "1123",
            }
        }
    }
}
</script>
