<script lang="ts">
  import FaqPage from '../pages/faq.svelte';
  import background from '../assets/bg.webp';
</script>

<img id="background" src={background} alt="background">
<main>
  <div id="centerContainer">
    <a id="instagram" href="https://www.instagram.com/sebastiansmash/" target="_blank">
      <p>
        INSTAGRAM
      </p>
    </a>
  </div>
  <FaqPage />
</main>

<style>
  #background {
    position: absolute;
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    user-select: none;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  #centerContainer {
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    background: none;
    padding: 0.75rem;
    cursor: pointer;
  }

  p {
    text-align: center;
  }

  #instagram:hover p {
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 20px rgba(217, 46, 127);
    transition: all 0.5s ease;
  }
</style>