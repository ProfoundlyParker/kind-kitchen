<script>
    export let reviewItem;
    export let left;
    export let index;
</script>

<!-- Displays ReviewCards and name + review -->
<div
    class={"flex flex-col gap-2 w-full max-w-[500px] mx-auto relative " +
        (left
            ? index % 2 === 1
                ? "hidden md:flex opacity-0 pointer-events-none max-h-[40px] overflow-hidden"
                : " "
            : index % 2 === 0
              ? "hidden md:flex opacity-0 pointer-events-none max-h-[40px] overflow-hidden"
              : " ")}
>
    <div class="flex relative">
        <div
            class={"absolute rounded-full bg-white aspect-square hidden md:grid place-items-center h-4 top-0 " +
                (index % 2 === 0
                    ? " right-0 -mr-8 translate-x-1/2"
                    : " left-0 -ml-8 -translate-x-1/2")}
        >
            <i class="fa-solid fa-heart text-green-600" />
        </div>
        <div class="flex items-center gap-2">
            <i class="fa-solid fa-seedling text-green-400" />
            <h3 class="text-lg sm:text-xl md:text-2xl">
                {reviewItem.name}
            </h3>
        </div>
    </div>
    <div class="h-[1.5px] bg-slate-300 w-40 mr-auto mb-2"></div>
    <div class="flex items-center flex-wrap gap-2 text-xs sm:text-sm mb-4">
        {#each reviewItem.features as keywork}
            <div class="p-1 py-0.5 rounded-md border border-solid border-green-500 bg-green-50 text-green-500">
                <p>{keywork}</p>
            </div>
        {/each}
    </div>
    <p>{reviewItem.review}</p>
</div>