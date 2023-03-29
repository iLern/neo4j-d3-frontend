<template>
  <div>
    <ForceDirected
      width="1200"
      height="800"
      :nodes="nodes"
      :edges="edges"
    ></ForceDirected>
  </div>
</template>

<script>
import ForceDirected from "@/components/ForceDirected.vue";

export default {
  name: "Home",

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
    let uri = "/api/get/all";
    // 异步调用
    this.$http.get(uri).then((response) => {
      let data = response.data;

      console.log(data);

      // 箭头函数中this的作用域继承于其父级
      this.nodes = data;

      let edges = [];
      data.forEach((item, index) => {
        if (index < data.length - 1) {
          for (let i = 0; i < item.achievableStatus.length; i++) {
            // 返回一个 Edge 对象
            let newEdge = {
              source: index,
              // 查找元素并返回下标，其为目标点的编号
              // TODO: 效率低下，需要优化
              target: data.indexOf(
                data.find((item2) => {
                  return item2.name === item.achievableStatus[i].armStatus.name;
                })
              ),
              parameter: item.achievableStatus[i].parameter,
              planningMethod: item.achievableStatus[i].planningMethod,
            };

            edges.push(newEdge);
          }
        }
      });

      this.edges = edges;
    });
  },
};
</script>

<style></style>
