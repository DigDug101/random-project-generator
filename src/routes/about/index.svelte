<script>
  import { projectsList } from "../../constants/projects_list";
</script>

<a
  class="absolute top-12 left-[50%] translate-x-[-50%] p-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg font-medium transition-colors duration-150"
  href="/">Go Back</a
>
<div class="bg-sky-500 flex justify-center items-center pt-24 pb-20">
  <section class="container max-w-xl mx-auto text-white">
    <h2 class="text-3xl font-semibold">
      <span class="text-purple-300">#</span>
      About
    </h2>
    <p class="mt-2">
      Random Project Generator, is application, made for all the developers out
      there, that are like me, like me they want to do something, build
      something, maybe learn some new technology or tool, but they don't know
      what to build, they do not have an idea what to build.
    </p>
    <p class="my-4">
      I've personally have been struggling to have a list of a projects that I
      wanna build in the future, always had the ideas written down in some
      notepad, or whatever, and they've always have just been forgotten, so I
      made this little application, more interactive, and having it as a website
      instead of a local note on your computer, this way, I think, when I'm
      gonna have an urge to build something, I'm just gonna go to this website,
      and have it all there, the examples, the resources links, instead of
      having to mindlessly googling stuff up.
    </p>
    <p class="my-4">
      Project ideas are kind of opinionated, because I must admit, I've been
      adding project on what I've would want to build, if I've put every single
      project idea I've encountered on internet, this list might be probably
      around twice as much project ideas as it is, but yeah, I've been adding
      projects that I'd wanna build, and I don't know if someone's gonna find
      this web app useful, but if they do, I'm going to be glad to be helpful.
    </p>
    <p class="my-4">
      I don't suppose it's completely beginner friendly project idea generator,
      there aren't any friendly descriptions, but there are examples with the
      links, to give you an idea of the design, or what would need to be done,
      or what can you add to this project of yours, and there are also resources
      links, some of them might be youtube tutorials, or medium articles, but
      most probably a link to a tool or technology, like <a
        class="text-purple-600 underline hover:text-purple-700"
        href="https://www.netlify.com/"
      >
        Netlify</a
      >, to host your website, or
      <a
        class="text-purple-600 underline hover:text-purple-700"
        href="https://www.postgresql.org/"
      >
        PostgreSQL</a
      >
      for you database, these are, like let's say, ideas for what you can use for
      this project, but don't let it stop you, because even for a
      <span class="text-purple-600">Quiz App</span>
      you probably could use like
      <a
        class="text-purple-600 underline hover:text-purple-700"
        href="https://firebase.google.com/"
      >
        Firebase</a
      >
      or some database, the resources are just to maybe switch on the lightbulb in
      your head, proposition what you can use, and absolutely you're not forced to
      use them. With all that, for some projects I've probably have missed to add
      some resources that might be useful for the particular project, but probably
      after clicking
      <span class="text-purple-600">Generate Random Project</span> button over 10
      times, you'll get an idea anyway.
    </p>
    <p class="mt-4 mb-6 text-2xl font-semibold">
      Current Length Of Project Ideas: <span class="text-purple-600"
        >{projectsList.length}</span
      >
    </p>

    <h2 class="text-3xl font-semibold mb-2">
      <span class="text-purple-300">#</span>
      To be added:
    </h2>
    <ul class="list-inside list-disc">
      <li>
        Posibility to mark project as done, so it won't be showing next time
        your try to generate new project
      </li>
    </ul>

    <h2 class="text-3xl font-semibold mb-2 mt-4">
      <span class="text-purple-300">#</span>
      Resources
    </h2>
    <h3 class="text-xl font-medium">Special Thanks To:</h3>
    <ul class="list-inside list-disc">
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://www.freecodecamp.org/news/react-projects-you-should-build-this-year/"
          >7 React Projects You Should Build in 2021</a
        >
        by
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://www.freecodecamp.org/news/author/reed/">Reed Barger</a
        >
      </li>
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://www.upgrad.com/blog/react-project-ideas-topics-beginners/"
          >9 Exciting React Project Ideas & Topics for Beginners 2021</a
        >
        by
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://www.upgrad.com/blog/author/rohan/">Rohat Vats</a
        >
      </li>
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://50reactprojects.com/">50 React Projects</a
        >
        by
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://twitter.com/colbyfayock">Colby Fayock</a
        >
      </li>
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://reactjsexample.com/">React Examples</a
        >
      </li>
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://github.com/florinpop17/app-ideas">App Ideas</a
        >
        by
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://twitter.com/florinpop1705?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >Florin Pop</a
        >
      </li>
      <li>
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://github.com/bradtraversy/vanillawebprojects"
          >20 Project Ideas</a
        >
        by
        <a
          class="text-purple-600 underline hover:text-purple-700"
          href="https://twitter.com/traversymedia">Brad Traversy</a
        >
      </li>
    </ul>
  </section>
</div>
