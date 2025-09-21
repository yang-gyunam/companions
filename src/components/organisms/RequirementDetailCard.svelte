<script lang="ts">
</script>

<!-- contents -->
<div class="flex flex-col flex-grow requirement-detail-card">
	<div class=" pt-3 pb-4 px-4 flex flex-col rounded bg-white dark:bg-base-100 drop-shadow-sm">
		<!-- title -->
		<div class=" flex flex-row items-center">
			<div class="justify-start">
				It was popularised in the 1960s with the release of Letraset
				<!-- <div class="badge badge-secondary badge-xs ml-1"></div> -->
			</div>
			<div
				class="shrink-0 ml-2 w-4 h-4 custom-text-3xs rounded-full text-center text-gray-50 bg-pink-500 inline"
			>
				E
			</div>
			<div class="grow" />
			<div class="justify-end">
				<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg> -->
				<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> -->
			</div>
		</div>

		<!-- owner -->
		<!-- <div class="flex flex-row items-center justify-end text-sm italic">
      <div class="flex flex-col">
        <div class="flex flex-row justify-end">
          <div class="rounded w-5">
            <img class="mask mask-circle m-0" src={avarta01} alt=""/>
          </div>
          <div class="ml-2 text-sm">Gyunam Yang</div>
        </div>
        <div class="mt-1 text-sm text-end text-gray-400 items-end">2023-04-14 17:21</div>
      </div>
    </div> -->
		<div class="flex flex-row items-center my-3 px-1 text-sm text-gray-400">
			<div class="rounded w-5">
				<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
			</div>
			<div class="ml-2 text-xs">Gyunam Yang</div>
			<div class="ml-2">|</div>
			<div class="ml-2 text-xs tracking-wide">4/14/2023 17:21</div>
			<div class="grow" />
		</div>

		<div class="divide-y">
			<!-- section A-->
			<div class="flex flex-col mt-2 p-4">
				<div class="label-text font-medium">Standard</div>
				<div class="grid grid-cols-3 gap-2 mt-2">
					<div class="form-control">
						<label for="prop-a-required" class="label">
							<span class="label-text text-xs font-medium text-gray-500">
								Prop A
								<span class="text-pink-500" aria-label="required">*</span>
							</span>
						</label>
						<input
							id="prop-a-required"
							type="text"
							placeholder="Click to add text"
							aria-label="Prop A (required)"
							aria-required="true"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A3</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label justify-start">
							<span class="label-text text-xs font-medium text-gray-500 mr-1"> Prop A </span>
							<div class="tooltip tooltip-right" data-tip="hover me">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-3.5 h-3.5 stroke-blue-500"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
									/>
								</svg>
							</div>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop multi</span>
						</label>
						<textarea
							placeholder="Click to add text"
							class="textarea textarea-sm textarea-warning border-0 focus:outline-1 textarea-ghost placeholder:italic placeholder:text-gray-300 placeholder:text-xs h-24"
						/>
						<div class="flex justify-end custom-text-3xs">0 / 100</div>
					</div>
				</div>
			</div>

			<!-- section B-->
			<div class="flex flex-col mt-2 p-4">
				<div class="label-text font-medium">
					<div class="flex items-center">
						<div class="mr-1">Details</div>
						<div class="tooltip tooltip-right items-center" data-tip="hover me">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4 stroke-blue-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-2 mt-2">
					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>
				</div>
			</div>

			<!-- section C-->
			<div class="flex flex-col mt-2 p-4">
				<div class="label-text font-medium">Description</div>
				<div class="grid grid-cols-3 gap-2 mt-2">
					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
