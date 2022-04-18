<template>
<div>
   <hello-world />
   <headerForColumn/>
  <div class="container-fluid">
     <v-item-group active-class="primary">
      <v-row>
<v-col
          cols="12"
          md="3"
        >
        
    <v-container fluid id="container-background" class="mt-8">
      <v-row >
        
          <v-app-bar id="test"
           >
      <v-icon></v-icon>

      <v-toolbar-title>Backlog</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <addBtn  @customChange="logChange2($event)" /> -->
      <v-btn
          icon
          @click.stop="dialog = true"
        >
         <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      <v-dialog v-model="dialog" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboard" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriority" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newTask"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="add0()"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
        </v-card-actions>
        </div>
        </v-container>
      </v-card>
    </v-dialog>
    </v-app-bar>
    </v-row>
      <v-row dense class="mt-2">
        <v-col  v-for="column in columns[0].data" :key="column.taskname"
           cols="12">
           <draggable class="list-group" group="task" :list="columns[0].data" :animation="200" ghost-class="ghost-card">
          
          <v-dialog v-model="dialog2" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboardname" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriorityname" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newtaskname"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="edit(columns[0].data.taskname)"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
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
            <v-card-title class="text-h5" >
              {{column.taskname}}
            </v-card-title>
            <v-card-actions>
              <v-btn id="chat" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-chat</v-icon>
                25
              </v-btn>
              <v-btn id="attachment" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-attachment</v-icon>
                33
              </v-btn>
            <v-spacer></v-spacer>
              <v-btn rounded>
                {{column.Priority}}
                </v-btn>
            </v-card-actions>
          </v-card>
      </draggable>
        </v-col>
       </v-row>
    </v-container>
  </v-col>

