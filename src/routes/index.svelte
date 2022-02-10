<script>
	import { init } from '../js/index.js';
	import Loader from '../components/Loader.svelte';
	import Header from '../components/Header.svelte';
	import Form from '../components/Form.svelte';
	import CardList from '../components/CardList.svelte';

	let countries;
	let region = 'All';
	let specificCountry = '';

	const searchCount = (e) => {
		specificCountry = e.target.value;
	};

	const getRegion = (params) => {
		region = params;
		console.log(region);
	};

	init((result) => {
		countries = result;
	});
</script>

<Header />

{#if !countries}
	<Loader />
{:else}
	<Form {getRegion} {searchCount} />
	<CardList {countries} {region} {specificCountry} />
{/if}
