<script>
  import Menu from "./Menu.svelte";

    export let menuFeature;
</script>

<!-- Displays Menu info and images -->
<div class="flex flex-col sm:flex-row text-left px-4 gap-8 lg:gap-0.5 pb-6">
  <div class="flex flex-col gap-2 w-full sm:w-1/2">
      <h4 class="text-lg font-semibold">{menuFeature.name}</h4>
      <p class="text-green-500 font-semibold">{menuFeature.price}</p>
      <p class="text-sm text-gray-600 px-0.5">{menuFeature.description}</p>
  </div>
  <img src={menuFeature.imgUrl} alt="menu-item" class="rounded-lg shadow-md sm:w-1/2 object-cover h-40 sm:h-48 lg:h-56 dropShadow menu-image">
</div>