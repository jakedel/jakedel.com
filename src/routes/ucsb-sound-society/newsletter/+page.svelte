<script lang="ts">
	import SongTemplate from "$lib/view/template/SongTemplate.svelte"
	import soso_news from '$lib/res/soso_news.png'
	import soso_news_2 from '$lib/res/soso_news_2.png'
	import soso_news_3 from '$lib/res/soso_news_3.png'
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<SongTemplate
	title="NEWSLETTER DESIGN"
	subtitle="UCSB Sound Society"
	date="2022.03"
	img={soso_news}
	source="sound society"
	sourceUrl="/ucsb-sound-society"
	center
>
	<svelte:fragment slot="images">
		<img src={soso_news_2} />
		<img src={soso_news_3} />

		<p>Newsletter design by Jake Delgado — character illustration by <a href="https://www.instagram.com/siliooo_/">@siliooo_</a></p>
	</svelte:fragment>
</SongTemplate>
