<template>
	<div class="billing-page">
		<!-- <div class="billing-nav"></div> -->
		<!-- <div class="top-of-modal">
      <div @click="closeModal" class="xclose btn btn-warning">
        <span class="text">X</span>
      </div>
    </div> -->

		<div class="billing-container">
			<!-- <div
        class="new-old-client"
        style="margin-top:0em; display:flex; justify-content:space-arround; gap:2em; margin:auto; "
      >
        <span> <input type="radio" checked />&nbsp;I'm new client </span>
        <span><input type="radio" />&nbsp;Yes, I have account </span>
      </div> -->
			<div class="step-1">
				<h6 style="font-weight:700; font-size:.95em; color:black;">
					{{ data }}
					<span class="circle-steps">1</span>
					Review Order Details
				</h6>
				<span
					class="seller-details"
					style="display:flex; gap:.75em; border:1px solid #ececec; border-radius:4px;"
				>
					<div
						class="seller-details-texts"
						style="display:grid; grid-gap:0em; padding:.45em;"
					>
						<!-- <h6>Seller Details</h6> -->
						<div
							class="about-seller"
							style="display:grid; font-size:.7em; font-weight:700;"
						>
							<span
								>Sold by Mar***37 |
								<img
									width="70px"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnqCYEMUuliYDd-5izlRMrlt9_jGcW7c1J7Q&usqp=CAU"
								/>
								<span
									>(<a href="#" class="link-user-data">120</a>) - 100%
									Positive</span
								></span
							>
							<!-- <span
              style="display:flex; align-content:center; align-items:center;"
              >Reviews:&nbsp;
            </span> -->
							<span
								>ARTESANO DE TERUEL SL
								<a href="#" class="link-user-data">Ask Seller</a></span
							>
							<span>CIF: B-44190957</span>
							<!-- <span><a href="#" class="link-user-data">Listings</a></span> -->
							<span
								><nuxt-link to="" style="color:black; font-weight:700;"
									>User Shipping Agreement</nuxt-link
								></span
							>
						</div>
					</div>
				</span>
				<span
					class="cart-products"
					style="display:flex; gap:.8em; border:1px solid #ececec; border-radius:4px; padding:.3em;"
				>
					<img
						src="https://ae01.alicdn.com/kf/H4ae3af737822463aa818a505a3f69594Q.jpg"
						width="70"
						height="70"
						alt=""
						style="border:1px solid #eaeaea;"
					/>

					<div
						class="cart-text"
						style="display:grid; grid-gap:0em; background-color:white; font-size:.88em;"
					>
						<span><b>Últimos artículos vendidos</b></span>
						<span>Envio: <b>Gratis</b></span>
						<span>Total: <b>18.5 Eur</b></span>
					</div>
				</span>
			</div>

			{{ locale }}
			<div class="step-2">
				<h6
					style="font-weight:700; font-size:.95em; color:black; margin-top:1.2em;"
				>
					<span class="circle-steps">2</span>
					{{ $t("billing.title") }}
				</h6>
				<div class="billing-forms form-group">
					<!-- {{ errors }} -->
					<div class="full-name">
						<div>
							<label for="example1">{{ $t("billing.name.first") }}</label>
							<input
								v-model="orderData.firstname"
								type="text"
								class="form-control"
							/>
						</div>
						<div>
							<label for="example1">{{ $t("billing.name.last") }}</label>
							<input
								v-model="orderData.lastname"
								type="text"
								class="form-control"
							/>
						</div>
					</div>
					<div class="address-line-1">
						<div>
							<label for="example1">{{ $t("billing.address.line1") }}</label>
							<input
								v-model="orderData.address1"
								type="text"
								class="form-control"
							/>
						</div>
					</div>
					<div class="address-line-2">
						<div>
							<label for="example1">{{ $t("billing.address.line2") }}</label>
							<input
								v-model="orderData.address2"
								type="text"
								class="form-control"
							/>
						</div>
					</div>

					<div class="country-state">
						<div>
							<label for="example1">{{ $t("billing.address.country") }}</label>
							<select class="form-control">
								<option value="">United Kingdom</option>
								<option value="" class="form-control">Romania</option>
								<option value="" class="form-control">Spain</option>
							</select>
						</div>
						<div>
							<label for="example1">{{ $t("billing.address.state") }}</label>
							<select class="form-control">
								<option value="" class="form-control">London</option>
							</select>
						</div>
					</div>

					<div class="city-zip">
						<div>
							<label for="example1">{{ $t("billing.address.city") }}</label>
							<input
								v-model="orderData.city"
								type="text"
								class="form-control"
							/>
						</div>
						<div>
							<label for="example1">{{ $t("billing.address.zipcode") }}</label>
							<input
								v-model="orderData.zipcode"
								type="text"
								class="form-control"
							/>
						</div>
					</div>

					<div>
						<!-- <button class="btn button--blue" @click="billingDetails">
            {{ $t("billing.address.next") }}
          </button> -->
						<!-- :to="localePath('/checkout/review/pay/')" -->
						<!-- { name: 'checkout-review-pay___${this.lang}', params: { slug: category.slug } -->

						<!-- :to="{
                  localePath({name: `checkout-review-pay___${this.lang}`,
                  params: { lang: category.slug }})}" -->
						<nuxt-link
							:to="
								localePath({
									name: `checkout-review-pay`,
									params: { locale: this.locale },
								})
							"
							class="btn button--blue"
							>{{ $t("billing.address.next") }}</nuxt-link
						>
						<div
							style="display:grid; text-align:center; margin-top:.5em; margin:auto;"
						>
							<!-- src="https://www.anchorageseniorcenter.org/graphics/logos/paypalcreditcards.png" -->

							<div style="display:grid; ">
								<div
									style="display:flex; margin:auto; align-content: center; align-items:center;"
								>
									<img
										style="width:35px;"
										src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1024,h_1024/https://newtecservices.ie/wp-content/uploads/2018/01/cyber-security-lock-1024x1024.png"
										alt=""
									/>
									<span style="font-weight:700; font-size:.82em;">
										{{ $t("billing.secure") }}</span
									>
								</div>
								<img
									style="width:300px; margin:auto; opacity:.6; "
									src="https://cdn.shopify.com/s/files/1/0400/9092/7257/files/envios_24-48H_4.png?v=1596815671"
									alt=""
								/>
								<div>
									<span
										style="font-weight:800; font-size:.65em; opacity:.85; color:#424242;"
										>Global Express Shop Romania 2021</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mdbSelect, mdbContainer } from "mdbvue";
