<template>
<v-app>
    <page-header />
    <column-header />
    <div class="container-fluid">
    <v-row>
    <v-col cols="12" md="3">
    <first-column />
    </v-col>
    <v-col cols="12" md="3">
    <second-column />
    </v-col>
    <v-col cols="12" md="3">
    <thrid-column />
    </v-col>
    <v-col cols="12" md="3">
    <forth-column />
    </v-col>
    </v-row>
    </div>
  </v-app>
</template>

<script>
// import draggable from "vuedraggable";
import PageHeader from "./components/PageHeader";
import ColumnHeader from "./components/ColumnHeader.vue";
import FirstColumn from "./components/FirstColumn.vue";
import SecondColumn from "./components/SecondColumn.vue";
import ThridColumn from "./components/ThridColumn.vue";
import ForthColumn from "./components/ForthColumn.vue";
// import Icon from '@iconify/vue2';
export default {
  name: "App",

  components: {
    FirstColumn,
    SecondColumn,
    ThridColumn,
    ForthColumn,
    PageHeader,
    ColumnHeader,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "steagal";
  src: local("steagal"),
   url(./assets/steagal/Steagal-Me.otf) format("truetype");
}
</style>
