<script lang="ts">
  import { base } from '$app/paths'

	import works_lastredux from '$lib/res/works_lastredux_hq.png'
	import Back from '$lib/view/Back.svelte'
	import ProjectTemplate from '$lib/view/template/ProjectTemplate.svelte'
	import lr_hero from '$lib/res/lr_hero.png'
	import lr_before_after from '$lib/res/lr_before_after.jpg'
	import lr_profile from '$lib/res/lr_profile.jpg'
	import lr_friends from '$lib/res/lr_friends.jpg'
</script>

<ProjectTemplate
	logo={works_lastredux}

	name="LastRedux"
	desc="open-source, redesigned Last.fm app for Apple Music."
	tools="Python, Qt 5, QML, Figma"
	icon="✨"

	tags={['ui & ux', 'app dev']}
	linkText="lastredux.app"
	linkHref="https://lastredux.app"
	date="2020 - 21"
>
	<img class="bg" src={lr_hero} alt="" />

	<section>
		<p>Last.fm is a social music service where you and your friends can compare statistics about which music you listen to. Spotify has had built-in integration with the service for years, but users of Apple Music have been underserved &mdash; Last.fm's official Mac app for Apple Music has not been updated since 2012!</p>

		<p>After using the original version, I didn't want to deal with its clunky layout, performance bugs, and blurry graphics any longer and decided to create a full redesign of the app.</p>
			
		<p>In addition, I developed a working beta version of the redesigned app (in collaboration with my good friend <a href="https://x.com/_kentw">@_kentw</a>)! Although I've since pivoted to future projects, the LastRedux beta is <a href="https://github.com/LastRedux/LastRedux">available and open-source on GitHub.</a></p>
	</section>

	<section>
		<h2>UI Redesign</h2>
	</section>

	<img src={lr_before_after} alt="" />

	<section>
		<p>Although the 2012-era design desperately needed a modern facelift, I understood that it still carried an inner spirit and essence that I wanted to respect.</p>
		
		<p>I noted everything that gave the original design its identity, such as the matte gradients, embossed icons, and distinct "Now Scrobbling" progress bar and ensured to maintain and embrace these motifs in LastRedux.</p>

		<p>However &mdash; despite my careful preservation of the original app's charm &mdash; my overarching goal remained to comprehensively redesign every detail of the UI to create something that feels right at home on a modern Mac. This includes the use of Apple SF Symbols, prominent imagery, blurred backgrounds, simplified onboarding, clean typography, and Retina display support. UI consistency was achieved through creating and maintaining a custom design system in Figma.</p>
	</section>

	<section>
		<h2>UX Improvements</h2>
		<p>Along with the UI overhaul, there were many UX challenges in the original app that I set out to solve in LastRedux.</p>
	</section>
	
	<section>
		<h3><span>⬦</span> Less unnecessary clicks, more at a glance.</h3>
		<p>I frequently used the Last.fm app to check stats on the song I'm listening to, or read info about the artist contributed by other Last.fm users. However, the old app  opened to a generic list of recently played songs, offering no additional details until individually clicking through each item.</p>

		<p>In LastRedux, this was solved by moving the Recents list to a sidebar, adding a central column that automatically loads info on what's playing. The sidebar always remains visible, enabling the user to quickly cycle between stats on previous tracks without clicking "back" each time. At all times, important info is easily visible at a glance.</p>
	</section>
			

	<section>
		<h3><span>⬦</span> Less scrolling, easier to share.</h3>

		<p>Part of the original app's clunky feel was the frequent scrolling to reach prior songs in history or check your profile, due to too much whitespace between each item. (It didn't help that a compatibility bug caused scrolling to lag on Retina displays!)</p>

		<p>Since the new central column in LastRedux showcases large album and artist images, the sidebar list no longer needs space to highlight these photos, allowing it to become more compact and information-dense. This has the side effect of making LastRedux feel more native to macOS design principles &mdash; and, even better, enabling users to easily fit their profile in a screenshot to share with friends!</p>

		<img src={lr_profile} alt="" />
	</section>

	<section>
		<h3><span>⬦</span> Making it more social.</h3>
		<p>The general theme was to make LastRedux feel social, rather than an isolated utility. This also resulted in an improved Friends tab which shows if a friend hearted the song they're currently listening to. And integration with Discord to show off your music taste in your chat status &mdash; a Discord feature that's typically built-in for Spotify users, but previously had been difficult for Apple Music users to join in on.</p>

		<img src={lr_friends} alt="" />
	</section>
</ProjectTemplate>
