<script>
    import {openModal} from '../store'
</script>

<!-- Displays brand Header and navigation menu button -->
<header class="flex flex-col relative z-20">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6 text-2xl">
        <a href="/">
            <h1 class="font-semibold"><span class="text-green-400">Kind</span> Kitchen</h1>
        </a>
        <button on:click={() => $openModal = true} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i> 
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="#menu" class="duration-200 hover:text-green-400 cursor-pointer">Menu</a>
            <a href="#reviews" class="duration-200 hover:text-green-400 cursor-pointer">Reviews</a>
            <a href="#faqs" class="duration-200 hover:text-green-400 cursor-pointer">FAQs</a>
            <button class="specialBtn">
                <p>Try Kind Food Today</p>
            </button>
        </nav>
    </div>
</header>