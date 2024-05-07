<script>
  import CtAs from "./CTAs.svelte";
  import Header from "./Header.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  import Stars from "./Stars.svelte";
</script>

<!-- Displays Hero section with eye-catching info and CTA buttons -->
<SectionWrapper>
    <Header />
    <div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
        <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
            <span class="text-green-400">Kind</span> Eating <span class="text-slate-600 line-through">Is Boring</span><br />
            Easier Than <span class="text-green-400">Ever</span>
        </h2>
        <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">Less harm, more kindness. We're a vegan kitchen
            <span class="italic">committed to making kind food delicious.</span> Eat kind today!
        </p>
        <CtAs />
        <Stars />
    </div>
</SectionWrapper>