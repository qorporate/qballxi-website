import { browser, dev } from '$app/environment';
import posthog from 'posthog-js';
import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';

export const load = async () => {
	if (browser && !dev) {
		posthog.init(PUBLIC_POSTHOG_API_KEY, {
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
