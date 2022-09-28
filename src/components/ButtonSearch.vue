<template>
  <button class="botaoPesquisar" type="submit" @click="searchError">
    Pesquisar
  </button>
</template>

<script>
export default {
  name: "ButtonSearch",
  data() {
    return {};
  },

  methods: {
    searchError() {
      this.$emit("searchError");
    }
  }
};
</script>

<style lang="scss">
.botaoPesquisar {
  height: 42px;
  width: 122px;
  color: #fff;
  background-color: #6ec1e4;
  font-family: "Barlow", Barlow;
  background-image: linear-gradient(
    to right bottom,
    #eb4e3f,
    #f25f39,
    #f77032,
    #fb812b,
    #fd9225
  );
  border-radius: 13px 13px 13px 13px;
  font-size: 23px;
  cursor: pointer;
  border-style: none;
  margin-left: 10px;
}
</style>
