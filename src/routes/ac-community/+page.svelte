<script lang="ts">
	import works_ac from '$lib/res/works_ac.png'
	import ac_hero from '$lib/res/ac_hero.jpg'
	import ac_promo from '$lib/res/ac_promo.png'
	import ac_logo from '$lib/res/ac_logo.jpg'
	import it_ac from '$lib/res/it_ac.jpg'
	import ProjectTemplate from '$lib/view/template/ProjectTemplate.svelte'
</script>

<ProjectTemplate
	logo={works_ac}

	name="AC Community"
	desc="event branding for an online music collective."
	tools="Figma, Pixelmator Pro"
	icon="❄️"

	tags={['brand & visual']}
	date="2023"
>
	<img class="bg" src={ac_hero} alt="" />

	<section>
		<h2>Promotional flyers</h2>
	</section>

	<img src={ac_promo} alt="" />

	<section>
		<h2>Stylized logo for event</h2>
		<img src={ac_logo} alt="" />
	</section>

	<section>
		<h2>Photo editing: before & after</h2>
	</section>

	<img src={it_ac} alt="" />

	<section>
		<p><small>(Original photos provided to me by event team)</small></p>
	</section>
</ProjectTemplate>

<style lang="scss">
	.bg {
		padding-top: 25px;
		padding-bottom: 25px;
	}
</style>
