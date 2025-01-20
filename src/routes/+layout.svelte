<script lang="ts">
  import { base } from '$app/paths'

	import '$lib/css/index.scss'
	import 'svelte-ripple-action/ripple.css'
	import {afterNavigate,onNavigate} from '$app/navigation'
	import {page} from '$app/stores'
	import Nav from '$lib/view/Nav.svelte'
	import Hero from '$lib/view/Hero.svelte'
	import EmailBlock from '$lib/view/EmailBlock.svelte'
	import Footer from '$lib/view/Footer.svelte'

	// let animatingOut = 0
	// onNavigate(async ({to}) => {
	// 	animatingOut = -1

	// 	setTimeout(() => {
	// 		if (animatingOut === -1) animatingOut = 1
	// 	}, 300)

	// 	return new Promise(
	// 		(res) => setTimeout(res, 700)
	// 	)
	// })

	// afterNavigate(async () => {
	// 	animatingOut = 0
	// })

	$: onRoot = $page.url.pathname === '/' 
	$: onTest = $page.url.pathname === '/test'
	export const prerender = true 
</script>

{#if !onTest}
	<Nav animated={onRoot} white={!onRoot} hasEmail={!onRoot} />
	{#if onRoot}
		<Hero />
	{/if}
{/if}
<main>
	<slot/>
</main>
{#if !onTest}
	<EmailBlock />
	<Footer />
{/if}
