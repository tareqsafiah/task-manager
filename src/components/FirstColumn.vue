<template>
  <div class="font-name">
    <v-item-group active-class="primary">
      <v-row>
        <v-col cols="12">
          <v-container fluid id="container-background" class="mt-8">
            <v-row>
              <v-app-bar id="test">
                <v-toolbar-title style="margin-left:-23px"><h4>Backlog</h4></v-toolbar-title>

                <v-spacer></v-spacer>
                <!-- <addBtn  @customChange="logChange2($event)" /> -->
                <v-btn icon @click.stop="dialog = true"  style="margin-right:-28px">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
                <v-dialog
                  v-model="dialog"
                  max-width="450px"
                  class="dialog-border-radius"
                >
                  <v-card class="rounded-xl">
                    <v-container>
                      <v-card-title class="justify-content-between">
                        <div style="margin-left: -17px">
                          <v-icon id="lefticon"
                            >mdi-format-list-bulleted-square</v-icon
                          >
                          Design Team Board
                        </div>
                        <div>
                          <v-btn
                            id="close"
                            class="ma-1"
                            small
                            fab
                            color="red"
                            outlined
                            @click="dialog = false"
                          >
                            <v-icon color="red">mdi-close</v-icon>
                          </v-btn>
                        </div>
                      </v-card-title>
                      <div class="dialog-pading">
                        <div class="d-flex">
                          <select
                            class="form-select myselect mr-2"
                            style="
                              border-radius: 13px;
                              margin-right: 15px;
                              width: 35%;
                            "
                          >
                            <option>Backlog</option>
                            <option>In Progress</option>
                            <option>In Review</option>
                            <option>Done</option>
                          </select>
                          <select
                            v-model="newproiraty"
                            class="form-select myselect"
                            v-bind:class="[returncolor()]"
                            style="
                              border-radius: 13px;
                              margin-left: 15px;
                              width: 30%;
                            "
                          >
                            <option class="bg-white text-dark">High</option>
                            <option class="bg-white text-dark">Medium</option>
                            <option class="bg-white text-dark">Low</option>
                          </select>
                        </div>
                        <div class="mb-7 mt-5 d-flex align-center">
                          <label class="mylable mt-2" for="taskname"
                            ><h4>Task:</h4></label
                          >
                          <input
                            v-model="newTask"
                            class="mytaskfild"
                            placeholder="Task Name..."
                            type="text"
                            id="taskname"
                            name="task"
                          />
                        </div>
                        <div>
                          <h6 class="font-weight-bold">Members</h6>
                          <div class="d-flex align-center mt-6">
                            <div class="">
                              <v-btn id="addmember" small fab>
                                <v-icon id="addbtn">mdi-plus</v-icon>
                              </v-btn>
                            </div>
                            <div class="ml-5">
                              <b-avatar-group size="40px" id="avatargroup">
                                <b-avatar
                                  src="https://placekitten.com/300/300"
                                  variant="info"
                                ></b-avatar>
                                <b-avatar
                                  src="https://placekitten.com/320/320"
                                  variant="dark"
                                ></b-avatar>
                                <b-avatar text="MK" id="success"></b-avatar>
                              </b-avatar-group>
                            </div>
                          </div>
                        </div>
                        <div class="mt-6">
                          <h5 class="font-weight-bold mb-5">Discreption</h5>
                          <div class="mydivdiscfild">
                            <textarea
                              v-model="newdes"
                              class="mydiscfild"
                              id="floatingTextarea"
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-weight-bold mb-5 mt-8">Comments</h5>
                          <editor
                            theme="snow"
                            paste-as-text="true"
                          ></editor>
                        </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text> Update </v-btn>
                          <v-btn color="blue darken-1" text @click="add2()">
                            Save
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </v-container>
                  </v-card>
                </v-dialog>
              </v-app-bar>
            </v-row>
            <v-row dense class="mt-2">
              <v-col
                v-for="column in columns[2].data"
                :key="column.taskname"
                cols="12"
              >
                <draggable
                  class="list-group"
                  group="task"
                  :list="columns[2].data"
                  :animation="200"
                  ghost-class="ghost-card"
                >
                  <v-dialog
                    v-model="dialog2"
                    max-width="450px"
                    class="dialog-border-radius"
                  >
                    <v-card class="rounded-xl">
                      <v-container>
                        <v-card-title class="justify-content-between">
                          <div style="margin-left: -17px">
                            <v-icon id="lefticon"
                              >mdi-format-list-bulleted-square</v-icon
                            >
                            Design Team Board
                          </div>
                          <div>
                            <v-btn
                              id="close"
                              class="ma-1"
                              small
                              fab
                              color="red"
                              outlined
                              @click="dialog2 = false"
                            >
                              <v-icon color="red">mdi-close</v-icon>
                            </v-btn>
                          </div>
                        </v-card-title>
                        <div class="dialog-pading">
                          <div class="d-flex">
                            <select
                              class="form-select myselect mr-2"
                              style="
                                border-radius: 13px;
                                margin-right: 15px;
                                width: 35%;
                              "
                            >
                              <option>Backlog</option>
                              <option>In Progress</option>
                              <option>In Review</option>
                              <option>Done</option>
                            </select>
                            <select
                              v-model="newproiratyname"
                              class="form-select myselect"
                              style="
                                border-radius: 13px;
                                margin-left: 15px;
                                width: 30%;
                              "
                            >
                              <option class="bg-white text-dark" style="background: red; color: white;">High</option>
                              <option class="bg-white text-dark" style="background: blue; color: white;">Medium</option>
                              <option class="bg-white text-dark" style="background: green; color: white;">Low</option>
                            </select>
                          </div>
                          <div class="mb-7 mt-5 d-flex align-center">
                            <label class="mylable mt-2" for="taskname"
                              ><h4>Task:</h4></label
                            >
                            <input
                              v-model="newtaskname"
                              class="mytaskfild"
                              placeholder="Task Name..."
                              type="text"
                              id="taskname"
                              name="task"
                            />
                          </div>
                          <div>
                            <h6 class="font-weight-bold">Members</h6>
                            <div class="d-flex align-center mt-6">
                              <div class="">
                                <v-btn id="addmember" small fab>
                                  <v-icon id="addbtn">mdi-plus</v-icon>
                                </v-btn>
                              </div>
                              <div class="ml-5">
                                <b-avatar-group size="40px" id="avatargroup">
                                  <b-avatar
                                    src="https://placekitten.com/300/300"
                                    variant="info"
                                  ></b-avatar>
                                  <b-avatar
                                    src="https://placekitten.com/320/320"
                                    variant="dark"
                                  ></b-avatar>
                                  <b-avatar text="MK" id="success"></b-avatar>
                                </b-avatar-group>
                              </div>
                            </div>
                          </div>
                          <div class="mt-6">
                            <h5 class="font-weight-bold mb-5">Discreption</h5>
                            <div class="mydivdiscfild">
                              <textarea
                                v-model="newdesname"
                                class="mydiscfild"
                                id="floatingTextarea"
                              ></textarea>
                            </div>
                          </div>
                          <div>
                            <h5 class="font-weight-bold mb-5 mt-8">Comments</h5>
                            <editor id="commentbox"
                              theme="snow"
                              paste-as-text="true"
                            ></editor>
                          </div>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="edit2(columns[2].data.taskname)"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </div>
                      </v-container>
                    </v-card>
                  </v-dialog>

                  <v-card
                    @click.stop="dialog2 = true"
                    class="cursor-move"
                    id="card1"
                    dark
                  >
                    <v-card-title class="text-h5">
                      {{ column.taskname }}
                    </v-card-title>
                    <v-card-actions>
                      <v-btn id="chat" icon
                        ><img src="../assets/speech-bubble-comment.png" style="width:21px; height:21px; margin-right:10px;"/>
                        25
                      </v-btn>
                      <v-btn id="attachment" icon
                        ><img src="../assets/12.png" style="width:21px; height:21px; margin-right:10px;"/>
                        33
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn  id="highbtn" rounded v-if="column.proiraty == 'High' "> {{ column.proiraty }} </v-btn>
                      <v-btn  id="mediumbtn" rounded v-else-if="column.proiraty == 'Medium' "> {{ column.proiraty }} </v-btn>
                      <v-btn  id="lowbtn" rounded v-else > {{ column.proiraty }} </v-btn>
                    </v-card-actions>
                  </v-card>
                </draggable>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
