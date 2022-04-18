<template>
    <div class="font-name">
<v-row align="center" >
      <v-col cols="12" >
    <v-card  id="colshadow"
              color="grey lighten-4"
              height="48px"
            >
    <v-toolbar dense id="board">
        <div class="text-center">
                  <v-toolbar-title id="title"><h3>Design Team Board</h3></v-toolbar-title>
                </div>
      <v-spacer></v-spacer>

      <v-btn
                id="addboard"
                class="ma-5"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
                <div class="text-center">
                  <v-toolbar-title>Add a member</v-toolbar-title>
                </div>
               <b-avatar-group size="35px" id="avatargroup" >
      <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
      <b-avatar text="RU" id="danger"></b-avatar>
      <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
      <b-avatar text="+16" id="success"></b-avatar>
    </b-avatar-group>
          <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        id="alltask"
          v-bind="attrs"
          v-on="on"
        >
          All Task
          <v-spacer></v-spacer><img src="../assets/expand-arrow--v1.png" style="width:13px; height:13px; color:white; margin-left:16px;"/>
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

                 <!-- <b-dropdown split id="alltask" text="All Task" class="m-2" >
    <b-dropdown-item>Backlog</b-dropdown-item>
    <b-dropdown-item>In Progress</b-dropdown-item>
    <b-dropdown-item>In Review</b-dropdown-item>
    <b-dropdown-item>Done</b-dropdown-item>
                 </b-dropdown> -->
    </v-toolbar>
  </v-card>
  </v-col>
    </v-row>
   
    </div>
</template>

<script>
  export default {
	name: 'ColumnHeader',
    data: () => ({
      items: [
        { title: 'Backlog' },
        { title: 'In Progress' },
        { title: 'In Review' },
        { title: 'Done' },
      ],
    }),
  }
</script>

<style scoped>
.font-name{
       font-family: "steagal", Helvetica, Arial;
     font-size: 20px;
}
#board {
  box-shadow: 0px 0px 0px 0px;
  border-bottom: 0px;
}
#title{
  margin-top: 15px;
  /* margin-left: 18px; */
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
#alltask {
  border-radius: 13px;
  color: white;
  background-color: #00A3FF;
/* background-image: url('https://img.icons8.com/ios-glyphs/60/000000/expand-arrow--v1.png width:2px; height:2px') */
  
}
#success{
  color: #30B0FF;
background-color: #B1E3FF;
}
#danger{
  color: rgb(238,74,221);
  background-color: #FFBDF9;
}
#avatargroup{
  margin-left: 12px;
  margin-right: 25px;
}
#colshadow {
    box-shadow: 0px 0px 0px 0px;
      border: 0px 0px 0px 0px;
      top: 15px;
      /* margin-bottom: 5px; */
}
</style>