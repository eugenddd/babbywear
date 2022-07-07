<template>
	<div class="thank-your-page">
		<div class="image-message">
			<img
				src="https://www.agcex.org/extremadura-escena/wp-content/uploads/sites/2/2019/11/cita-aceptada.png"
				alt=""
			/>
			<h4>{{ $t("thanks.msg") }}</h4>
			<div class="user-thankfully" style="font-size:.9em;">
				<h7>You will receive order confirmation in your email!</h7>
			</div>

			<div class="help-links" style="padding:2.5em;">
				<div style="font-size:.72em; font-weight:600;">
					Update your order before we ship the item!
				</div>
				<div class="links">
					<a href="">{{ $t("thanks.change") }}</a>
					<a href="">{{ $t("thanks.track") }}</a>
					<a href="">{{ $t("thanks.cancel") }}</a>
				</div>
			</div>
		</div>
		<!-- <div class="sumarry-order">
      <span
        >Total you paid
        <h5>$21.00</h5></span
      >
      <span
        >Estimate delivery date
        <h5>21 Nov - 24 Nov 2020</h5></span
      >
    </div> -->
		<div class="thank-you-footer">
			Global Express Shop 2021
			<!-- <span>A Nuxtjs Project</span> -->
		</div>
		<!-- <div>
      <button
        class="btn btn-info"
        style="bottom:0; text-align:center; margin:auto; "
      >
        Review our ordering system and Checkout
      </button>
    </div> -->
	</div>
</template>

<script>
export default {
	loading: true,
	asyncData({ route, store, env, params, redirect, error }) {},
};
</script>

<style lang="scss">
.thank-your-page {
	width: 100%;
	max-width: auto;
	padding: 0 4.5%;
	display: grid;
	margin: auto;
	padding: auto;
	color: black;
	height: 100vh;
	background-color: rgb(248, 254, 255);
	// background-color: white;
}
.image-message,
.help-links,
.sumarry-order {
	// margin: auto;
	// padding-bottom: 25%;
	width: 100%;
	max-width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		width: 80px;
		height: 95px;
		// margin-right: 1em;
	}
	a {
		color: rgb(9, 152, 177);
		font-size: 0.95em;
	}
}

h5 {
	font-weight: 600;
	opacity: 0.8;
	// font-size: 0.8em;
}

.sumarry-order {
	text-align: left;
}

.help-links {
	margin-top: 1em;
	flex-direction: column;
	gap: 5px;
	a {
		// padding: 1em;
		font-size: 0.75em;
		font-weight: 600;
	}
}
.title {
	color: black;
}

.thank-you-footer {
	display: grid;
	font-size: 0.85em;
	font-weight: 800;
	width: 100%;
	max-width: auto;
	// color: rgb(42, 165, 97);
	margin: auto;
	text-align: center;
	bottom: 0;
}

@media (max-width: 60em) {
	.links {
		display: flex;
		// flex-direction: row;
		// justify-content: space-between;
		// gap: 0.5em;
		// width: 100%;
	}
}
.links {
	width: 100%;
	max-width: auto;
	text-align: center;
	display: grid;
	grid-gap: 0.5em;
}
</style>
