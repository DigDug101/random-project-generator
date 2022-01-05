<script lang="ts">
  import { onMount } from "svelte";
  import { projectsList } from "../constants/projects_list";
  import type { Project } from "../constants/projects_list";

  let randomProject: Project;

  function getRandomProject() {
    const randomIndex = Math.floor(Math.random() * projectsList.length);
    randomProject = projectsList[randomIndex];
  }

  onMount(() => {
    getRandomProject();
  });
</script>

<a class="absolute bottom-12 left-[50%] translate-x-[-50%]" href="/about"
  >/about</a
>
<main class="w-full h-full bg-sky-400 flex justify-center items-center">
  <section class="flex flex-col">
    <button
      on:click={getRandomProject}
      class="px-8 py-4 bg-sky-700 hover:bg-sky-600 transition-colors duration-150 rounded-xl shadow-xl uppercase text-white font-semibold"
      >Random Project</button
    >

    {#if randomProject}
      <article
        class="bg-sky-600 p-4 w-[550px] h-[510px] rounded-lg shadow-lg mt-12 text-white"
      >
        <h2 class="text-3xl font-semibold">
          <span class="text-purple-300">#</span>
          {randomProject.name}
        </h2>

        <div class="flex items-center gap-2 my-4">
          {#if randomProject.examples.length > 0}
            {#each randomProject.examples as example}
              <a
                class="p-2 bg-sky-400 hover:bg-sky-700 rounded-lg font-medium transition-colors duration-150"
                href={example.src}>{example.text}</a
              >
            {/each}
          {/if}
        </div>

        {#if randomProject.links.length > 0}
          <h3 class="text-lg">Might be useful:</h3>
        {/if}
        <div class="flex flex-wrap gap-2 mt-4">
          {#if randomProject.links.length > 0}
            {#each randomProject.links as projectLink}
              <a
                class="p-2 bg-sky-400 hover:bg-sky-700 rounded-lg font-medium transition-colors duration-150"
                href={projectLink.src}>{projectLink.text}</a
              >
            {/each}
          {/if}
        </div>
      </article>
    {/if}
  </section>
</main>
