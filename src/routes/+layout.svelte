<script>
	import Header from '$lib/components/Header.svelte';
import '../global.css';
</script>


<div class="layout">
	<Header />
	<div class="main">
		<slot />
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>