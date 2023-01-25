<template>
  <nav class="flex flex-col h-full max-w-[100px] border-opacity-70 items-center p-8 justify-center">
    <div class="logo top-element">
        
    </div>
    <ul class="center-element">
        <li>
            <NuxtLink to="/">
                <HomeIcon></HomeIcon>
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/">   
                <PieIcon></PieIcon>
            </NuxtLink>
        </li>
        <li>
            <NuxtLink to="/emissions">Home</NuxtLink>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>