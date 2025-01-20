<script lang="ts">
  import { base } from '$app/paths'

	import SongTemplate from "$lib/view/template/SongTemplate.svelte"
	import soso_scs from '$lib/res/soso_scs.jpg'
	import soso_scs_2 from '$lib/res/soso_scs_2.jpg'
</script>

<SongTemplate
	title="SHOWCASE SHOW FLYER"
	subtitle="UCSB Sound Society"
	date="2022.02"
	img={soso_scs_2}
	source="sound society"
	sourceUrl="{base}/ucsb-sound-society"
	center
>
	<svelte:fragment slot="images">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={soso_scs} />
	</svelte:fragment>
</SongTemplate>