const { log } = console;
export default {
	scrollToTop: true,
	middleware: "onlyBilling",
	components: {
		mdbSelect,
		mdbContainer,
	},

	data() {
		return {
			activeModal: null,
			errors: [],
			orderData: {
				firstname: "",
				lastname: "",
				address1: "",
				address2: "",
				country: "",
				state: "",
				city: "",
				zipcode: "",
			},
			labelOptions: [
				{ text: "Option nr 1", value: "Option 1" },
				{ text: "Option nr 2", value: "Option 2" },
				{ text: "Option nr 3", value: "Option 3" },
				{ text: "Option nr 4", value: "Option 4" },
				{ text: "Option nr 5", value: "Option 5" },
			],
		};
	},

	asyncData({ store, params, query, redirect, error }) {
		const data = params.listingData;
		const locale = params.locale;
		return { data, locale };
	},

	beforeEnter: (to, from, next) => {
		// log(to);
		log("Before enter in Billing page!");
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	},

	beforeRouteLeave(to, from, next) {
		if (process.browser) {
			log("Before leave Billing page!");
			localStorage.setItem("shipping", this.address);
		} else {
			console.log("Not in browser.");
		}
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
		next();
	},

	mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	},

	methods: {
		storeShipping() {},
		billingDetails(route) {
			log(`to: ${route.name}`);
			// this.activeModal = true;
			// log(this.billing);
		},
	},
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
	width: 18px;
	height: 18px;
	-moz-border-radius: 50%;
	border-radius: 50%;
	border: 4px solid #5f6368;
}

