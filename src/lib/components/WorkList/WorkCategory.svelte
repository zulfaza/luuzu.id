<script>
	/**
	 * @type {import('./type').WorkCategoryType}
	 */
	export let category;
</script>

<div
	style={`border-color : ${category.border}; background : ${category.background}`}
	class="text-sm px-4 rounded-full border opacity-80 hover:opacity-100 transition-opacity"
>
	{category.name}
</div>
