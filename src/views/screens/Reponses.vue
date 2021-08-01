<template>
    <NavigationBar >
        <template v-slot:bac>    
            <div class="py-1 my-1">
                <h1 class="text-white font-bold text-3xl">Français</h1>
                <div class="divLightBlue">
                    <label for="">BAC 2001</label>
                </div>
            </div>
        </template>
        <template v-slot:buttons>    
            <div class="my-4" >
                <button class="button-white  " >Question</button>
            </div>
            <div class="my-4" >
               <router-link  to="/enonce"> <button class="button-white " >Enoncé</button></router-link>
            </div>
        </template>
    </NavigationBar>
    <div class="w-auto">
        <div class="px-4 py-2 font-bold text-center" >
            <div class="reponse ">
                <div id="RO" ref="RO" @click="reponseClick('ro')" class=" Selected rounded-l-full">Réponse officielle</div>
                <div id="RD" ref="RD"  @click="reponseClick('rd')" class=" UnSelected rounded-r-full">Réponse détaillée</div>
            </div>
        </div>
        <div class="my-4 flex">            
            <div class="pl-4 pb-4 text-sm w-5/6 mr-1" >
                {{data}}    
            </div>
            <SideItems />
        </div>
        <div class="my-2 mx-2 flex text-center">            
            <div class="relative mx-auto w-16 h-16">
                <div class="rounded-full shadow-md bg-lightgray-600 shadow-sm h-16 w-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" mx-auto  h-6 w-6 stroke-current text-gray-350" fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg> 
                </div>            
            </div>        
            <div class="relative mx-auto w-16 h-16">
                <div class="rounded-full shadow-md bg-lightgray-600 shadow-sm h-16 w-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" mx-auto  h-6 w-6 stroke-current text-gray-350" fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                </div>            
            </div>        
            <div class="relative mx-auto w-16 h-16">
                <div class="rounded-full shadow-md bg-lightgray-600 shadow-sm h-16 w-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" mx-auto  h-6 w-6 stroke-current text-gray-350" fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg> 
                </div>            
            </div>        
            <div class="relative mx-auto w-16 h-16">
                <div class="rounded-full shadow-md bg-lightgray-600 shadow-sm h-16 w-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" mx-auto  h-6 w-6 stroke-current text-gray-350" fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                    </svg> 
                </div>            
            </div>        
        </div>
        <div class=" divbuttons">         
            <div class="w-1/2 mx-auto flexible">
                <button class="button-blue">
                    Suivant
                </button>
            </div>      
        </div>
    </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'
import SideItems from '../../components/SideItems.vue'
export default {
 components: { NavigationBar ,SideItems},
 data(){
     return{
         data:"",
         dataRO:"",
         dataRD:""

     }
 },
 mounted(){
     this.dataRO="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti suscipit adipisci quas inventore quasi ullam quaerat, recusandae molestiae obcaecati tenetur neque similique assumenda praesentium voluptate delectus rerum nisi totam."+  
                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam? Quo quisquam quos deleniti voluptatum iusto illo vel reiciendis assumenda ipsa minima accusamus dolores molestias porro doloribus dolorem"
    this.dataRD="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam? Quo quisquam quos deleniti voluptatum iusto illo vel reiciendis assumenda ipsa minima accusamus dolores molestias porro doloribus dolorem"+
                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti suscipit adipisci quas inventore quasi ullam quaerat, recusandae molestiae obcaecati tenetur neque similique assumenda praesentium voluptate delectus rerum nisi totam."
    this.data=this.dataRO
 },
 methods:{
     reponseClick(str){
         if (str=='ro'){
                this.data=this.dataRO
            this.$refs.RD.classList.replace('Selected','UnSelected')
            this.$refs.RO.classList.replace("UnSelected" , 'Selected')
         }else
         {
                this.data=this.dataRD
            this.$refs.RO.classList.replace('Selected','UnSelected')
            this.$refs.RD.classList.replace("UnSelected" , 'Selected')
         }
     }
 }
}
</script>

<style>

</style>