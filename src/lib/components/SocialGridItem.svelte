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
		<img class="size-5 sm:size-9" src={icon} alt={title} />
	</div>

	<div>
		<h1 class="text-xl sm:text-2xl font-bold">{title}</h1>
		{#if description}
			<p class="font-semibold text-qset-subtitle">{description}</p>
		{/if}
		<a class="text-sm sm:text-base font-bold text-qset-green underline" target="_blank" href={link}>{linkText}</a>
	</div>
</div>
