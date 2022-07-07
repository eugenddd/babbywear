<template>
	<div class="latest-listings">
		<!-- <div class="" style="display:flex; justify-content:space-evenly; gap:30px;">
      <button @click="add" class="btn-warning">Add</button>
    </div> -->
		<!-- {{ allListings }} -->

		<div class="title-texts">
			<h5>{{ $t("layout.latest-items.title") }}</h5>
			<h7>{{ $t("layout.latest-items.second-text") }}</h7>
		</div>
		<!-- {{ visibleList }} -->
		<div class="left-side-active-items">
			<transition-group
				name="list"
				tag="span"
				style="display:grid; grid-gap:.4em;"
			>
				<span
					v-for="item in visibleList"
					v-bind:key="item.id"
					class="list-item on-sale z-depth-1"
				>
					<span>
						<img :src="item.img" />
						<span>
							<h6 style="opacity:.8; font-size: .82em;">
								{{ item.title }}
							</h6>
							<span style="font-size:11px; opacity:.7;"
								>{{ item.buyerName }} From {{ item.buyerCountry }}
							</span>
						</span>
					</span>
				</span>
				<span
					><img
						style="width:60px;"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnqCYEMUuliYDd-5izlRMrlt9_jGcW7c1J7Q&usqp=CAU"
						alt=""
				/></span>
			</transition-group>
			<!-- <transition-group name="fade" tag="div">
        <div
          v-for="latest in latestListing"
          :key="latest.id"
          class="list-item on-sale"
        >
          <span class="">
            <img :src="latest.img" />
            <span>
              <h6 style="opacity:.8; font-size: .82em;">
                {{ latest.title }}
              </h6>
              <span style="opacity:.7; font-size: .65em;"
                >{{ latest.buyerName }} From {{ latest.buyerCountry }}</span
              >
            </span>
          </span>
        </div>
      </transition-group> -->
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	// props: {
	// 	listings: {
	// 		// type: Object,
	// 		require: true,
	// 	},
	// },
	data() {
		return {
			// visibleList: [],
			// visibleList: "",
			// solds: "",
			visibleList: [
				{
					id: 1,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 2,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 3,
					img:
						"https://ae01.alicdn.com/kf/Hcc39513712d84d5986dce24dd06c2b6ck/Protector-de-pantalla-de-hidrogel-500D-para-iPhone-pel-cula-protectora-suave-para-iPhone-7-8.jpg_Q90.jpg_.webp",
					title: "Protector de pantalla de hidrogel 500D para iPhone",
					buyerName: "Angel",
					buyerCountry: "Spain",
				},
				{
					id: 4,
					img:
						"https://ae01.alicdn.com/kf/Ha300719e0e4748a5bd26eddf8cb7818d3/Protector-de-pantalla-de-vidrio-templado-para-iPhone-Protector-de-pantalla-de-vidrio-templado-para-iPhone.jpg_Q90.jpg_.webp",
					title: "Protector de pantalla de vidrio templado para iPhone",
					buyerName: "Smith",
					buyerCountry: "United States",
				},
				{
					id: 5,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 6,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 7,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 8,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 9,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 10,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
			],
			hiddenList: [
				{
					id: 1,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 2,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 3,
					img:
						"https://ae01.alicdn.com/kf/Hcc39513712d84d5986dce24dd06c2b6ck/Protector-de-pantalla-de-hidrogel-500D-para-iPhone-pel-cula-protectora-suave-para-iPhone-7-8.jpg_Q90.jpg_.webp",
					title: "Protector de pantalla de hidrogel 500D para iPhone",
					buyerName: "Angel",
					buyerCountry: "Spain",
				},
				{
					id: 4,
					img:
						"https://ae01.alicdn.com/kf/Ha300719e0e4748a5bd26eddf8cb7818d3/Protector-de-pantalla-de-vidrio-templado-para-iPhone-Protector-de-pantalla-de-vidrio-templado-para-iPhone.jpg_Q90.jpg_.webp",
					title: "Protector de pantalla de vidrio templado para iPhone",
					buyerName: "Smith",
					buyerCountry: "United States",
				},
				{
					id: 5,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 6,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 7,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 8,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
				{
					id: 9,
					img:
						"https://ae01.alicdn.com/kf/H06236b3e1a4b42beb64f13398e2cb362e/Funda-de-silicona-l-quida-Original-para-iPhone-funda-suave-cuadrada-de-lujo-para-iPhone-11.jpg",
					title: "Funda Silicona Liquida iPhone 12",
					buyerName: "Mary",
					buyerCountry: "Romania",
				},
				{
					id: 10,
					img:
						"https://ae01.alicdn.com/kf/Hbf1995b9959f478b9f2dc231079bad097/Mascarilla-Industrial-desechable-de-3-capas-m-scara-con-lazo-reutilizable-para-la-boca-m-scaras.jpg_Q90.jpg_.webp",
					title: "Mascarilla Industrial desechable de 3 capas",
					buyerName: "Jane",
					buyerCountry: "United Kigdom",
				},
			],
		};
	},
	// async asyncData({ $http }) {
	// 	const itemsSold = await $http
	// 		.$get("http://localhost:3001/api/listings/")
	// 		.then((res) => res.json());
	// 	return { itemsSold };
	// },
	created() {},

	// this.visibleList = this.itemsSold;
	// console.log(this.itemsSold);
	// console.log("test");

	// computed: {
	// 	allListings() {
	// 		// return this.listings.filter((x) => x == 2).length;
	// 		// alert(`listings: ${listings}`);
	// 		console.log(`listings: ${this.listings}`);
	// 		this.listingsData = this.props.listings;
	// 		// return this.props.listings.filter((item) => {
	// 		// 	return item.length;
	// 		// });
	// 	},
	// },
	// async asyncData({ app, params, query, $axios, error }) {
	// 	// cui;/onst id = query.id;
	// 	// const id = "60035462ecdf660a223085e3";
	// 	// const slug = params.slug;
	// 	const locale = app.i18n.locale;

	// 	// log(`ID: ${id}, Slug: ${slug}, Lang: ${locale}`);

	// 	const data = await $axios.$get(`http://localhost:3001/api/listings/`);
	// 	console.log(`Locale = ${locale}\r\nData = ${data}`);
	// 	// console.log(data);
	// 	// const data = await listingResp.json();

	// 	return {
	// 		data,
	// 		locale,
	// 	};
	// },
	mounted() {
		setInterval(() => this.add(), 3000);

		// this.solds = this.data;
		// console.log(this.data);
		// this.remove();
	},
	methods: {
		randomIndexVisible: function() {
			return Math.floor(Math.random() * this.visibleList.length);
		},
		randomIndexHidden: function() {
			return Math.floor(Math.random() * this.hiddenList.length++);
		},
		add: function() {
			const randomNum = Math.floor(Math.random() * this.hiddenList.length);
			console.log(`randomNum: ${randomNum}`);
			// const newItem = this.visibleList.filter((obj) => {
			// 	console.log(`obj.id: ${obj}`);
			// 	return obj.id === newItem;
			// });

			const newItem = this.visibleList.findIndex((x) => x.id === randomNum);

			let item = this.visibleList.find((el) => el.id == newItem);
			// console.log(newItem);
			if (window.UndefinedVariable) {
				Object.assign(window.UndefinedVariable, {});
			}
			this.visibleList.push.apply(item);
			this.visibleList.splice(this.randomIndexVisible(), 1, item);
		},
		remove: function() {
			this.visibleList.splice(this.randomIndexVisible(), 1);
		},
	},
};
</script>

<style lang="scss" scoped>
.latest-listings {
	// margin-top: 0.5em;
	grid-area: listings;
	// max-width: 300px;
	// box-sizing: border-box;
	box-sizing: content-box;
	// border-right: 1px solid rgb(247, 247, 247);
	//padding: 1em;
	// min-width: 300px;
	// max-width: 400px auto;
	// min-width: 8em;
	// width: 32em;

	position: relative;
}

.left-side-active-items {
	// padding: 0.2em;
	// z-index: 4;
	overflow-y: auto;
	// position: fixed;
	padding: 0em 0%;
	display: grid;
	grid-gap: 0.5em;
	box-sizing: border-box;
	// height: 100vh;
	max-width: 325px;
	// background-color: rgb(247, 247, 247);
	// font-weight: 400;
	scroll-behavior: auto;
	overflow-y: auto;
	opacity: 0.95;
	// border: 1px solid rgb(233, 233, 233);
	-moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
	-webkit-transition: width 1s ease-in-out, left 1.5s ease-in-out;
	-moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
	-o-transition: width 1s ease-in-out, left 1.5s ease-in-out;
	transition: width 1s ease-in-out, left 1.5s ease-in-out;
}

.on-sale {
	// border: 1px solid rgb(233, 233, 233);

	border-radius: 3px;
	// background-color: white;
}

.on-sale > span {
	// padding: 1em 1%;
	display: flex;
	align-items: center;
	// border: 1px solid rgb(255, 255, 255);
	background-color: white;
	border-radius: 4px;
	padding: 0.3em;
}

.on-sale > span > img {
	width: 62px;
	margin-right: 0.5em;
	border-radius: 2px;
}

.list-item {
	display: inline-block;
	// margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
	transition: all 1.8s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(30px);
}
</style>
