<script>
  import MenuCard from "./MenuCard.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";

  // Menu Features
  let menuFeatures = [
    {
        name: "Quinoa & Chickpea Salad",
        description: "Fresh quinoa salad with avocado, chickpeas, radish, sweet potato, cauliflower and mixed greens tossed in a creamy vinaigrette.",
        imgUrl: "assets/bowl.jpg",
        price: "$9.99",
    },
    {
        name: "Black Bean Burger",
        description: "Black bean patty, topped with lettuce, avocado, and tomato, served on a toasted bun.",
        imgUrl: "assets/burger.jpg",
        price: "$11.50",
    },
    {
        name: "Macaroni and Cheeze",
        description: "Creamy cashew cheese sauce with fresh pasta. Topped with smoked paprika and fresh parsley.",
        imgUrl: "assets/mac-and-cheese.jpg",
        price: "$10.99",
    },
    {
        name: "Rice & Bean Taco Bowl",
        description: "Rice and black bean bowl with zucchini, kale, tomatoes, and pico de gallo. Topped with guacamole, sour cream, and tortilla chips.",
        imgUrl: "assets/tacos.jpg",
        price: "$12.99"
    },
    {
        name: "Butternut Squash Soup",
        description: "Butternut squash soup, topped with pumpkin seeds.",
        imgUrl: "assets/squash-soup.jpg",
        price: "$9.99"
    },
    {
        name: "Veggie Sushi",
        description: "Veggie sushi packed with rice, and carrots. Wrapped in seaweed and topped with avocado, sesame seeds, and red pepper flakes.",
        imgUrl: "assets/sushi.jpg",
        price: "$11.99"
    },
  ]
</script>

<!-- Displays Menu section and MenuCards and info/images -->
<SectionWrapper id="menu">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Start eating <span class="text-green-400">kind</span> today.
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Menu
            </h3>
        </div>
        <div class="max-w-[1600px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-0.5">
            {#each menuFeatures as menuFeature}
                <MenuCard {menuFeature} />
            {/each}
        </div>
    </div>
</SectionWrapper>