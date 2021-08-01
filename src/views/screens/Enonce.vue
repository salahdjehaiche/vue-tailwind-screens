<template>
<NavigationBar >
        <template v-slot:bac>    
            <div class="py-1 my-1">
                <h1 class="text-white font-bold text-3xl">Français</h1>
                <div class="w-full rounded-full bg-lightgreen-blue px-5 text-white">
                    <label for="">Bac 2001</label>
                </div>
            </div>
        </template>
    </NavigationBar>
    <div class="mx-2 ">
        <div class="m-6">
            <div class="px-4  py-2 font-bold" >
                Enoncé
            </div>
            <div class="pl-4 pr-8 pb-2" >
            {{data}}    
            </div>
        </div>
        <div class="divbuttons">
            <div class="w-1/2 px-2 sm:w-1/4 sm:mx-auto ">
                <div class="">
                    <button class="button-blue">
                        Commencer
                    </button>
                </div>
            </div>
            <div class="w-1/2 px-2 sm:w-1/4 sm:mx-auto">
                <div class="">
                    <button class="button-lightgray">
                        Passer
                    </button>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'
export default {
 components: { NavigationBar },
 data(){
     return{
         data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti suscipit adipisci quas inventore quasi ullam quaerat, recusandae molestiae obcaecati tenetur neque similique assumenda praesentium voluptate delectus rerum nisi totam."+
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quisquam? Quo quisquam quos deleniti voluptatum iusto illo vel reiciendis assumenda ipsa minima accusamus dolores molestias porro doloribus dolorem"
     }
 }
}
</script>

<style>

</style>