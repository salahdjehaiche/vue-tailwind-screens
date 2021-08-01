<template>
    <nav class="bg-green-blue px-2 pt-2 ">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-10 sm:h-auto">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md 
            text-white hover:text-white hover:bg-darkgreen-blue focus:outline-none focus:ring-2 
            focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
            @click="hiddenbar"
            >
            <span class="sr-only">Open main menu</span>
            <!--
                Icon when menu is closed.




                Heroicon name: outline/menu

                Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
                Icon when menu is open.

                Heroicon name: outline/x

                Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            
            <div class="hidden sm:block">
                <div class="sm:flex space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link  class="hover:bg-darkgreen-blue text-white 
                    px-3 py-2 rounded-md text-sm font-medium" to="/">Home</router-link> 
                    <router-link  class="hover:bg-darkgreen-blue text-white 
                    px-3 py-2 rounded-md text-sm font-medium" to="/select">Select</router-link> 
                    <router-link  class="hover:bg-darkgreen-blue text-white 
                    px-3 py-2 rounded-md text-sm font-medium" to="/enonce">Enoncé</router-link> 
                    <router-link  class="hover:bg-darkgreen-blue text-white 
                    px-3 py-2 rounded-md text-sm font-medium" to="/reponse">Réponse</router-link> 
                </div>
            </div>
            
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="hover:bg-darkgreen-blue p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            </button>       
        </div>
        </div>
        <div class="relative flex items-center justify-between h-auto">
        
                <div class="hidden sm:block px-2  pb-3 space-y-1">
                    <slot name="bac" > </slot>
                </div>
                <div class="hidden sm:block px-2  pb-3 space-y-1 right-0">
                    <slot name="buttons" > </slot>
                </div>

        </div>
    </div>


    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1" id="menu"  v-if="!hidden">
            <router-link class="bg-lightgreen-blue text-white block px-3 py-2 rounded-md
             text-base font-medium" to="/">Home</router-link>
            <router-link class="bg-lightgreen-blue text-white block px-3 py-2 rounded-md
             text-base font-medium" to="/select">Select</router-link>
            <router-link class="bg-lightgreen-blue text-white block px-3 py-2 rounded-md
             text-base font-medium" to="/enonce">Enoncé</router-link>
            <router-link class="bg-lightgreen-blue text-white block px-3 py-2 rounded-md
             text-base font-medium" to="/reponse">Réponse</router-link> 

        </div>
        <div class="flexible">
            <div class="px-2  pb-5 space-y-1">
                <slot name="bac" > </slot>
            </div> 
            <div class="px-2 pb-3 space-y-1 right-0 ">
                <slot name="buttons" > </slot>
            </div>       
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data(){
        return{
            hidden:true,
        }
    },
    methods: {
        hiddenbar(){
            this.hidden=!this.hidden
        }
    }
}
</script>

<style>

</style>