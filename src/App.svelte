<script lang="ts">
  
</script>

<main>
  <div id="centerContainer">
    <a href="https://www.instagram.com//" target="_blank">
      <p>
        Instragram
      </p>
    </a>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    background-image: url("../assets/bg.webp");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #centerContainer {
    display: flex;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    background: none;
    padding: 0.75rem;
    cursor: pointer;
    border: 0.5px rgba(0, 0, 0, 0.502) solid;
  }

  a:hover p {
    background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 20px rgba(254, 211, 115, 0.75),
      2px 2px 20px rgba(241, 82, 69, 0.75),
      -2px -2px 20px rgba(217, 46, 127, 0.75),
      4px 4px 20px rgba(155, 54, 183, 0.75),
      -4px -4px 20px rgba(81, 94, 207, 0.75);
    transition: all 0.5s ease;
  }
</style>
