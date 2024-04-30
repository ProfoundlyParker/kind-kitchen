<script>
  import ProductCard from "./ProductCard.svelte";
import SectionWrapper from "./SectionWrapper.svelte";
  let productFeatures = [
    {
        featureList: [
            "Vegan, fair, and sustainable food",
            "Something for everyone",
            "Kind eating and living is the new norm",
            "Delicious plant-based food made with love"
        ],
        description: "Vegan, plant-based kitchen commited to making kind eating the norm",
        imgUrl: ''
    },
    {
        featureList: [
            "Vegan, fair, and sustainable food",
            "Something for everyone",
            "Kind eating and living is the new norm",
            "Delicious plant-based food made with love"
        ],
        description: "Vegan, plant-based kitchen commited to making kind eating the norm",
        imgUrl: ''
    },
    {
        featureList: [
            "Vegan, fair, and sustainable food",
            "Something for everyone",
            "Kind eating and living is the new norm",
            "Delicious plant-based food made with love"
        ],
        description: "Vegan, plant-based kitchen commited to making kind eating the norm",
        imgUrl: ''
    }
  ]

</script>

<SectionWrapper id="product">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Start eating <span class="text-green-400">kind</span> today.
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Food for Everyone
            </h3>
        </div>
            {#each productFeatures as productFeature, index}
                <ProductCard {productFeature} {index}>
                    {#if index === 0}
                        Experience a <span class="text-green-400" font-medium>vegan & and kind</span> meal today
                    {:else if index === 1}
                        Experience the tastiness <span class="text-green-400 font-medium">plant-based food</span> has to offer
                    {:else}
                        Vegan food unlike <span class="text-green-400 font-medium">no others,</span> made with kindness
                    {/if}
                </ProductCard>
            {/each}
    </div>
</SectionWrapper>