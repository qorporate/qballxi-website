<script lang="ts">
	interface Props {
		title: string;
		description?: string;
		icon: string;
		link: string;
		linkText: string;
	}

	const { title, description, icon, link, linkText }: Props = $props();
</script>

<div class="flex flex-col gap-2 px-7">
	<div class="w-fit rounded-2xl border-1 border-qset-bg-gray bg-white p-4">
		<img class="size-9" src={icon} alt={title} />
	</div>

	<div>
		<p class="text-2xl font-bold">{title}</p>
		{#if description}
			<p class="font-semibold text-qset-subtitle">{description}</p>
		{/if}
		<a class="font-bold text-qset-green underline" href={link}>{linkText}</a>
	</div>
</div>
