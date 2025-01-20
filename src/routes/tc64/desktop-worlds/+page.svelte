<script lang="ts">
  import { base } from '$app/paths'

	import tc_plastic from '$lib/res/tc_plastic.png'
	import tc_port from '$lib/res/tc_port.png'
	import SongTemplate from '$lib/view/template/SongTemplate.svelte'
</script>

<SongTemplate
	title="PLASTIC ZEST + &quot;DESKTOP WORLDS&quot;"
	date="2023.09"
>
	<div>
		<h2>Music production, design & video editing</h2>
		<p>Jake Delgado</p>
	</div>

	<div>
		<h2>Tools</h2>
		<p>Auxy Studio, Figma (artwork), Hype 4 (animation)</p>
	</div>

	<svelte:fragment slot="images">
	<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/UJDl4YZ3Htw?si=Hr2fKilEgbiAmlYB&start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={tc_plastic} />
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={tc_port} />
	</svelte:fragment>
</SongTemplate>

<style lang="scss">
	.video {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
	}
</style>
