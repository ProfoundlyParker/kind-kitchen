<script>
    import "../app.css";
    import CtAs from "../components/CTAs.svelte";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import {openModal} from "../store";

    let y;
    $: outerHeight = 0;


    const reroute = (href) => {
      $openModal = false;
      window.location.href = href;
    }
  </script>
  
  <!-- If openModal = true, this displays the mobile navigation menu -->
  {#if $openModal}
    <div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden">
      <div class="flex items-center justify-between gap-4 border-b pb-2 text-2xl">
        <a href="/" on:click={() => ($openModal = false)}>
          <h1 class="font-semibold"><span class="text-green-400">Kind</span> Kitchen</h1>
        </a>
        <button on:click={() => $openModal = false} class="outline-none border-none">
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
      </div>
      <div class="flex flex-col gap-4 flex-1">
        <button on:click={() => reroute('#menu')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Menu <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#reviews')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Reviews <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
        <button on:click={() => reroute('#faqs')} class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
          <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">FAQs <i class="fa-solid fa-chevron-right text-xl pl-4"/></p>
        </button>
      </div>
      <div class="flex flex-col items-center justify-center">
        <CtAs />
      </div>
    </div>
  {/if}

  <!-- Displays the mobile navigation menu at the top once the user scrolls -->
  {#if y > outerHeight}
    <div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">
      <Header />
    </div>
  {/if}
  <slot />
  <Footer />
  <svelte:window bind:scrollY={y} bind:outerHeight />

<!-- 
header
hero
product description
user reviews
faq
conversion
footer 
-->