<script lang="ts">
  import GithubFeed from "../UI/GithubFeed.svelte";
  import ProjectCard from "../UI/ProjectCard.svelte";
</script>

<section class="section" id="about">
  <div class="container">
    <div class="activity">
     <div class="project-cards"> 
       <h2>What I'm working on</h2>
       <ProjectCard link={'https://google.com'} />
       <ProjectCard link={'https://google.com'} />
       <ProjectCard link={'https://google.com'} />
      </div>
      <GithubFeed /> 
    </div> 
  </div>
</section>

<style>
  #about {
    background-color: var(--background);
    background-image: url('../../assets/animated-shapes.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
  } 
  h2 {
    font-size: 3rem;
    color: var(--headline);
    margin: 0;
  }
  .container {
    width: 90%;
    max-width: 1040px;
    margin: 0 auto;
  }
  .activity {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .project-cards {
    margin-right: 3rem;
  }
</style>