<template>
  <div>
    <input
      placeholder="Limite de Erros"
      class="input"
      type="number"
      v-model="chosenLimit"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: "Limit",
  data() {
    return { chosenLimit: null };
  },

  watch: {
    chosenLimit() {
      this.$emit("chooseLimit", this.chosenLimit);
    }
  }
};
</script>

<style lang="scss">
.input {
  display: flex;
  align-items: center;
  height: 40px;
  width: 150px;
  transition: width 1s ease-out;
  padding-left: 10px;
  border-radius: 13px 13px 13px 13px;
  border-style: none;
  margin-left: 20px;
  background-image: none;
  font-family: "Barlow", Barlow;
  font-size: 15px;
}
</style>
