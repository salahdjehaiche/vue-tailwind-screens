<template>
    <div class="w-1/6 z-10 pt-4 sm:pt-1">
        <div class="rounded-l-full my-2 w-full text-xl shadow-md px-3 py-2 sm:mx-auto sm:px-0" @click="favoris">
            <svg xmlns="http://www.w3.org/2000/svg" class="sm:mx-auto h-6 w-6 stroke-current text-green-blue" fill="none" viewBox="0 0 24 24" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>                    
        </div>
        <div class="rounded-l-full my-2 w-full text-xl shadow-md px-3 py-2 sm:px-0" @click="flag">
            <svg xmlns="http://www.w3.org/2000/svg" class="sm:mx-auto h-6 w-6 stroke-current text-green-blue" fill="none" viewBox="0 0 24 24" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>                    
        </div>
        <div class="rounded-l-full my-2 w-full text-xl shadow-md px-3 py-2 sm:px-0" @click="commenter">
            <svg xmlns="http://www.w3.org/2000/svg" class="sm:mx-auto h-6 w-6 stroke-current text-green-blue" fill="none" viewBox="0 0 24 24" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>                    
        </div>
    </div>
</template>

<script>
export default {
methods:{
    favoris(){
        console.log("favoris")
    },
    flag(){
        console.log("flag")
    },
    commenter(){
        console.log("commenter")
    }
}
}
</script>

<style>

</style>