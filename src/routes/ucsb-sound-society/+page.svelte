<script lang="ts">
	import works_soundsociety from '$lib/res/works_soundsociety_hq.png'
	import ProjectTemplate from "$lib/view/template/ProjectTemplate.svelte"
	import Gallery from './Gallery.svelte'
</script>

<ProjectTemplate
	logo={works_soundsociety}
	name="UCSB Sound Society"
	tools="Figma"
	desc="brand & design for student music production club."
	icon="💿"

	tags={['brand & visual']}
	date="2022"
>
	<Gallery />
</ProjectTemplate>
