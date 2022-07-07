export const state = () => ({
	locales: ["en", "ro", "es"],
	locale: "",
	currentListing: [],
});

export const mutations = {
	SET_LISTING(state, currentListing) {
		state.currentListing = currentListing;
	},
	// SET_LANG(state, locale) {
	// 	if (state.locales.includes(locale)) {
	// 		state.locale = locale;
	// 	}
	// },
};

export const actions = {
	async GET_LISTINGS(context) {
		return this.$axios
			.get(`http://localhost:3001/api/listing/${id}`)
			.then((res) => {
				context.commit("SET_LISTING", res.data);
			});
	},
};
