<script>
	import '../global.css';
</script>


<div class="layout">
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