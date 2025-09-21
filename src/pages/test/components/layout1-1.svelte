<script lang="ts">
	import TeamCard from '$organisms/TeamCard.svelte'

	import Card from '$organisms/Card.svelte'
	import type { CardType } from '$organisms/Card.type'
	import { CardOrientation } from '$organisms/Card.type'

	let param1: CardType = {
		title: 'card title',
		description:
			"Landscape - Some quick example text to build on the card title and make up the bulk of the card's content.",
		orientation: CardOrientation.Landscape
	}

	let param2: CardType = {
		title: 'card title',
		description:
			"Portrait - Some quick example text to build on the card title and make up the bulk of the card's content.",
		orientation: CardOrientation.Portrait
	}
</script>

<header class="p-0">
	<div class="navbar pl-2 bg-slate-50 dark:bg-slate-600">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</label>
				<a class="btn btn-ghost normal-case text-xl">PORTAL SAMPLE</a>

				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Homepage</a></li>
					<li><a>Portfolio</a></li>
					<li><a>About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<!-- <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div> -->
		</div>
		<div class="navbar-end">
			<!-- <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> -->
			<div class="form-control">
				<input type="text" placeholder="Search" class="input input-sm input-bordered w-44" />
			</div>
			<div class="flex gap-2">
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a class="justify-between">
								Profile
								<span class="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
						<li><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- flex flex-col space-y-4 my-0 lg:flex-row lg:space-x-3 lg:space-y-0 bg-slate-50 dark:bg-slate-600 -->
<div
	class="flex flex-col space-y-4 my-0 lg:flex-row lg:space-x-2 lg:space-y-0 bg-slate-50 dark:bg-slate-600"
>
	<div class="grid grid-flow-col lg:grid-flow-row">
		<ul class="menu menu-horizontal lg:menu lg:menu-vertical p-2 m-0 bg-slate-50 dark:bg-slate-600">
			<li>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a class="active">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
				</a>
			</li>
			<li class="disabled">
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
					</svg>
				</a>
			</li>
			<li>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
	<main class="bg-white px-5 py-4 lg:w-full xl:w-full 2xl:w-full">
		<h2 class="text-xl">Main Content</h2>

		<!-- Container for demo purpose -->
		<div class="container my-24 px-6 mx-auto">
			<!-- Section: Design Block -->
			<section class="mb-32 text-center lg:text-left">
				<h2 class="text-3xl font-bold mb-12 text-center">
					Meet the <u class="text-blue-600">team</u>
				</h2>

				<div class="grid md:grid-cols-3 gap-6 xl:gap-x-12">
					<TeamCard />

					<TeamCard />

					<TeamCard />
				</div>
			</section>
			<!-- Section: Design Block -->
		</div>
		<!-- Container for demo purpose -->

		<div class="grid md:grid-cols-3 gap-6 xl:gap-x-12">
			<Card param={param1} />

			<Card param={param2} />
		</div>

		<br />

		<!-- <p class="break-all">
Integer vel malesuada ex. ibus mauris. Nulla id posuere augue. Cras mattis nec lorem et auctor.
          </p> -->

		<!-- <div class="grid grid-cols-2 gap-4">
            <div>01</div>
            <div>02</div>
            <div class="col-span-2">03</div>
          </div> -->
	</main>
	<aside>
		<div class="mr-3 bg-white px-5 py-4 lg:w-80 xl:w-80 2xl:w80 h-full">
			<div class="tabs">
				<a class="tab tab-bordered">Prop</a>
				<a class="tab tab-bordered tab-active">Prop 2</a>
				<a class="tab tab-bordered">Prop 3</a>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lectus imperdiet,
				hendrerit nisi id, lacinia arcu. Sed molestie tellus tellus, scelerisque ornare nisl sodales
				vitae. Sed vulputate est viverra congue vulputate.
			</p>
		</div>
	</aside>
</div>

<footer>
	<div class="grid justify-end mt-auto p-6 bg-slate-50 dark:bg-slate-600">
		<div class="text-sm">Copyright© 2020 - 2023 All rights reserved.</div>
		<!-- <div class="flex-1">
          <h1 class="text-2xl">Footer</h1>
        </div>
         -->
	</div>
</footer>
