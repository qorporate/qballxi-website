<script lang="ts">
	interface Props {
		imageSrc: string;
		title: string;
		description: string;
		href: string;
	}

	const { imageSrc, title, description, href }: Props = $props();
</script>
