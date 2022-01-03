<script lang="ts">
  let date = new Date();
  let year = date.getFullYear(); 
</script>

<footer>
  <p>©{year} Tyler Polito. All Rights Reserved.</p>
</footer>

<style>
  footer {
    margin: 0;
    padding: 0;
    background-color: var(--background-secondary);
    display: grid;
    place-items: center;
    padding-bottom: .2rem;
  }
  p {
    font-size: .8rem;
    margin: 0;
    padding: 0;
  }
</style>