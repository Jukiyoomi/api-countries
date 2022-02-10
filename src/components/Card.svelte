<script>
	export let country;
</script>

<div class="card">
	<img src={country.img} alt="Country Flag" />
	<!-- {JSON.stringify(country.img)} -->
	<div class="card_info">
		<a href={`/country/${country.id}`}>
			<h2 class="name">{country.name}</h2>
		</a>
		<ul>
			<li><span>Population: </span>{country.population.toLocaleString('en')}</li>
			<li><span>Region: </span>{country.region}</li>
			{#if country.capital}
				<li><span>Capital: </span>{country.capital[0]}</li>
			{:else}
				<li>No capital</li>
			{/if}
		</ul>
	</div>
</div>
