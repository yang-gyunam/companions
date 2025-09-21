<script lang="ts">
	import type { CardType } from '$organisms/Card.type'
	import { CardOrientation } from '$organisms/Card.type'
	import type { Snippet } from 'svelte'

	interface Props {
		param: CardType
		children?: Snippet
	}

	let { param, children }: Props = $props()
</script>

{#if param.orientation == CardOrientation.Landscape}
	<!-- <div
  class="block rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    data-te-ripple-init
    data-te-ripple-color="light">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
      alt="" />
    <a href="#!">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div class="p-6">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {param.title}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {param.description}
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Button
    </button>
  </div>
</div> -->
	<div class="card bg-base-100 shadow-xl">
		<div class="card-body">
			{#if children}
				{@render children()}
			{:else}
				<h2 class="card-title">{param.title}</h2>
				<p>{param.description}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Watch</button>
				</div>
			{/if}
		</div>
	</div>
{:else}
	<!-- <div
  class="flex flex-col rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
    alt="" />
  <div class="flex flex-col justify-start p-6">
    <h5
      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
      {param.title}
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {param.description}
    </p>
    <p class="text-xs text-neutral-500 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div> -->
	<div class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			{#if children}
				{@render children()}
			{:else}
				<h2 class="card-title">{param.title}</h2>
				<p>{param.description}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
