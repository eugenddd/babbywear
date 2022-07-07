const scrape = require("aliexpress-product-scraper");

module.exports.getItem = async function (req, res) {
  try {
    console.log("The ID: ", req.params.id);
    let product = scrape(req.params.id);

    product.then((data) => {
      console.log("The JSON: ", data);
      res.json(data);
    });
    // await
  } catch (err) {
    await res.status(401).json(`Not exist: ${err}`);
  }
};
