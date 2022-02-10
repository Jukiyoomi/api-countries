<script>
	const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
	const toggleFilter = () => {
		document.querySelector('.choices').classList.toggle('disappear');
	};

	export const selectedRegion = '';
	export let getRegion;
	export let searchCount;
</script>

<div class="container_form">
	<span>
		<ion-icon name="search-outline" />
		<input type="text" placeholder="Search for a country..." on:input={(e) => searchCount(e)} />
	</span>

	<div class="dropdown">
		<button on:click={toggleFilter}>
			Filter By Region
			<ion-icon name="chevron-down-outline" />
		</button>

		<div class="choices disappear">
			{#each regions as region}
				<p
					on:click={() => {
						getRegion(region);
						toggleFilter();
					}}
				>
					{region}
				</p>
			{/each}
		</div>
	</div>
</div>
