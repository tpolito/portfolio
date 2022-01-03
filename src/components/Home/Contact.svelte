<script lang="ts">
  import ContactForm from "../ui/form/ContactForm.svelte";
</script>

<section class="section" id="contact">
  <div class="container">
    <h2>Want to get in touch?</h2>
    <ContactForm />
  </div>
</section>

<style>
  h2 {
    margin-bottom: 2rem;
  }
  #contact {
    background-color: var(--background-secondary); 
  } 
  .container {
    width: 90%;
    max-width: 1040px;
    margin: 0 auto;
  }
</style>