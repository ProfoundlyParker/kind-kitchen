<script>
  import Menu from "./Menu.svelte";

    export let menuFeature;
</script>

<!-- Displays Menu info and images -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0.5 pb-6">
    <div class="flex flex-col gap-2">
            <h4 class="text-lg font-semibold">{menuFeature.name}</h4>
            <p class="text-green-500 font-semibold">{menuFeature.price}</p>
            <p class="text-sm text-gray-600">{menuFeature.description}</p>
    </div>
    <img src={menuFeature.imgUrl} alt="menu-item" class="rounded-lg shadow-md dropShadow menu-image" style="margin-left: 7px;">
</div>