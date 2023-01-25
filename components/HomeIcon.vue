<template>
<svg class="group" :width="width" :height="height" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="group-hover:stroke-white duration-300" d="M2 3V7.4C2 7.95228 2.44772 8.4 3 8.4H8C8.55228 8.4 9 7.95228 9 7.4V3" stroke="#676A70"/>
    <path class="group-hover:fill-white duration-300" d="M10.392 3.68938L9.14827 2.69253V0.941817C9.14827 0.625263 8.8661 0.368722 8.51738 0.368722C8.16946 0.368722 7.88728 0.625263 7.88728 0.941817V1.5462L6.64599 0.417713C6.03229 -0.1399 4.96525 -0.138911 4.35294 0.418722L0.608014 3.68938C0.361945 3.91352 0.361945 4.2762 0.608014 4.5C0.854194 4.72408 1.25392 4.72408 1.50001 4.5L5.24454 1.22924C5.38032 1.10645 5.61964 1.10645 5.75471 1.22888L9.5 4.5C9.62361 4.61205 9.78477 4.66779 9.94589 4.66779C10.1073 4.66779 10.2688 4.61199 10.392 4.5C10.6382 4.27622 10.6382 3.91354 10.392 3.68938Z" fill="#676A70"/>
    <path class="group-hover:fill-white duration-300" d="M4 5C4 4.44772 4.44772 4 5 4H6C6.55228 4 7 4.44772 7 5V8H4V5Z" fill="#676A70"/>
</svg>
</template>

<script>
export default {
  name: 'Home',
  props: {
    width: {
      type: Number,
      default: 36,
    },
    height: {
      type: Number,
      default: 33,
    },
  },
}
</script>
