<script lang="ts">
</script>

<!-- contents -->
<div class="flex flex-col flex-grow requirement-detail-card">
	<div class=" pt-3 pb-4 px-4 flex flex-col rounded bg-white dark:bg-base-100 drop-shadow-sm">
		<!-- title -->
		<div class=" flex flex-row items-center">
			<div class="justify-start">
				It was popularised in the 1960s with the release of Letraset
			</div>
			<div
				class="shrink-0 ml-2 w-4 h-4 custom-text-3xs rounded-full text-center text-gray-50 bg-pink-500 inline"
				role="status"
				aria-label="Epic"
			>
				E
			</div>
			<div class="grow" />
			<div class="justify-end">
			</div>
		</div>

		<!-- owner -->
		<div class="flex flex-row items-center my-3 px-1 text-sm text-gray-400">
			<div class="rounded w-5">
				<svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 616 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
			</div>
			<div class="ml-2 text-xs">Gyunam Yang</div>
			<div class="ml-2" aria-hidden="true">|</div>
			<div class="ml-2 text-xs tracking-wide">
				<time datetime="2023-04-14T17:21">4/14/2023 17:21</time>
			</div>
			<div class="grow" />
		</div>

		<div class="divide-y">
			<!-- section A-->
			<div class="flex flex-col mt-2 p-4">
				<h3 class="label-text font-medium">Standard</h3>
				<div class="grid grid-cols-3 gap-2 mt-2">
					<div class="form-control">
						<label for="standard-prop-a" class="label">
							<span class="label-text text-xs font-medium text-gray-500">
								Prop A
								<span class="text-pink-500" aria-label="required">*</span>
							</span>
						</label>
						<input
							id="standard-prop-a"
							type="text"
							placeholder="Click to add text"
							aria-required="true"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="standard-prop-a3" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A3</span>
						</label>
						<input
							id="standard-prop-a3"
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="standard-prop-a2" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="standard-prop-a2"
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="standard-prop-tooltip" class="label justify-start">
							<span class="label-text text-xs font-medium text-gray-500 mr-1"> Prop A </span>
							<div class="tooltip tooltip-right" data-tip="hover me" role="tooltip">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-3.5 h-3.5 stroke-blue-500"
									aria-hidden="true"
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
							id="standard-prop-tooltip"
							type="text"
							placeholder="Click to add text"
							aria-describedby="prop-tooltip-help"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
						<span id="prop-tooltip-help" class="sr-only">Additional help available on hover</span>
					</div>

					<div class="form-control">
						<label for="standard-prop-a4" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="standard-prop-a4"
							type="text"
							placeholder="Click to add text"
							class="input input-sm input-warning border-0 focus:outline-1 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="standard-prop-multi" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop multi</span>
						</label>
						<textarea
							id="standard-prop-multi"
							placeholder="Click to add text"
							maxlength="100"
							aria-describedby="char-count"
							class="textarea textarea-sm textarea-warning border-0 focus:outline-1 textarea-ghost placeholder:italic placeholder:text-gray-300 placeholder:text-xs h-24"
						/>
						<div id="char-count" class="flex justify-end custom-text-3xs" aria-live="polite">0 / 100</div>
					</div>
				</div>
			</div>

			<!-- section B-->
			<div class="flex flex-col mt-2 p-4">
				<h3 class="label-text font-medium">
					<div class="flex items-center">
						<div class="mr-1">Details</div>
						<div class="tooltip tooltip-right items-center" data-tip="hover me" role="tooltip">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4 stroke-blue-500"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
								/>
							</svg>
						</div>
					</div>
				</h3>
				<div class="grid grid-cols-2 gap-2 mt-2">
					<div class="form-control">
						<label for="details-prop-a1" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="details-prop-a1"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="details-prop-a2" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="details-prop-a2"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="details-prop-a3" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="details-prop-a3"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="details-prop-a4" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="details-prop-a4"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="details-prop-a5" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="details-prop-a5"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>
				</div>
			</div>

			<!-- section C-->
			<div class="flex flex-col mt-2 p-4">
				<h3 class="label-text font-medium">Description</h3>
				<div class="grid grid-cols-3 gap-2 mt-2">
					<div class="form-control">
						<label for="desc-prop-a1" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="desc-prop-a1"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="desc-prop-a2" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="desc-prop-a2"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="desc-prop-a3" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="desc-prop-a3"
							type="text"
							placeholder="Click to add text"
							class="input input-sm border ring-0 w-full max-w placeholder:italic placeholder:text-gray-300 placeholder:text-xs"
						/>
					</div>

					<div class="form-control">
						<label for="desc-prop-a4" class="label">
							<span class="label-text text-xs font-medium text-gray-500">Prop A</span>
						</label>
						<input
							id="desc-prop-a4"
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