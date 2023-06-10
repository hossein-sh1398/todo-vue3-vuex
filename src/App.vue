<template>
	<HeaderComponent></HeaderComponent>
	<div class=" container mt-3">
		<div class="row">
			<div class="col-md-12">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderComponent from './components/header.vue'

export default {
	setup() {

	},
	components: {
		HeaderComponent,
	}

}
</script>

<style scoped>
* {
	font-family: 'vazir';
}

.router-link-active {
	color: brown;
}

.router-link-exact-active {
	background: #000;
}
</style>
