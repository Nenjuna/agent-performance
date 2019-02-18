<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="date"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="date"
        label="Picker in menu"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "DatePicker",
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false
    };
  }
};
</script>
