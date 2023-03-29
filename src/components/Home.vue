<template>
  <div>
    <ForceDirected width="1200" height="800" :nodes="nodes" :edges="edges"></ForceDirected>
  </div>
</template>

<script>
import ForceDirected from "@/components/ForceDirected.vue";

export default {
  name: "Home",

  components: {
    ForceDirected
  },

  data: function() {
    return {
      nodes: [
        // { name: "状态1", position: "left"},
        // { name: "状态2", position: "right" },
        // { name: "状态3", position: "center" },
        // { name: "状态4", position: "left" },
        // { name: "状态5", position: "right" },
        // { name: "状态6", position: "center" },
      ],
      edges: [
        // { source: 1, target: 0, relation: "[1, 2, 3]", dis: 1.7 },
        // { source: 2, target: 0, relation: "[3 ,4, 5]", dis: 1.7 },
        // { source: 3, target: 0, relation: "[4, 5, 6]", dis: 1.7 },
        // { source: 4, target: 0, relation: "[5, 6, 7]", dis: 1.7 },
        // { source: 3, target: 4, relation: "[6, 7, 8]", dis: 1.7 },
        // { source: 5, target: 4, relation: "[7, 8, 9]", dis: 1.7 },
      ],
    };
  },

  created: function() {
    let uri = '/api/get/all';
    // 异步调用
    this.$http.get(uri).then((response) => {
      console.log(response.data)
      // 箭头函数中this的作用域继承于其父级
      this.nodes = response.data;
    })
  }
}
</script>

<style>

</style>