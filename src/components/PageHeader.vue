<template>
  <div>
      <v-banner id="bann" single-line >
        <v-card color="grey lighten-4" flat height="48px" id="widthcard">
          <v-toolbar dense >
            <v-toolbar-title >
              <div class="text-center"  >
                <v-btn id="btn" class="ma-1" fab small>
                  <v-icon>mdi-home-variant-outline</v-icon>
                </v-btn>
                <v-btn id="btn1" class="ma-1" fab small>
                  <v-icon color="vivid blue"
                    >mdi-format-list-bulleted-square</v-icon
                  >
                </v-btn>
                <form class="nosubmit" id="form">
                  <input class="nosubmit" type="search" />
                </form></div
            ></v-toolbar-title>

            <v-spacer></v-spacer>
            <div id="toright">
            <v-btn id="addboard" class="ma-5" small fab>
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
            <v-btn id="btn2" class="ma-1" small fab>
              <v-icon small> mdi-bell-outline </v-icon>
            </v-btn>
            <v-btn id="btn3" class="ma-1" small fab>
              <font-awesome-icon icon="fa-solid fa-user-secret" />
            </v-btn>
            <v-btn id="btn4" class="ma-1" small fab>
              <v-icon small> mdi-brightness-7 </v-icon>
            </v-btn>
            <v-avatar class="ma-5" size="42px" small>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            </div>
          </v-toolbar>
        </v-card>

      </v-banner>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
/* .v-btn{
  
} */
#btn,
#btn1,
#btn2,
#btn3,
#btn4 {
  color: #00a3ff;
  background-color: transparent;
  box-shadow: 0px 0px 0px 0px;
  border: solid 2px;
  border-radius: 13px;
}
/* #btn,
#btn1 {
  margin-left: 2px !important;
} */
#widthcard{
  width: 110% !important;
}
form.nosubmit {
  border: none;
  padding: 0;
  background-color: #f0f4f9;
  border-radius: 16px;
  display: flex;
}
#toright{
  margin-right: -22px;
}
input.nosubmit {
  outline: none;
  width: 100%;
  padding: 9px 4px 9px 40px;
  background-color: #f0f4f9;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
}
.text-center {
  display: flex;
}
#bann {
  width: 100%;
  margin-top: 10px;
}
#form {
  margin-top: 3px;
  margin-left: 25px;
  height: 40px;
}
#left {
  margin-left: -20px;
}
#addboard {
  box-shadow: 0px 0px 0px 0px;
  background-color: #00a3ff;
  border-radius: 13px;
}
</style>
