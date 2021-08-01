<template>
<div class="">
    <div class="flex mb-4  my-2 mx-1 ">
        <div class="w-11/12 h-auto ml-2 ">
            <span class=" flex justify-end items-center text-gray-500 py-1 px-4
            bg-lightgray-100 w-full rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> 
                <input type="search" name="recherche" id="search" v-model="recherche"
                class="bg-lightgray-100 ml-1 w-full text-xl focus:outline-none" >
            </span>
           
        </div>
        <div class="w-1/12  mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto stroke-current text-gray-250" fill="none" viewBox="0 0 24 24" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>        
        </div>
    </div>    
    
</div>
    <div >
    <ul class="p-5 text-lg">
        <li v-for="(liste, index) in listes" :key="index">
            <div class=" flex justify-end items-center">
                <div class="w-11/12 inline-flex items-center">
                    <div class="checkbox">
                         <input type="checkbox" class="opacity-0 absolute"
                         v-bind:id="liste.id" @change="checkAll(liste.values, $event)" >
                        <svg class="hidden" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                    </div>
                    <label v-bind:for="liste.id" class="ml-2 border border-blue-600">
                        <strong>{{ liste.name }} </strong>
                    </label> 
                </div>
                <div class="w-1/12">
                    <button @click="hideliste(liste)" >
                        <svg xmlns="http://www.w3.org/2000/svg" v-if="!liste.hidden" class="h-6 w-6  text-green-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M5 15l7-7 7 7" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" v-if="liste.hidden" class="h-6 w-6  text-green-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M19 9l-7 7-7-7" />
                        </svg>                                         
                    </button>
                </div>
            </div>
           
            <ul class="mx-12 my-2" v-if="!liste.hidden">
                <li v-for="value in liste.values" :key="value" class="my-2 flex justify-start items-start">
                    <div class="checkbox">
                        <input type="checkbox" class="opacity-0 absolute"
                        v-bind:id="value.id" :value="value.name" :checked=" value.checked" 
                        @change="value.checked = !value.checked">
                        <svg class="hidden" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                    </div>
                    <label v-bind:for="value.id" class="ml-2 border border-blue-600">{{ value.name }}</label>
                </li>
            </ul>
        </li>
    </ul>

    <div>
        getSelectedvaluesByListe: 
        <ul>
            <li v-for="selectedListe in getSelectedvaluesByListe " :key ="selectedListe">
                {{ selectedListe.liste }} : 
                <label >{{ selectedListe.selectedValue }}</label>
            </li>
        </ul>
    </div>

    <br>
     <div>getSelectedvalues: {{ getSelectedvalues }}</div>
    <br>

    <div class="disp" v-for="liste in listes" :key="liste">
      <ul><strong>{{ liste.id }}</strong>
        <li v-for="value in liste.values" :key="value">
            <label v-if="value.checked">{{value.name}}</label>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
                recherche:"",
                listes: [
                    {
                        name: 'Liste a',
                        id: 'liste-a',
                        hidden:false,
                        values: [
                            {'id': 1, 'name' : 'Enregistrement', 'checked': false},
                            {'id': 2, 'name' : 'Vu', 'checked': false},
                            {'id': 3, 'name' : 'Non Vu', 'checked': false},
                            {'id': 4, 'name' : 'Vrai', 'checked': false},
                            {'id': 5, 'name' : 'Faux', 'checked': false},
                        ],
                        selectedValue:[]
                    },
                    {
                        name: 'Liste b',
                        id: 'liste-b',
                        hidden:false,
                        values: [
                            {'id': 7, 'name' : 'Enregistrement', 'checked': false},
                            {'id': 8, 'name' : 'Liste 1', 'checked': false},
                            {'id': 9, 'name' : 'Liste 2', 'checked': false},
                            {'id': 10, 'name' : 'Liste 3', 'checked': false},
                            {'id': 11, 'name' : 'Liste 4', 'checked': false}
                        ],
                    }
                ]
                }
        },
    computed: {
            getSelectedvaluesByListe: function() {
                var selectedListe={ liste:"",selectedValue: [] };
                var selectedValue = [];
                for(var listeIdx in this.listes) {
                    var values = this.listes[listeIdx].values;
                    
                    for(var valueIdx in values) {
                        if (values[valueIdx].checked) {
                            selectedListe.liste= this.listes[listeIdx].name
                        selectedListe.selectedValue.push(values[valueIdx].name);
                        }
                    }
                    if (selectedListe.selectedValue.length!=0)
                    {
                        selectedValue.push(selectedListe);
                    }
                    selectedListe={ liste:"", selectedValue: [] };
                }
                return selectedValue;
            },
            getSelectedvalues: function() {
                var selectedValue = [];
                for(var listeIdx in this.listes) {
                    var values = this.listes[listeIdx].values;
                    
                    for(var valueIdx in values) {
                        if (values[valueIdx].checked)
                        {
                            selectedValue.push(values[valueIdx].name);
                        }
                    }
                }
                return selectedValue;
            }
        },
    methods: {
            checkAll(values, $event) {
                for(var valueIdx in values) {
                values[valueIdx].checked = $event.target.checked;
                }
            },
            hideliste(liste){
                liste.hidden=!liste.hidden
            }
        }
}
</script>

<style>
.disp {
  display: inline-block;
}
.class1{
  display: inline-block;
}
</style>