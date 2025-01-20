<script lang="ts">
	import works_audo from '$lib/res/works_audo.png'
	import au_hero from '$lib/res/au_hero.png'
	import ProjectTemplate from '$lib/view/template/ProjectTemplate.svelte'
</script> 

<ProjectTemplate
	logo={works_audo}

	name="audo"
	desc="reimagining '90s &quot;tracker&quot; music creation for iPhone."
	tools="Xcode, Swift, UIKit, Affinity Designer, Figma"
	icon="🎹"

	tags={['ui & ux', 'app dev']}
	linkText="github"
	linkHref="https://github.com/jakedel/Audo"
	date="2017 - 18"
>
	<section>
		<p>🏆 Apple WWDC 2018 Scholarships winning entry</p>
		<p style:margin-top="-10px" style:opacity="0.5"><small>300 app demos were selected from 10,000+ submissions</small></p>
	</section>
	<img class="bg" src={au_hero} alt="" />

	<section>
		<p>In the 1990s, before music production apps standardized on the "piano roll" &mdash; a grid of colored rectangles which represent notes &mdash; another unique interface for writing music called the "tracker" used to be common. Trackers felt more akin to a spreadsheet, with numbered cells and lots of text.</p>

		<p>Although it's easy to dismiss early trackers as historical artifacts, with their rigid interfaces and primitive visuals, there are some workflows in music creation where trackers can be highly fluid and efficient!</p>



		<h2>Why build a tracker for iOS?</h2>

		<p>In "tracker" apps, each instrument neatly fits side-by-side in compact columns. The advantage to this layout is that all instruments can be edited and visualized on one screen &mdash; providing immediate context on how sounds might interact or sync up!</p>
		
		<p>This is in contrast to conventional "piano roll" apps, where instruments typically have to be edited one-at-a-time in large, isolated windows.</p>

		<p>This got me thinking, although the design of '90s trackers was a necessity due to low graphics resolution and lack of mouse input... what if their space-efficient interfaces had an entirely new benefit in the smartphone era?</p>

		<p>A more "bird's-eye view" way to precisely edit a song sounds enticing on a phone, where screen space is limited &mdash; especially so when many iOS music apps feel like an exercise in patience, tiring out my thumbs by poking around on a tiny piano roll that barely fits two octaves (and frequently tapping the wrong note!)</p>

		<p>That's why I designed and developed audo: a proof-of-concept tracker for iPhone.</p>



		<h2>Simply designed for touch</h2>

		<p>Prior to audo, a few mobile trackers existed, but they felt like scaled-down desktop ports &mdash; resulting in convoluted control schemes and cluttered menus.</p>
		
		<p>audo is exclusively designed around the touchscreen and prioritizes simplification in all aspects of the UX.</p>

		<p>With each iteration, I challeneged myself to simplify and reduce the number of onscreen elements even further &mdash; while at the same time, maintaining the same amount of functionality and user efficiency.</p>
	</section>
</ProjectTemplate>
