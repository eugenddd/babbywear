export default function({ route }) {
	if (route.fullPath.includes("billing")) {
		// window.history.back();
		console.log(` Middleware Started ${route.fullPath}`);
		if (process.browser) {
			console.log("Modal open, process in browser");
			const checkPage = document.getElementById("#active-listings-now");
			if (typeof checkPage != "undefined" && checkPage != null) {
				console.log("in billing | shipping hook");
			} else {
				console.log("in _slug | shipping hook ");
			}
			console.log(` Middleware Ended ${route.fullPath}`);
		}
	}
}
