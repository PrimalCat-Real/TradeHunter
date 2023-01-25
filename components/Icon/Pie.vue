<template>
  <svg :width="width" :height="height" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.99681C6 1.88635 5.91002 1.79647 5.79962 1.80009C2.57867 1.90579 0 4.55016 0 7.79681C0 11.1105 2.68629 13.7968 6 13.7968C9.24665 13.7968 11.891 11.2181 11.9967 7.99719C12.0003 7.88679 11.9105 7.79681 11.8 7.79681H6.2C6.08954 7.79681 6 7.70727 6 7.59681V1.99681Z" fill="#676A70"/>
    <mask id="mask0_24_34" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="0" width="7" height="7">
    <rect x="7" y="0.299988" width="6.5" height="6.7" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_24_34)">
    <ellipse cx="6.99996" cy="6.99997" rx="5.57143" ry="5.74286" fill="#676A70"/>
    </g>
    </svg>
</template>

<script>
export default {
  name: 'Pie',
  props: {
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
  },
}
</script>