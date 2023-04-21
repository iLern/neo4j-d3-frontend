<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-card class="box-card"> 图数据库可视化系统</el-card>
            </el-header>
            <el-container>
                <el-aside style="margin: 20px">
                    <el-card class="box-card">
                        功能面板
                        <div class="demo-collapse">
                            <el-collapse accordion>
                                <!--                                TODO：数据加载问题-->
                                <ShortestPath></ShortestPath>
                                <el-collapse-item title="待开发"></el-collapse-item>
                                <el-collapse-item title="待开发"></el-collapse-item>
                                <el-collapse-item title="待开发"></el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-card>
                </el-aside>

                <el-main>
                    <el-card class="box-card">
                        <Graph></Graph>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Graph from "@/components/Graph.vue";
import ShortestPath from "@/components/shortestPath.vue";

export default {
    name: "Panel",

    data() {
        return {};
    },

    created() {
        console.log("Panel created");
    },

    components: {
        ShortestPath,
        Graph,
    },
};
</script>

<style>
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
