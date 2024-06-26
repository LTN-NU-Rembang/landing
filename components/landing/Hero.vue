<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="transition-transform transform hover:scale-125"
        src="~/assets/img/Nahdlatul_Ulama_Logo.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        PC Nahdlatul Ulama Kab. Rembang
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="#"
          target="_blank"
          rel="noopener"
          >Contact</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="#"
          target="_blank"
          >Portal</LandingLink
        >
      </div>
    </div>
  </main>
</template>
