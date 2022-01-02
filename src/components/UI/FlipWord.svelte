<script lang="ts">
import { fade } from 'svelte/transition';
import { randomIntFromInterval } from '../../utils' 

export let words: string[];
export let color = '#7f5af0';
let currentWord = words[Math.floor(Math.random() * words.length)] || 'cool';

function random() {
  setTimeout(() => {
    currentWord = words[Math.floor(Math.random() * words.length)]
    random();
  }, randomIntFromInterval(3000,4000))
}
random();
</script>

<span style="background-color: {color}" class="bg">
  {#key currentWord}
    <span in:fade="{{delay: 150, duration: 700}}">{currentWord}</span>
  {/key}
</span>

<style>
  .bg {
    color: #fffffe;
    padding: 3px;
  }
</style>