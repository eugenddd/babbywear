<template>
	<div>
		<el-tiptap v-model="content" :extensions="extensions" />
		{{ showData }}
	</div>
</template>

<script>
export default {
	data() {
		// editor extensions
		// they will be added to menubar and bubble menu by the order you declare.
		return {
			// editor's content
			content: `
        <h1>Heading</h1>
        <p>This Listings Editor is awesome!</p>
      `,
		};
	},
	computed: {
		showData() {
			console.log(this.content);
		},
	},
};
</script>
