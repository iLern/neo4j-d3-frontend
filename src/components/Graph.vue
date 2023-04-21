<template>
    <div>
        <ForceDirected width="1000" height="700" :nodes="nodes" :edges="edges"></ForceDirected>
    </div>
</template>

<script>
import ForceDirected from "@/components/ForceDirected.vue";

function mapNameToId(name, nodes) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].name === name) {
            return i;
        }
    }
    return -1;
}

function loadAll() {
    let url = "/api/arm-status/all";
    // 异步调用
    this.$http.get(url).then((response) => {
        let data = response.data;

        console.log(data);

        // 箭头函数中this的作用域继承于其父级
        this.nodes = data.nodes;

        let edges = [];
        data.edges.forEach((item) => {
            let source = mapNameToId(item.from, this.nodes);
            let target = mapNameToId(item.to, this.nodes);

            edges.push({
                source: source,
                target: target,
                parameter: item.parameter,
                planningMethod: item.planningMethod,
            });
        });
        this.edges = edges;
    }).then(() => {
        console.log("loadAll finished");
        console.log(this.nodes);
        console.log(this.edges);
    })
}

export default {
    name: "Graph",

    components: {
        ForceDirected,
    },

    data: function () {
        return {
            nodes: [
                // { name: "状态1", jointAngle:[1, 2, 3, 4], position: "left"},
            ],
            edges: [
                // {source: 0, target: 1, parameter: [1, 2, 3], planningMethod: '1'}
            ],
        };
    },

    created: function () {
        loadAll.call(this);
    },
};
</script>

<style></style>
