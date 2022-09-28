<template>
  <div>
    <treeselect
      v-model="routes"
      :multiple="true"
      :options="options"
      :placeholder="placeholderFromParent"
      class="vue-treeselect__value-container"
    />
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { listOfRoutes } from "../constantes";

export default {
  components: { Treeselect },
  name: "SearchBar",
  data() {
    return {
      routes: [],
      options: listOfRoutes,
      placeholderFromParent: this.placeholder
    };
  },
  props: ["placeholder"],

  watch: {
    routes() {
      console.log(this.routes);
      this.$emit("selectRoute", this.routes.join(","));
    }
  }
};
</script>

<style lang="scss">
.vue-treeselect__control {
  height: 40px;
  width: 560px;
  transition: width 1s ease-out;
  padding-left: 10px;
  border-radius: 13px 13px 13px 13px;
  border-style: none;
  background-image: none;
  font-family: "Barlow", Barlow;
  font-size: 15px;
}
</style>
