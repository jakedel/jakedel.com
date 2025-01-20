<script lang="ts">
  import { base } from '$app/paths'

	import tc_uprising from '$lib/res/tc_uprising.png'
	import SongTemplate from '$lib/view/template/SongTemplate.svelte'
</script>

<SongTemplate
	title="THE UPRISING"
	date="2020 • Unreleased."
	img={tc_uprising}
>
	<div>
		<h2>Cover art design</h2>
		<p>Jake Delgado</p>
	</div>

	<div>
		<h2>Tools</h2>
		<p>Figma / Procreate (artwork)</p>
	</div>

	<div>
		<h2>Song status</h2>
		<p>Unreleased</p>
	</div>
</SongTemplate>
