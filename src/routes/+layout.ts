import { browser, dev } from '$app/environment';
import posthog from 'posthog-js';

export const load = async () => {
	if (browser && !dev) {
		posthog.init('phc_yVKdkuhFl3UwKvoyYr2GIp2Nx1vNnTIzRer9ZCV3teV', {
			api_host: 'https://us.i.posthog.com',
			defaults: '2025-05-24',
        	person_profiles: 'always',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};

export const prerender = true;
