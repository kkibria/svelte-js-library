<script>
	import test from "./gen/test.js"
	let name = test.getName();
	let location = test.getLocation();
	let dob = test.dob;

	test.injectInClass('.inject-dev');

	let container;
	$:test.injectInElement(container);
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Location: {location}, dob: {dob}</p>
	<div class="inject-dev"></div>
	<div bind:this={container}></div>
</main>
