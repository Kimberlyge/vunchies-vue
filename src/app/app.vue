<script src="./app.js"></script>
<style src="./app.css"></style>

<template>
	<div>
		<site-header />
		<transition v-on:enter="enterSection" v-on:leave="leaveSection" appear>
	  	<router-view />
		</transition>
	  <site-footer />
	</div>
</template>
