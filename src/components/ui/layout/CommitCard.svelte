<script lang="ts">
  import { truncateString } from '../../../utils'
  export let date: string;
  export let msg: string;
</script>


<div class="commit-card">
  <img src="https://avatars.githubusercontent.com/u/29431348?v=4" alt="github avatar" />
  <div>
    <p class="commit commit-date"><em>{date}</em></p>
    <p class="commit commit-message">{truncateString(msg, 60)}</p>
  </div>
</div>


<style>
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  } 
  .commit-card {
    border: 1px solid var(--headline);
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem .5rem;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
  }
  .commit {
    line-height: 1;
    font-size: .8rem;
    margin-left: .5rem;
  }
  .commit-date {
    color: var(--headline);
  }
</style>