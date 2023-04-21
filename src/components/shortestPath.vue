<template title>
    <el-collapse-item title="最短路径" name="1">
        <el-row>
            <el-col :span="24">
                <el-input v-model="sourceInput" placeholder="请输入起点名称" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input v-model="targetInput" placeholder="请输入终点名称" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-select v-model="typeValue" class="m-2" placeholder="请选择规划参数" clearable>
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-button type="primary" @click="submit">查询</el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="clear">清空</el-button>
            </el-col>
        </el-row>
    </el-collapse-item>
</template>

<script>
export default {
    name: "shortestPath",
    methods: {
        submit() {
            // 输出起点和终点
            let data = {
                from: this.sourceInput,
                to: this.targetInput,
                type: this.typeValue
            }
            console.log(data);
            console.log("submit");

            let url = "/api/shortest-path/"

            this.$http.get(url, {
                params: data
            }).then((response) => {
                console.log(response.data);
            });
        },
        clear() {
            this.sourceInput = "";
            this.targetInput = "";
            this.typeValue = "";
            console.log("clear");
        },
    },
    data() {
        return {
            sourceInput: "",
            targetInput: "",
            typeValue: "",

            options: [{
                value: 0,
                label: "参数一",
            }, {
                value: 1,
                label: "参数二",
            }, {
                value: 2,
                label: "参数三",
            },
            ],
        };
    },
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}
</style>
