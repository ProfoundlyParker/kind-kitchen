<script>
    import CtAs from "./CTAs.svelte";

</script>

<!-- Displays CTA buttons with dark stylings -->
<section class="py-14 md:py-20 flex flex-col gap-8 bg-[#181b34] text-white text-center items-center justify-center">
    <h4 class="text-xl sm:text-2xl md:text-3xl poppins">Try our <span class="poppins font-bold">kind and vegan food</span> today!</h4>
    <p class="poppins text-base sm:text-lg md:text-xl">
        🌱 Vegan, fair, and sustainable 🌱
    </p>
    <CtAs dark={true}/>
</section>