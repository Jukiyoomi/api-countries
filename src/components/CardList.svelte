<script>
	import Card from './Card.svelte';
	export let countries;
	export let region;
	export let specificCountry;
</script>

<div class="container_card">
	{#if region == 'All'}
		{#each countries as country (country.id)}
			{#if country.name.toLowerCase().includes(specificCountry)}
				<Card {country} />
			{/if}
		{/each}
	{:else}
		{#each countries as country (country.id)}
			{#if country.region.includes(region)}
				{#if country.name.toLowerCase().includes(specificCountry)}
					<Card {country} />
				{/if}
			{/if}
		{/each}
	{/if}
</div>
