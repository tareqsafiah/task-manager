<template>
    <v-dialog
    
      v-model="dialog"
      max-width="500px"
      max-height="800px"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          
          v-bind="attrs"
          v-on="on"
        >
         <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template> -->
      <v-card id="popup">
        <v-card-title>
          <v-btn icon><v-icon color="vivid blue">mdi-format-list-bulleted-square</v-icon></v-btn>  Design Team Board <v-spacer></v-spacer>
            <v-btn
                id="close"
                class="ma-1"
                small
                fab
                color="red"
                outlined
                @click="dialog = false"
                >
                <v-icon color="red">mdi-plus</v-icon>
                </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              ><div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        id="alltask"
          v-bind="attrs"
          v-on="on"
        >
          All Task
          <v-spacer></v-spacer><img src="https://img.icons8.com/ios-glyphs/60/000000/expand-arrow--v1.png" style="width:13px; height:13px; color:white; margin-left:16px;"/>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
               <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        id="alltask"
          v-bind="attrs"
          v-on="on"
        >
          All Task
          <v-spacer></v-spacer><img src="https://img.icons8.com/ios-glyphs/60/000000/expand-arrow--v1.png" style="width:13px; height:13px; color:white; margin-left:16px;"/>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
              </v-col>
              <v-row>
              <v-col cols="12" md="2" class="mt-2">
                <label for="Existing Websit"><h4>Task:</h4></label>
                </v-col>
                <v-col cols="12" md="10" >
                <v-text-field
                id="text-field"
                  solo
                  label="Task Name"
                  v-model="newTask"
                ></v-text-field>
              </v-col>
              </v-row>
              <!-- <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                ></v-text-field>
              </v-col> -->
              
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
              
              <h4>Member</h4>
              <v-col cols="12"
              sm="12"
              md="12">
              <b-avatar-group size="40px" id="avatargroup">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
                <!-- <v-spacer></v-spacer> -->
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar text="MK" id="success"></b-avatar>
    </b-avatar-group>
            
              </v-col>
              </v-col>
              <v-row>
                <v-col cols="12" md="3" class="mt-2">
                <label for="Existing Websit"><h4>Description:</h4></label>
                </v-col>
                <v-col cols="12" md="12" >
                  <v-textarea
          label="Description"
          id="Description"
          auto-grow
          solo
          rows="3"
          row-height="25"
        ></v-textarea>
                <!-- <v-text-field
                id="text-field"
                  solo
                  label="Task Name"
                  v-model="newTask"
                ></v-text-field> -->
              </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="3" class="mt-2">
                <label for="Existing Websit"><h4>Comments:</h4></label>
                </v-col>
                <v-col cols="12" md="12" >
                  <vue-summernote ref="editer"></vue-summernote>
                  <!-- <v-textarea
          label="Description"
          id="Description"
          auto-grow
          solo
          rows="3"
          row-height="25"
        ></v-textarea> -->


                <!-- <v-text-field
                id="text-field"
                  solo
                  label="Task Name"
                  v-model="newTask"
                ></v-text-field> -->
              </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="sendChange"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
// import { mapActions } from 'vuex'

  export default {
  //     props:{
  //   sectionIndex: {
  //     type: Number,
  //     required: true,
  //   }
  // },
     data() {
       return {
       dialog: false,
       newTask: "",
       items: [
        { title: 'Backlog' },
        { title: 'In Progress' },
        { title: 'In Review' },
        { title: 'Done' },
      ],
    }
    },

  methods: { 
        sendChange () {
          this.$emit("customChange", this.newTask)
          // console.log('dssd')
        }
      }
  }
</script>
<style scoped>
#card {
  background-color: #F0F4F9;
  border-radius: 19px;
  height: 550px;
  width: 90%;
  top: 5%;
  margin: auto;
}
#bar {
  background-color: #F0F4F9;
  box-shadow: 0px 0px 0px 0px;
  bottom:45%;
  
}
#adder{
  margin-right: -25px;
}
#title{
  margin-top: 15px;
  margin-left: 18px;
}
#close {
  border-radius: 13px;
}
#popup {
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px;
}
#addboard{
  color: #00A3FF;
  box-shadow: 0px 0px 0px 0px;
  background-color: transparent;
  border: 2px dashed  #00A3FF;
}
#addbtn {
  color: #00A3FF;
}
#addmember{
  margin-right: 15px;
   color: #00A3FF;
  box-shadow: 0px 0px 0px 0px;
  background-color: transparent;
  border: 2px dashed  #00A3FF;
}
#avatargroup{
  margin-left: -18px;
}
#success{
  color: #30B0FF;
background-color: #B1E3FF;
}
#alltask {
  border-radius: 13px;
  color: black;
  background-color: transparent;
/* background-image: url('https://img.icons8.com/ios-glyphs/60/000000/expand-arrow--v1.png width:2px; height:2px') */
}
#Description{
  border-radius: 16px;
  background-color: #F0F4F9;
}
/* #text-field{
  box-shadow: 0px 0px 0px 0px;
  border:  0px 0px 0px 0px;
} */
#Existingtask{
  /* padding: 10px 95px ; */
  /* margin-left: 20px; */
    border-radius: 4px;
  /* box-sizing: border-box; */
    /* display: inline-block; */

}
</style>