<template>
  <div class="container-fluid">
        <v-row
        align="center"
        justify="space-between"
    >
        <v-banner
        id="bann"
            single-line
            >
            <v-card
              color="grey lighten-4"
              flat
              height="48px"
            >
    <v-toolbar dense max-width="100%">
      <v-toolbar-title id="left">
        <div class="text-center">
                  <v-btn
                    id="btn"
                    class="ma-1"
                    fab
                    small
                  >
                    <v-icon>mdi-home-variant-outline</v-icon>
                  </v-btn>
                  <v-btn
                    id="btn1"
                    class="ma-1"
                    fab
                    small
                  >
                    <v-icon color="vivid blue">mdi-format-list-bulleted-square</v-icon>
                  </v-btn>
                  <form class="nosubmit" id="form">
                    <input class="nosubmit" type="search">
                  </form>
                </div></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
                id="addboard"
                class="ma-5"
                small
                fab
                >
                <v-icon color="white">mdi-plus</v-icon>
                </v-btn>
                 <v-btn
                    id="btn2"
                class="ma-1"
                 small
                fab
      >
        <v-icon small>
          mdi-bell-outline
        </v-icon>
      </v-btn>
                 <v-btn
                    id="btn3"
                class="ma-1"
                 small
                 fab
      >
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </v-btn>
                 <v-btn
                    id="btn4"
                class="ma-1"
                 small
                 fab
      >
        <v-icon small>
          mdi-brightness-7
        </v-icon>
      </v-btn>
                <v-avatar
                class="ma-5"
                size="42px"
        small>
      <img
        
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    </v-toolbar>
  </v-card>

            <!-- <template v-slot:actions>
              <v-btn
                outlined
                fab
                small
                class="ma-1"
                color="primary"
                
                >
                <v-icon>mdi-home-variant-outline</v-icon>
                </v-btn>
                 <v-btn
                 small
                fab
                outlined
                color="primary"
                class="ma-1"
      >
        <v-icon small dark>
          mdi-format-list-bulleted-square
        </v-icon>
      </v-btn>
                  <form class="nosubmit" id="form">
                    <input class="nosubmit" type="search">
                  </form>
                <v-btn
                small
                fab
                color="vivid blue"
                >
                <v-icon color="white">mdi-plus</v-icon>
                </v-btn>
                 <v-btn
                 small
                fab
                outlined
                color="primary"
      >
        <v-icon small dark>
          mdi-bell-outline
        </v-icon>
      </v-btn>
                 <v-btn
                 small
                 fab
                 outlined
                color="primary"
      >
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </v-btn>
                 <v-btn
                 small
                 outlined
                 fab
                color="primary"
      >
        <v-icon small>
          mdi-brightness-7
        </v-icon>
      </v-btn>
                 <v-btn
                 
                 icon
                outlined
                color="primary"
      >
        <v-icon small dark>
          mdi-wrench
        </v-icon>
      </v-btn>
            </template> -->
        </v-banner>
    </v-row>
    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col> -->
    <!-- </v-row> -->
  </div>
</template>

<script>
export default {
	name: 'headerForPage',
}
</script>

<style scoped>
/* .v-btn{
  
} */
#btn, #btn1 ,  #btn2 , #btn3 , #btn4{
  color: #00A3FF;
  background-color: transparent;
  box-shadow: 0px 0px 0px 0px;
  border:solid 2px;
  border-radius: 13px;
} 
#btm , #btn1{
  margin-left: -10px;
}

/* form {
  color: #555;
  display: flex;
  padding: 2px;
  border-radius: 5px;
  margin: 0 0 30px;
} */

/* input[type="search"] {
  border: none;
  background-color: #F0F4F9;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border-radius: inherit;
  outline: none;
} */
form.nosubmit {
 border: none;
 padding: 0;
 background-color: #F0F4F9;
 border-radius: 16px;
 display: flex;
}

input.nosubmit {
  outline: none;
  width: 100%;
  padding: 9px 4px 9px 40px;
  background-color: #F0F4F9;
   background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
}
.text-center {
  display: flex;
}
#bann{
  width:100% ;
  display: flex;
  margin-top: 10px;
}
#form{
  margin-top: 3px;
  margin-left: 25px;
  height: 40px;
}
#left{
  margin-left: -20px;
}
#addboard{
  box-shadow: 0px 0px 0px 0px;
  background-color: #00A3FF;
  border-radius: 13px;
}
</style>