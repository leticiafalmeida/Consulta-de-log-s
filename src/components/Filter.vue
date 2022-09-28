<template>
  <div>
    <button class="botãoFiltro" @click="filter()">
      Data e Hora &#9660;
    </button>
    <div v-if="showCalendar">
      <label for="dataNascimento"></label>
      <date-range-picker
        class="calendar"
        ref="picker"
        :opens="opens"
        v-model="dateAndTime"
        time-picker="timePicker"
        :show-dropdowns="showDropdowns"
        :singleDatePicker="singleDatePicker"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy HH:mm:ss' }"
        @update="teste"
      >
      </date-range-picker>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
export default {
  components: { DateRangePicker },
  name: "DatePickerFilter",
  data() {
    return {
      showCalendar: false,
      dateAndTime: {},
      opens: "center",
      singleDatePicker: false,
      timePicker: true,
      showDropdowns: true
    };
  },

  methods: {
    filter() {
      this.showCalendar = !this.showCalendar;
    },

    teste() {
      this.$emit("input", this.dateAndTime);
    }
  }
};
</script>

<style lang="scss">
.botãoFiltro {
  height: 40px;
  width: 200px;
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
  font-size: 22px;
  cursor: pointer;
  border-style: none;
  margin-left: 20px;
}

.field-input[data-v-5b500588] {
  cursor: pointer;
  background-color: #fff;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  position: relative;
  width: 200px;
  height: 42px;
  min-height: 42px;
  padding-left: 12px;
  padding-right: 44px;
  font-weight: 400;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 13px 13px 13px 13px;
  font-size: 14px;
  z-index: 0;
  margin-top: 3px;
  margin-left: 10px;
}

.calendar {
  font-family: "Barlow", Barlow;
  margin-left: 25px;
  width: 190px;
}

.reportrange-text[data-v-1ebd09d2] {
  background: #fff;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  width: 100%;
  overflow: hidden;
  border-radius: 13px 13px 13px 13px;
}
</style>
