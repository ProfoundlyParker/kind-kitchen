<script>
  import ReviewCard from "./ReviewCard.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  import Stars from "./Stars.svelte";

  let lim = true;

  // List of faux reviews and names
  let reviewsList = [
        {
            name: "John Doe",
            review: "Kind Kitchen has completely changed my perception of vegan cuisine! As someone who used to be skeptical about plant-based options, I was blown away by the delicious and wholesome meals they offer. The atmosphere is warm and inviting, and the staff is incredibly friendly. I leave feeling nourished both physically and spiritually every time I dine here. Highly recommend!",
            features: [
                "delicious",
                "wholesome",
                "warm & inviting",
            ],
        },
        {
            name: "Jane Smith",
            review: "I can't say enough good things about Kind Kitchen. Not only is the food absolutely delicious, but the commitment to sustainability and ethical sourcing truly sets them apart. Every bite feels like a step towards a better world. Plus, the menu is so creative and diverse that there's always something new to try. A must-visit for anyone looking for a guilt-free dining experience!",
            features: [
                "creative",
                "diverse",
                "guilt-free dining experience",
            ],
        },
        {
            name: "Michael Brown",
            review: "I can't say enough good things about Kind Kitchen! The commitment to sustainability and ethical dining practices is truly inspiring. But beyond that, the food is simply phenomenal. Each dish is a work of art, bursting with vibrant colors and flavors. Whether you're craving a hearty meal or a light snack, you'll find something to love here. Trust me, you won't be disappointed!",
            features: [
                "work of art",
                "hearty meal",
                "light snack",
            ],
        },
        {
            name: "Sarah Williams",
            review: "If you're looking for a restaurant that serves up kindness with every dish, look no further than Kind Kitchen. From the moment you step through the door, you're greeted with smiles and positive energy. The food is fresh, flavorful, and made with ingredients you can feel good about. Whether you're a lifelong vegan or just dipping your toes into plant-based eating, this place will leave you feeling nourished and uplifted.",
            features: [
                "kindness with every dish",
                "nourished & uplifted",
                "smiles & positive energy",
            ],
        },
        {
            name: "David Lee",
            review: "Kind Kitchen is my happy place! The food is absolutely divine, with every dish bursting with fresh flavors and wholesome ingredients. But what really keeps me coming back is the atmosphere of love and positivity that fills the space. Whether you're stopping in for a quick bite or settling in for a leisurely meal, you'll leave feeling nourished in body and spirit. Do yourself a favor and pay a visit to Kind Kitchen – your taste buds (and the planet) will thank you!",
            features: [
                "happy place",
                "divine",
                "atmosphere of love & positivity",
            ],
        },
        {
            name: "Ashley Johnson",
            review: "If you're searching for a place where you can indulge guilt-free, look no further than Kind Kitchen. Their commitment to using ethically sourced ingredients shines through in every dish. The flavors are so vibrant and satisfying, you won't even miss meat! Plus, the friendly staff make you feel like family from the moment you walk in. A must-visit for vegans and non-vegans alike!",
            features: [
                "friendly staff",
                "indulge guilt-free",
                "vibrant & satisfying flavors",
            ],
        },
        {
            name: "Mark Robinson",
            review: "I stumbled upon Kind Kitchen by chance and I'm so glad I did! This restaurant is a shining example of how vegan food can be both healthy and indulgent. Each dish bursts with flavor and creativity, and you can taste the love and compassion that goes into every bite. The ambiance is so inviting, making it the perfect spot for a wholesome meal with friends or family.",
            features: [
                "healthy and indulgent",
                "bursts with flavor & creativity",
                "love & compassion in every bite",
            ],
        },
    ];
</script>

<!-- Displays Review Section -->
<SectionWrapper id="reviews">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Don't just take our word for it.
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                See What Our <span class="text-green-400">Kind Eaters</span> Have To Say
            </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-full max-w-[1000px] mx-auto">
            <div class="flex flex-col w-full md:w-1/2 gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} left={true} {index} />
                {/each}
            </div>
            <div class="w-[1px] bg-green-700 hidden md:flex"></div>
            <div class="flex flex-col gap-8 w-full md:w-1/2">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} {index} />
                {/each}
            </div>
        </div>
        <button on:click={() => (lim = !lim)} class="specialBtn">
            <p>{lim ? "Show More" : "Show Less"}</p>
        </button>
        <div class="flex flex-col gap-10">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted by 1,234 Kind Eaters
            </p>
            <Stars />
        </div>
    </div>
</SectionWrapper>