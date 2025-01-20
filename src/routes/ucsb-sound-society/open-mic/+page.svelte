<script lang="ts">
  import { base } from '$app/paths'

	import SongTemplate from "$lib/view/template/SongTemplate.svelte"
	import soso_openmic from '$lib/res/soso_openmic.jpg'
	import it_soso_openmic from '$lib/res/it_soso_openmic.jpg'
</script>

<SongTemplate
	title="OPEN MIC POSTER"
	subtitle="UCSB Sound Society"
	date="2022.02"
	img={soso_openmic}
	source="sound society"
	sourceUrl="{base}/ucsb-sound-society"
	center
>
	<svelte:fragment slot="images">
		<p>Poster design by Jake Delgado — character illustration by <a href="https://www.instagram.com/siliooo_/">@siliooo_</a></p>
	</svelte:fragment>
	
	<svelte:fragment slot="gallery">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={it_soso_openmic} width={904} />
	</svelte:fragment>
</SongTemplate>
