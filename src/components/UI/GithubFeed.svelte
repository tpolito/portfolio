<script lang="ts">
  import { truncateString } from '../../utils'
import CommitCard from './CommitCard.svelte'

  // Once we fetch the data, ensure we splice the results down to four.
  let mock = [
    {
      date: 'tpolito commit 3 hours ago',
      msg: 'Scaffold activity section + create project card component.'
    },
    {
      date: 'tpolito commit 3 hours ago',
      msg: 'Scaffold activity section + create project card component.'
    },
    {
      date: 'tpolito commit 3 hours ago',
      msg: 'Scaffold activity section + create project card component.'
    },
    {
      date: 'tpolito commit 3 hours ago',
      msg: 'Scaffold activity section + create project card component.'
    }
  ]
</script>

<div class="container">
  {#each mock as commit}
    <CommitCard date={commit.date} msg={commit.msg} />
  {/each}
</div>

<style> 
  .container {
    /* height: 500px; */
    /* width: 500px; */
    background-color: var(--background-terirary);
    border-radius: 3px;
    padding: 1.5rem;
  } 
</style>