<script>
	import { onMount } from 'svelte';
	import test from "./gen/test.js"

	let name = test.getName();
	let location = test.getLocation();
	let dob = test.dob;

	test.injectEl();
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Location: {location}, dob: {dob}</p>
	<div class="inject-dev"></div>
</main>
