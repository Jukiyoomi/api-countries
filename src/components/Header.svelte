<script>
	const toggleColor = () => {
		let container = document.querySelector('.container');
		container.classList.toggle('dark');
	};
</script>

<header>
	<h1 class="title">Where in the world?</h1>

	<button on:click={toggleColor}>
		<ion-icon name="moon-outline" />
		<span>Dark Mode</span>
	</button>
</header>
