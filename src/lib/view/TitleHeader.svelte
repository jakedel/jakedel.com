<script lang="ts">
	import Title from "./Title.svelte"

	export let tangram = false;
	export let icon: string|null = null;
	export let alt = false;
	export let pad = false;
</script>

<header class:tangram>
	<div class="wrapper" class:pad>
		<Title {icon} {alt}><slot /></Title>
		<div class="sensory_blooomss" />
	</div>
</header>


<style lang="scss">
	.wrapper {
		@include wrapper;
	}
	.wrapper.pad {
		@include wrapper-pad;
	}
	header {
		position: relative;
		background-color: #FFF;
		// background-image: linear-gradient(#0088AA11, #0088AA00);
		background-size: 100% 8px, 100% 100%; 
		background-repeat: no-repeat;
		overflow: hidden;
	}
	header.tangram {
		background-color: #FFF;
		background-image: url('$lib/res/tangram_below.png'), linear-gradient(#0088AA11, #0088AA00), linear-gradient(#25C5DA1A, #25C5DA00);
		background-size: 80px 80px, 100% 8px, 100% 100%; 
		background-position: top right, top left, top left;
	}
	header .wrapper {
		position: relative;
		display: flex;
		align-items: center;
		height: 153px;
	}
	.sensory_blooomss {
		position: absolute;
		top: -20px;
		// left: -417px;
		left: -393px;
		width: 624px;
		height: 164px;
		background-image: url('$lib/res/gauzy_blooms.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		mix-blend-mode: hue;
		opacity: 0.9;
		pointer-events: none;
	}
</style>