import draggable from "vuedraggable";
// import Icon from '@iconify/vue2';
export default {
  name: "FirstColumn",

  components: {
    draggable,
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      newTask: "",
      newboard: "",
      newdes: "",
      newproiraty: "",
      newtaskname: "",
      newboardname: "",
      newdesname: "",
      newproiratyname: "",
      columns: [
        {
          title: "Backlog",
          data: [
            {
              boardname: "Backlog",
              taskname: "Create a profile screen",
              descripation: "blabla",
              proiraty: "",
            },
          ],
        },
        {
          title: "In Progress",
          data: [
            {
              boardname: "Backlog",
              taskname: "Create a profile screen",
              descripation: "blabla",
              proiraty: "High",
            },
          ],
        },
        {
          title: "In Review",
          data: [
            {
              boardname: "Backlog",
              taskname: "Create a profile screen",
              descripation: "blabla",
              proiraty: "Low",
            },
          ],
        },
        {
          title: "Done",
          data: [
            {
              boardname: "Backlog",
              taskname: "Create a profile screen",
              descripation: "blabla",
              proiraty: "bla",
            },
          ],
        },
      ],
    };
  },
  methods: {
    add2() {
      if (this.newTask) {
        this.columns[2].data.push({
          taskname: this.newTask,
          descripation: this.newdes,
          boardname: this.newboard,
          proiraty: this.newproiraty,
        });
        this.dialog = false;
        this.newTask = "";
      }
    },

    edit2() {
      const index = this.columns[2].data.findIndex(
        (element) => element.taskname
      );
      this.columns[2].data[index].taskname = this.newtaskname;
      this.columns[2].data[index].descripation = this.newdesname;
      this.columns[2].data[index].proiraty = this.newproiratyname;
      this.columns[2].data[index].boardname = this.newboardname;
      this.dialog2 = false;
      this.newtaskname = "";
    },

    returncolor() {
      if (this.newproiraty == 'Medium') {return 'orangeclass'}


      else if (this.newproiraty == 'High') 
      {return 'redclass';}
      
      else return 'greenclass'
    }
  },
};
</script>

