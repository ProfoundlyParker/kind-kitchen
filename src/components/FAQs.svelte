<script>
  import { onMount } from "svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  
  // FAQ Questions and Answers
  let faqs = [
        {
            question: "Is everything on the menu vegan?",
            ans: "Yes, everything on our menu is 100% vegan. We believe in creating delicious dishes that are not only cruelty-free but also environmentally sustainable.",
        },
        {
            question: "Where do you source your ingredients from?",
            ans: "We prioritize sourcing our ingredients locally and organically whenever possible. Our commitment to sustainability extends to our suppliers, ensuring that our ingredients are ethically sourced.",
        },
        {
            question: "Are your packaging materials eco-friendly?",
            ans: "Absolutely! We use compostable and biodegradable packaging materials to minimize our environmental footprint. From takeout containers to utensils, we strive to make every aspect of our operation as eco-friendly as possible.",
        },
        {
            question: "Do you accommodate dietary restrictions and allergies?",
            ans: "Yes, we understand the importance of catering to dietary restrictions and allergies. Please inform your server of any special dietary requirements, and we will do our best to accommodate them.",
        },
        {
            question: "Do you offer gluten-free options?",
            ans: "Yes, we offer a variety of gluten-free options on our menu. Just ask your server for recommendations, and they'll be happy to assist you.",
        },
        {
            question: "What makes your restaurant sustainable?",
            ans: "Sustainability is at the core of everything we do. From our sourcing practices to our waste reduction efforts, we strive to minimize our impact on the planet while maximizing flavor and nutrition in our dishes.",
        },
        {
            question: "Can I make a reservation for a large group?",
            ans: "Of course! We welcome reservations for large groups and events. Please contact us directly to discuss availability and any special arrangements you may require.",
        },
        {
            question: "Do you offer catering services?",
            ans: "Yes, we offer catering services for a variety of events and occasions. Whether you're planning a corporate lunch or a wedding reception, we'll work with you to create a menu that fits your needs and preferences.",
        },
        {
            question: "Can I bring my own reusable containers for takeout?",
            ans: "Absolutely! We encourage our customers to bring their own reusable containers for takeout orders. Just let us know when placing your order, and we'll be happy to accommodate your request.",
        },
        {
            question: "Can I purchase gift cards for Kind Kitchen?",
            ans: "Absolutely! Gift cards are available for purchase at our restaurant. Treat your friends and loved ones to the gift of delicious, sustainable dining.",
        },
  ];

  onMount(() => {
    faqs.forEach(faq => {
        faq.open = false;
    });
  });
</script>

<!-- FAQ Section -->
<SectionWrapper id="faqs">
    <div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                For all your kind-eating questions
            </p>
            <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
                Frequently Asked Questions
            </h3>
    </div>
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
            {#each faqs as faq}
                <div class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-2">
                    <div class="absolute top-0 left-1 w-1/3 h-[1px] bg-green-950 -translate-x-4">
                    </div>
                    <div class="absolute top-0 left-0 h-2/3 w-[1px] bg-green-950 -translate-y-4">
                    </div>
                    <div class="flex items-center">
                        <button class="p-1.5 ml-2 text-green-500 focus:outline-none" on:click={() => faq.open = !faq.open}>
                            {#if faq.open}
                            <i class="fa-solid fa-chevron-up" />
                            {:else}
                            <i class="fa-solid fa-chevron-down" />
                            {/if}
                        </button>
                        <h4 class="text-lg sm:text-xl md:text-2xl pt-2">{faq.question}</h4>
                    </div>
                    {#if faq.open}
                         <p class="pl-2">{faq.ans}</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</SectionWrapper>