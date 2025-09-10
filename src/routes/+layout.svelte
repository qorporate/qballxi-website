<script lang="ts">
	import '../app.css';
	import qball_favicon from '$lib/assets/logos/qball-favicon-192x192.png';
	import { page } from '$app/state';
	import { COMPANY_NAME, QBALL_LOGO } from '$lib/constants';
	import posthog from 'posthog-js';
	import { browser, dev } from '$app/environment';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	const DESCRIPTION = `${COMPANY_NAME} - Dare To Dream`;
	const SITE_URL = `${page.url.href}`;

	if (browser && !dev) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={qball_favicon} />
	<meta name="description" content={DESCRIPTION} />

	<!-- Open Graph  -->
	<meta property="og:title" content={COMPANY_NAME} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={QBALL_LOGO} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={SITE_URL} />
	<meta name="twitter:title" content={COMPANY_NAME} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta name="twitter:image" content={QBALL_LOGO} />

	<title>{COMPANY_NAME}</title>
</svelte:head>

{@render children?.()}