<v-col
          cols="12"
          md="3"
        >
        
    <v-container fluid id="container-background" class="mt-8">
      <v-row >
        
          <v-app-bar id="test"
           >
      <v-icon></v-icon>

      <v-toolbar-title>In Progress</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <addBtn  @customChange="logChange2($event)" /> -->
      <v-btn
          icon
          @click.stop="dialog = true"
        >
         <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      <v-dialog v-model="dialog" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboard" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriority" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newTask"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="add1()"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
        </v-card-actions>
        </div>
        </v-container>
      </v-card>
    </v-dialog>
    </v-app-bar>
    </v-row>
      <v-row dense class="mt-2">
        <v-col  v-for="column in columns[1].data" :key="column.taskname"
           cols="12">
           <draggable class="list-group" group="task" :list="columns[1].data" :animation="200" ghost-class="ghost-card">
          
          <v-dialog v-model="dialog2" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
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
            <select class="form-select myselect mr-2" v-model="newboardname" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriorityname" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newtaskname"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="edit1(columns[1].data.taskname)"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
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
            <v-card-title class="text-h5" >
              {{column.taskname}}
            </v-card-title>
            <v-card-actions>
              <v-btn id="chat" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-chat</v-icon>
                25
              </v-btn>
              <v-btn id="attachment" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-attachment</v-icon>
                33
              </v-btn>
            <v-spacer></v-spacer>
              <v-btn rounded>
                {{column.Priority}}
                </v-btn>
            </v-card-actions>
          </v-card>
      </draggable>
        </v-col>
       </v-row>
    </v-container>
  </v-col>
  <v-col
          cols="12"
          md="3"
        >
        
    <v-container fluid id="container-background" class="mt-8">
      <v-row >
        
          <v-app-bar id="test"
           >
      <v-icon></v-icon>

      <v-toolbar-title>In Review</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <addBtn  @customChange="logChange2($event)" /> -->
      <v-btn
          icon
          @click.stop="dialog = true"
        >
         <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      <v-dialog v-model="dialog" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboard" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriority" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newTask"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="add2()"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
        </v-card-actions>
        </div>
        </v-container>
      </v-card>
    </v-dialog>
    </v-app-bar>
    </v-row>
      <v-row dense class="mt-2">
        <v-col  v-for="column in columns[2].data" :key="column.taskname"
           cols="12">
           <draggable class="list-group" group="task" :list="columns[2].data" :animation="200" ghost-class="ghost-card">
          
          <v-dialog v-model="dialog2" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboardname" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriorityname" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newtaskname"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="edit2(columns[2].data.taskname)"
          >
            Save
          </v-btn>
          <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button> -->
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
            <v-card-title class="text-h5" >
              {{column.taskname}}
            </v-card-title>
            <v-card-actions>
              <v-btn id="chat" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-chat</v-icon>
                25
              </v-btn>
              <v-btn id="attachment" icon>
                <!-- <Icon :icon="icons.attachmentIcon" /> --><v-icon>mdi-attachment</v-icon>
                33
              </v-btn>
            <v-spacer></v-spacer>
              <v-btn rounded>
                {{column.Priority}}
                </v-btn>
            </v-card-actions>
          </v-card>
      </draggable>
        </v-col>
       </v-row>
    </v-container>
  </v-col>

  <v-col
          cols="12"
          md="3"
        >
        
    <v-container fluid id="container-background" class="mt-8">
      <v-row >
        
          <v-app-bar id="test"
           >
      <v-icon></v-icon>

      <v-toolbar-title>Done</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <addBtn  @customChange="logChange2($event)" /> -->
      <v-btn
          icon
          @click.stop="dialog = true"
        >
         <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      <v-dialog v-model="dialog" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
            Design Team Board
          </div>
          <div>
            <!-- <button
            >
              <v-icon color="green" size="20px" class=""
                >mdi-check-outline</v-icon
              >
            </button>
            <button
            >
              <v-icon color="green" size="20px" class="">mdi-plus</v-icon>
            </button> -->
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
            <select class="form-select myselect mr-2" v-model="newboard" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriority" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newTask"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="add3()"
          >
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
        <v-col  v-for="column in columns[3].data" :key="column.taskname"
           cols="12">
           <draggable class="list-group" group="task" :list="columns[3].data" :animation="200" ghost-class="ghost-card">
          
          <v-dialog v-model="dialog2" max-width="450px" class="dialog-border-radius">
      <v-card class="rounded-xl">
        <v-container>
        <v-card-title class="justify-content-between">
          <div style="margin-left:-17px" >
            <v-icon id="lefticon">mdi-format-list-bulleted-square</v-icon>
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
            <select class="form-select myselect mr-2" v-model="newboardname" style="border-radius:13px; margin-right:15px; width:35%;">
              <option>Backlog</option>
              <option>In Progress</option>
              <option>In Review</option>
              <option>Done</option>
            </select>
            <select class="form-select myselect " v-model="newPriorityname" style="border-radius:13px; margin-left:15px; width:30%;">
              <option class="bg-white text-dark">High</option>
              <option class="bg-white text-dark">Medium</option>
              <option class="bg-white text-dark">Low</option>
            </select>
          </div>
          <div class="mb-7 mt-5 d-flex align-center ">
            <label class="mylable mt-2" for="taskname"><h4>Task:</h4></label>
            <input 
              v-model="newtaskname"
              class="mytaskfild"
              placeholder="Task Name..."
              type="text"
              id="taskname"
              name="task"
            />
          </div>
          <div >
            <h6 class="font-weight-bold ">Members</h6>
            <div class="d-flex align-center mt-6">
              <div class="">
                <v-btn
                id="addmember"
                small
                fab
                >
                <v-icon id="addbtn">mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="ml-5">
              <b-avatar-group size="40px" id="avatargroup">
                <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
                <b-avatar src="https://placekitten.com/320/320" variant="dark"></b-avatar>
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
            <editor v-model="value" theme="snow" paste-as-text="true"></editor>
          </div>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            
          >
            Update
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="edit3(columns[3].data.taskname)"
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
            <v-card-title class="text-h5" >
              {{column.taskname}}
            </v-card-title>
            <v-card-actions>
              <v-btn id="chat" icon><v-icon>mdi-chat</v-icon>
                25
              </v-btn>
              <v-btn id="attachment" icon><v-icon>mdi-attachment</v-icon>
                33
              </v-btn>
            <v-spacer></v-spacer>
              <v-btn rounded>
                {{column.Priority}}
                </v-btn>
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
</div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import headerForColumn from './headerForColumn.vue'
  import draggable from 'vuedraggable'
  // import Icon from '@iconify/vue2';
  export default {
    name: 'home-page',

    components: {
      HelloWorld,
      draggable,
      headerForColumn,
    },
     data() {
       return{
       dialog: false,
       dialog2: false,
       newTask: "",
       newdes:"",
       newPriority:"",
       newboard:"",
       newboardname:"",
       newtaskname:"",
       newdesname:"",
       newPriorityname:"",

      columns: [
        {
          title: "Backlog",
          data: [
            { boardname: "Backlog",
              taskname: "Create a profile screen",
              descripation: "blabla",
              Priority:"bla"
            },
          ]
        },
        {
          title: "In Progress",
          data: [
            { boardname: "In Progress",
              taskname: "",
              descripation: "",
              proiraty:"bla"
            },
          ]
        },
        {
          title: "In Review",
          data: [
            { boardname: "In Review",
              taskname: "",
              descripation: "",
              proiraty:"bla"
            },
          ]
        },
        {
          title: "Done",
          data: [
            { boardname: "Done",
               taskname: "",
              descripation: "",
              proiraty:"bla"
            },
          ]
        }
      ],
      // items: [
      //   {
      //     action: 'mdi-silverware-fork-knife',
      //     active: true,
      //     items: [
      //       { color: 'red',
      //         title: 'High' },
      //         { color: 'orange',
      //         title: 'Medium' },
      //       { color: 'teal',
      //         title: 'Low' },
      //     ],
      //   },
      // ],
      // titles: ['BackLog' , 'In Progress', 'In Review', 'Done'],
    }
    },
    methods:{
      add() {
        if(this.newTask) {
          this.columns[0].data.push({askname: this.newTask, descripation: this.newdes, Priority: this.newPriority} );
          // this.columns[0].data.push({descripation: this.newdes} );
          // this.columns[0].data.push({Priority: this.newPriority} );
          this.newTask= "";
          // console.log();
        // }
      }
    },
 
      add1() {
        if(this.newTask) {
          this.columns[1].data.push({askname: this.newTask, descripation: this.newdes, Priority: this.newPriority} );
          // this.columns[1].data.push({descripation: this.newdes} );
          // this.columns[1].data.push({Priority: this.newPriority} );
          this.newTask= "";
          // console.log();
        // }
      }
    },
      add2() {
        if(this.newTask) {
          this.columns[2].data.push({askname: this.newTask, descripation: this.newdes, Priority: this.newPriority} );
          // this.columns[2].data.push({descripation: this.newdes} );
          // this.columns[2].data.push({Priority: this.newPriority} );
          this.newTask= "";
          // console.log();
        // }
      }
  },
      add3() {
        if(this.newTask) {
          this.columns[3].data.push({taskname: this.newTask, descripation: this.newdes, Priority: this.newPriority} );
          // this.columns[3].data.push({descripation: this.newdes} );
          // this.columns[3].data.push({Priority: this.newPriority} );
          this.newTask= "";
          // console.log();
        // }
      }
    },
   
    edit () {
      const index = this.columns[0].data.findIndex( (element) => element.taskname);
      this.columns[0].data[index].taskname = this.newtaskname;
      this.columns[0].data[index].descripation = this.newdesname;
      this.columns[0].data[index].Priority = this.newPriorityname;
      this.dialog2 = false;
      this.newtaskname= '';
      this.newdesname= '';
      this.newPriorityname= '';
      console.log('sdadas');
    },
    edit1 () {
      const index = this.columns[1].data.findIndex( (element) => element.taskname);
      this.columns[1].data[index].taskname = this.newtaskname;
      this.columns[1].data[index].descripation = this.newdesname;
      this.columns[1].data[index].Priority = this.newPriorityname;
      this.dialog2 = false;
      this.newtaskname= '';
      this.newdesname= '';
      this.newPriorityname= '';
      console.log('sdadas');
    },
    edit2 () {
      const index = this.columns[2].data.findIndex( (element) => element.taskname);
      this.columns[2].data[index].taskname = this.newtaskname;
      this.columns[2].data[index].descripation = this.newdesname;
      this.columns[2].data[index].Priority = this.newPriorityname;
      this.dialog2 = false;
      this.newtaskname= '';
      this.newdesname= '';
      this.newPriorityname= '';
      console.log('sdadas');
    },
    edit3 () {
      const index = this.columns[3].data.findIndex( (element) => element.taskname);
      this.columns[3].data[index].taskname = this.newtaskname;
      this.columns[3].data[index].descripation = this.newdesname;
      this.columns[3].data[index].Priority = this.newPriorityname;
      this.dialog2 = false;
      this.newtaskname= '';
      this.newdesname= '';
      this.newPriorityname= '';
      console.log('sdadas');
    },
    
  }
</script>
  //   data() {
  //   return {
  //     buttonsGroup: [
  //       { btnText: "High", value: "High-value" },
  //       { btnText: "Medium", value: "Medium-value" },
  //       { btnText: "Low", value: "Low-value" },
  //     ],
  //     Save: null,
  //     EthnicityActive: "",
  //   };
  // },
//     methods: {
//       save() {
//   window.localStorage.setItem('keyName', this.EthnicityActive.value);
// }
//     },
//   },


<style scoped>
.body{
  font-family:steagal;
}
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
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
#lefticon{
  color: #00A3FF;
}
#adder{
  margin-right: -25px;
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
/* #title{
  margin-top: 15px;
  margin-left: 8px;
  font-style:initial;
} */
#close {
  border-radius: 13px;
}
#floatingTextarea{
  width: 100%;
  height:80px;
  border-radius: 13px;
  background-color:#F0F4F9;
  margin-top:-5px
}
#test {
  border-radius: 15px;
  box-shadow: 0px 0px 0px 0px;
}
#container-background{
  background-color: #F0F4F9;
  border-radius: 25px;
}
#card1{
  border-radius: 16px;
  background-color: white;
  color: black;
}
#chat, #attachment {
  color: darkgray;
}
#chat{
  margin-left: 15px;
}
#attachment{
  margin-left: 20px;
}
#taskname{
  width: 50%;
  border-radius: 13px;
  margin-left: 15px;
  padding: 10px 40px 8px 39px;
}
#bar {
  background-color: #F0F4F9;
  box-shadow: 0px 0px 0px 0px;
  bottom:45%;
  
}
#adder{
  margin-right: -25px;
}

#close {
  border-radius: 13px;
}
#popup {
    border-radius: 16px;
}
</style>