.billing-page {
	overflow-y: auto;
	// .billing-nav {
	margin-top: 0.1em;
	//   height: 50px;
	//   width: 100%;
	//   background-color: #5f6368;
	// }
	// overflow-y: auto;

	display: flex;
	font-weight: normal;
	justify-content: center;
	// align-content: center;
	display: grid;
	width: 100%;
	max-width: auto;
	// max-width: 700px;
	// margin: auto;
	// margin-top: 1em  ;
	font-size: 1em;
	color: rgb(60, 66, 70);
	// color: white;
	font-weight: 500;
	background-color: rgb(250, 253, 253);
	padding: 0em 5%;
	// height: 100vh;

	h4 {
		margin-top: -0.1em;
		font-weight: 600;
		font-size: 1.25em;
		color: rgb(61, 61, 61);
	}

	h6 {
		font-weight: 700;
		font-size: 0.82em;
	}

	.billing-container {
		overflow-y: auto;
		position: relative;
		width: 100%;
		max-width: auto;
		margin: auto;
		// border: 1px solid rgb(224, 224, 224);
		margin-top: 1em;
		// border-radius: 4px;
		// overflow-y: auto;
		display: grid;
		grid-gap: 0.5em;
		justify-content: center;

		// padding: 0em 5%;

		.billing-forms {
			width: 100%;
			max-width: auto;
			display: grid;
			grid-gap: 0.7em;
		}

		.full-name {
			display: flex;
			gap: 20px;
			width: 100%;
			max-width: auto;
			div {
				width: 100%;
				max-width: auto;
			}
		}

		.address-line-1,
		.address-line-2 {
			display: grid;
			grid-gap: 1em;
			text-align: left;
			div {
				display: grid;
				// grid-gap: 0.2em;
			}
		}

		.country-state,
		.city-zip {
			display: flex;
			gap: 20px;
			div {
				width: 100%;
				max-width: auto;
			}
			div:nth-child(2) {
				input {
					// width: 100%;
					// padding-left: 0.5em;
				}
			}
		}
	}
	input[type="text"] {
		font-size: 0.8em;
		height: 35px;
	}
	input::placeholder {
		font-size: 0.78em;
	}
	label[for="example1"] {
		margin-bottom: -2px;
		font-size: 0.74em;
		font-weight: 600;
		opacity: 0.8;
		color: rgb(51, 51, 51);
		overflow: none;
		border: none;
	}

	select,
	option {
		font-size: 0.8em;
	}

	// .btn {
	//   width: 100%;
	//   max-width: auto;
	//   height: 40px;
	// }
}

.top-of-modal {
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	// z-index: 4;
}

// .xclose {
//   // position: absolute;
//   z-index: inherit;
//   // margin-top: 2.4em;
//   // padding-right: 0.6em;
//   width: 10px !important;
//   // height: 20px;

//   font-size: 1em;
//   border-radius: 50%;
// }

// .xclose > .text {
//   margin: auto;
//   margin-top: -0.3em;
//   margin-left: -0.3em;
//   font-size: 1.2em;
//   font-weight: 800;
//   margin-right: 1em;
// }

.checkout-right-in-page,
.active-listings {
	position: relative;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
}

a.link-user-data {
	color: #0a8592;
}

input {
  border:1px solid rgb(185, 185, 185);
  border-radius:5px;
  width:100%;
  height:45px !important;
}

.circle-steps {
	background-color: #21c1e9;
	// border-radius: 1em;
	// -moz-border-radius: 1em;
	// -webkit-border-radius: 0.8em;
	color: #ffffff;
	display: inline-block;
	font-size: 1.2em;
	font-weight: bold;
	line-height: 1.6em;
	margin-right: 5px;
	text-align: center;
	width: 1.8em;
	border-radius: 50%;
	// min-width: 40px;
	// padding: 0.3em;
	// padding-left: 13.5px;
	// padding-right: 12px;
}
</style>