<style scoped>
.font-name{
       font-family: "steagal", Helvetica, Arial;
     /* font-size: 20px; */
}
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.greenclass{
  color: #1FC176;
  background-color: #DDF7EC;
}
.redclass{
  color: #FF4E4D;
  background-color: #FFE2E2;
}
.orangeclass{
  color: #EF8A0C;
  background-color: #ffe0bd;
}
#mediumbtn{
   color: #EF8A0C;
  background-color: #ffe0bd;
}
#highbtn{
   color: #FF4E4D;
  background-color: #FFE2E2;
}
#lowbtn{
  color: #1FC176;
  background-color: #DDF7EC;
}
#card {
  background-color: #f0f4f9;
  border-radius: 19px;
  height: 550px;
  width: 90%;
  top: 5%;
  margin: auto;
}
#bar {
  background-color: #f0f4f9;
  box-shadow: 0px 0px 0px 0px;
  bottom: 45%;
}
#lefticon {
  color: #00a3ff;
}
#adder {
  margin-right: -25px;
}
#addmember {
  margin-right: 15px;
  color: #00a3ff;
  box-shadow: 0px 0px 0px 0px;
  background-color: transparent;
  border: 2px dashed #00a3ff;
}
#avatargroup {
  margin-left: -18px;
}
#success {
  color: #30b0ff;
  background-color: #b1e3ff;
}

#close {
  border-radius: 13px;
}
#floatingTextarea {
  width: 100%;
  height: 80px;
  border-radius: 13px;
  background-color: #f0f4f9;
  margin-top: -5px;
}
#test {
  border-radius: 15px;
  box-shadow: 0px 0px 0px 0px;
}
#container-background {
  background-color: #f0f4f9;
  border-radius: 25px;
}
#card1 {
  border-radius: 16px;
  background-color: white;
  color: black;
}
#chat,
#attachment {
  color: darkgray;
}
#chat {
  margin-left: 15px;
}
#attachment {
  margin-left: 20px;
}
#taskname {
  width: 50%;
  border-radius: 13px;
  margin-left: 15px;
  padding: 10px 40px 8px 39px;
}
#bar {
  background-color: #f0f4f9;
  box-shadow: 0px 0px 0px 0px;
  bottom: 45%;
}
#adder {
  margin-right: -25px;
}

#close {
  border-radius: 13px;
}
#popup {
  border-radius: 16px;
}
</style>
