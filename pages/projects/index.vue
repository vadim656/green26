<template>
	<div>projects</div>
</template>

<script>
	export default {
	    validate({ route }) {
	        return !(route.name === 'projects');
	    },
	}
</script>