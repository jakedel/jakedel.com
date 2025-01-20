<script lang="ts">
	import SongTemplate from "$lib/view/template/SongTemplate.svelte"
	import soso_logo from '$lib/res/soso_logo.jpg'
	import soso_logo_irl from '$lib/res/soso_logo_irl.jpg'
	import it_soso_logo from '$lib/res/it_soso_logo.jpg'
</script>

<SongTemplate
	title="LOGO DESIGN"
	subtitle="UCSB Sound Society"
	date="2022.02"
	img={soso_logo}
	source="sound society"
	sourceUrl="/ucsb-sound-society"
	center
>
	<svelte:fragment slot="images">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={soso_logo_irl} />
	</svelte:fragment>

	<svelte:fragment slot="gallery">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={it_soso_logo} width={785} />
	</svelte:fragment>
</SongTemplate>
