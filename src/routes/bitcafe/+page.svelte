<script lang="ts">
	import works_bitcafe from '$lib/res/works_bitcafe.png'
	import ProjectTemplate from "$lib/view/template/ProjectTemplate.svelte"
</script>

<ProjectTemplate
	logo={works_bitcafe}

	name="bitcafé"
	desc="hyper-expressive social media app for Gen Z."
	tools="TypeScript, Svelte, React, HTML5, Kotlin, Ktor, Figma, After Effects"
	icon="💫"

	tags={['ui & ux', 'app dev', 'brand/visual']}
	linkText="bitcafe.me"
	linkHref="https://bitcafe.me"
	date="2021"
>
	<span slot="dateExtra" class="stylish"> - present</span>
</ProjectTemplate>
