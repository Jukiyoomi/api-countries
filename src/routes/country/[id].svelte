<script>
	import { page } from '$app/stores';
	import { init } from '../../js/index.js';
	import Loader from '../../components/Loader.svelte';
	import Header from '../../components/Header.svelte';

	let country;

	init((result) => {
		country = result[$page.params.id];
		console.log(country);
	});
</script>

<Header />
<a href="/" class="back">
	<ion-icon name="arrow-back-outline" />
	<span>Back</span>
</a>
{#if !country}
	<Loader />
{:else}
	<div class="container_detail">
		<img src={country.img} alt={`Flag of ${country.name}`} />
		<div class="content">
			<h1>{country.name}</h1>
			<div class="sides">
				<div class="left">
					<ul>
						<li><span>Native Name: </span>{country.nativeName}</li>
						<li><span>Population: </span>{country.population.toLocaleString('en')}</li>
						<li><span>Subregion: </span>{country.subregion}</li>
						<li><span>Region: </span>{country.region}</li>
						{#if country.capital}
							<li><span>Capital: </span>{country.capital[0]}</li>
						{:else}
							<li>No capital</li>
						{/if}
					</ul>
				</div>
				<div class="right">
					<ul>
						<li><span>Top Level Domain: </span>{country.topLevelDomain}</li>
						<li><span>Currencies: </span>{country.currencies.name}</li>
						<li>
							<span>languages: </span>
							{#each Object.values(country.speaks) as sp}
								{sp}, <span />
							{/each}
						</li>
					</ul>
				</div>
			</div>
			<div class="boundaries">
				<span>Border Countries: </span>
				{#each country.neighbors as neighbor}
					<div>{neighbor}</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
