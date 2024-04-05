<script lang="ts">
  const questions = [
    {
      question: "Want clears for your car ?",
      answer: "Message me on the Instagram account listed above. Include info about the car, some photos & where are you from in the message to get more info if/when I could make clears for your car."
    }
  ]
</script>

<div class="questions">
  {#each questions as question}
    <div class="question">
      {question.question}
    </div>
    <div class="answer"> 
      {question.answer}
    </div>
  {/each}
</div>

<style>
  @media screen and (max-width: 920px) {
    .questions {
      width: 60vw !important;
    }
  }

  .questions {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: 60vh;
    width: 30vw;
    height: 40vh;
    color: white;
  }

  .question {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: .2rem;
    height: 1.5rem; /* Adjust as needed */
  }

  .answer {
    text-align: center;
  }
</style>