<template>
	<div style="display:flex; height:32px;">
		<div class="image-container">
			<img :src="source" style="width: 100%; height: 100%;">
		</div>
		<p style="margin-left:4px;"><a href="">{{title}}</a>: {{text}}</p>
	</div>
</template>

<style scoped>
.image-container {
	width: 16px;
	height: 16px;
	line-height: 60px;
}
</style>

<script>
export default {
	data () {
		return {
			source: []
		}
	},
	props: ['node', 'text', 'title'],
	beforeMount() {
	fetch('https://api.n8n.io/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: `
					query GetNode{
						nodes (where: {name:"${this.node}"}){
							iconData
						}
					}
				`
			})
		})
		.then(response => response.json())
		.then(res => {
			this.$data.source = res.data.nodes[0].iconData.fileBuffer;
		})
		.catch(error => console.log(error))
  }
}
</script>