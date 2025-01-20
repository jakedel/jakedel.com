<script lang="ts">
  import { base } from '$app/paths'

	import works_konpu from '$lib/res/works_konpu.png'
	import ks_hero from '$lib/res/ks_hero.png'
	import ks_compare from '$lib/res/ks_compare.jpg'
	import ProjectTemplate from "$lib/view/template/ProjectTemplate.svelte"
</script>

<ProjectTemplate
	logo={works_konpu}

	name="konpu-STUDIO"
	desc="custom-built sound synthesizer & music creation app."
	tools="C++, imgui, Figma"
	icon="🌸"

	tags={['ui & ux', 'app dev', 'brand/visual', 'music']}
	linkText="github"
	linkHref="https://github.com/jakedel/konpu-STUDIO"
	date="2022"
>
	<img class="bg" src={ks_hero} alt="" />

	<section>
		<p>konpu-STUDIO is a simple yet elegant music creation app I designed and dev zeloped in one month, including a custom sound synthesizer written in C++.</p>

		<p>Built as a contribution to my college — UC Santa Barbara — the goal was to help solve a UX challenge at the university's Allosphere Research Facility.</p>
	</section>

	<section>
		<h2>What's the Allosphere?</h2>

		<p>UC Santa Barbara's <a href="https://www.youtube.com/watch?v=u-D-zEToJQ4">Allosphere</a> facility is a 3-story-tall, spherical environment filled with massive 3D projector screens and 360º audio.</p>

		<p>The Allosphere is intended to bridge the gap between art and science. If artists can imagine new ways to visualize data — scientists can see, hear, and interact with research from a new perspective.</p>
	</section>

	<section>
		<h2>Problem — artists can't contribute?</h2>

		<p>Yet, <b>the university struggles to get artists involved</b> at the facility — because creating dynamic audio and visuals for the Allosphere requires learning its complicated programming toolkit.</p>

		<p>Many artists and musicians lack the technical knowledge to contribute, limiting collaboration and stalling innovation.</p>

		<p>In the case of audio, the few interfaces the toolkit currently provides for creating dynamic audio are rudimentary, limited, and not intuitive for a musician.</p>
	</section>


	<section>
		<h2>Solution</h2>
		</section>
	<img src={ks_compare} alt="" />

		<section>

		<p>Unlike the original toolkit, konpu-STUDIO works and looks just like a music production app. Yet, it's built on top of (and compatible with) the same audio engine that powers Allosphere.</p>

		<p>Now, musicians can focus on composing instead of coding, and can easily export any sounds they create into data for Allosphere apps.</p>

		<p>I also built a custom synthesizer that plays back sampled PCM audio — which the Allosphere sound engine did not provide before. This enables musicians to compose with familliar instruments like pianos and guitars, in addition to any existing synthesizers others have developed for the framework.</p>
	</section>

	<section>
		<h2>Demo</h2>
	</section>

	<section>
		<p>To demonstrate konpu-STUDIO's custom sampler synth, I have composed a "somewhat strange..." lo-fi synthpop track, inspired by the history of PCM synthesizers and obscure sound chips. Check it out:</p>

		<div style:display="flex" style:justify-content="center">
		<iframe width="640" height="400" src="https://www.youtube-nocookie.com/embed/9E5Ht68v2qE?si=lRYisxJ5w76-BKOZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		</div>
	</section>
</ProjectTemplate>
