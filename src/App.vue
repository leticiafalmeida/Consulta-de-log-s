<template>
  <div id="app" width="100%">
    <loader
      v-if="waiting"
      object="#27e6e2"
      color1="#576aeb"
      color2="#00cff4"
      size="2"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="70"
      name="circular"
    />
    <img class="logo" src="./assets/logo.png" />
    <div class="titulo">
      Consulta de Erros - Log's Explorer
    </div>
    <div class="barraPesquisaComFiltro">
      <SearchBar
        @selectRoute="route => (selectedRoute = route)"
        placeholder="Digite a Rota - Ex.: /employee"
      />
      <Limit @chooseLimit="limit => (chosenLimit = limit)" />
      <DatePickerFilter v-model="dateAndTime" />
      <ButtonSearch @searchError="searchError" />
      <!-- <ButtonDownload /> -->
    </div>
    <div class="errors" v-if="errors != null">
      <pre v-for="(error, index) in errors" :key="`error-${index}`">
        ERROS: {{ JSON.stringify(error, null, 4) }}
      </pre>
    </div>
    <!-- <div class="errors" v-if="errors != null && !errors.length">
      <h1>Nenhum erro a ser exibido</h1>
    </div> -->
    <div class="errors" v-if="!errors.length && searched">
      <h1>Nenhum erro a ser exibido</h1>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import DatePickerFilter from "./components/Filter.vue";
import ButtonSearch from "./components/ButtonSearch.vue";
import Limit from "./components/Limit.vue";
import "regenerator-runtime/runtime";
import axios from "axios";
import dayjs from "dayjs";
export default {
  components: {
    SearchBar,
    DatePickerFilter,
    ButtonSearch,
    Limit
  },
  name: "app",
  data() {
    return {
      dateAndTime: {},
      selectedRoute: "",
      errors: [],
      waiting: false,
      searched: false,
      chosenLimit: 10
    };
  },
  methods: {
    async searchError() {
      this.waiting = true;
      const dateFrom = dayjs(this.dateAndTime.startDate).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      const dateTo = dayjs(this.dateAndTime.endDate).format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      const response = await axios.get(
        "http://localhost:8080/erros-LogExplorer",
        {
          params: {
            limit: this.chosenLimit,
            dateFrom,
            dateTo,
            route: this.selectedRoute
          }
        }
      );

      this.errors = response.data;
      this.waiting = false;
      this.search = true;
    }
  }
};
</script>

<style lang="scss">
#app {
  display: block;
  height: 100vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(
    to right bottom,
    #576aeb,
    #0093ff,
    #00b4ff,
    #00cff4,
    #27e6e2
  );
  margin-left: -8px;
  margin-top: -8px;
  margin-bottom: -30px;
  margin-right: -50px;
  overflow: auto;
}

.logo {
  margin-top: 10px;
  margin-left: 10px;
}

.titulo {
  height: 60px;
  width: 1100px;
  color: white;
  font-size: 70px;
  font-family: "Barlow", Barlow;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 52%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.barraPesquisaComFiltro {
  display: flex;
  position: absolute;
  top: 37%;
  left: 49%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.errors {
  width: 50%;
  margin-block-start: 400px;
  margin-left: 26%;
  font-family: "Barlow", Barlow;
  border-radius: 13px 13px 13px 13px;
  font-size: 19px;
  color: white;
  padding: 1px 10px 10px 1px;
}
</style>
