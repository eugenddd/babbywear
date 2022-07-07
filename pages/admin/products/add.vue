<template>
  <div class="add-listing-container">

    <div class="cardy-title" style="padding: 0 10%;">
      <h2 style="color:#607385;">Add product</h2>

    </div>

    <div class="add-listing-forms">


      <div class="form-container-in-container">

        <div class="product-left">

          <div class="cardy">
            <span class="card-title">Title</span>
            <input v-model="listingData[setLang].productTitle" label="Title" placeholder="Product Title" outlined
              required />

            <div data-app>
              <span class="card-title">Product Description</span>
              <!-- <Editor v-model="listingData.es.productDescription" /> -->
              <el-tiptap v-model="listingData[setLang].productDescription" :extensions="extensions" />
            </div>

            <div v-html="listingData[setLang].productDescription"></div>
          </div>

          <div class="upload-container cardy">
            <span class="card-title"> Images</span>

            <div class="upload-images" style="display: grid; grid-gap: 1em">
              <input class="upload-images-input" id="file" ref="file" @change="handleFileUpload" type="file"
                accept="image/jpeg, image/png, image/gif" multiple />
              {{ listingData.images.name }}

              <div class="images-uploaded" style="
                display: flex;
                gap: 10px;
                max-width: 600px;
                overflow-x: auto;
              ">
                <img v-for="img in listingData.images" :key="img" :v-if="listingData.images !== ''" :src="img"
                  width="150" height="150" />
              </div>
            </div>
          </div>

          <div class="cardy ">
            <span class="card-title">Pricing</span>
            <div class="prices" style="display:flex;">
              <input v-model="listingData[setLang].price" placeholder="Real Product Price" outlined required />

              <input v-model="listingData[setLang].priceDiscountedTo" placeholder="SALE PRICE" outlined required />
            </div>

          </div>

          <div class="cardy">
            <!-- <span class="title">ES Product</span> -->
            <span class="card-title"> Product Details</span>

            <input v-model="listingData[setLang].slug" type="text" placeholder="Slugify Title (EX: my-listing-title)" />

            <input v-model="listingData[setLang].secondTitle" type="text" placeholder="Second Title" />
            <input v-model="listingData[setLang].relationShip" type="text"
              placeholder="Relation Ship Tags (with ,) max 3 TAGS | EX: category name" />
            <!-- <textarea type="text" placeholder="Product Description" /> -->


          </div>
        </div>

      </div>
      <div class="right-side">
        <div class="cardy">
          <span class="card-title">Select Product Lang</span>
          <select @change="onChange($event)" class="form-control">
            <option v-for="lang in langs" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
          </select>

          <!-- <span class="cardy-title">{{lang}}</span> -->
          <div style="display:flex; align-items:center; gap:1em">
            <div class="checklist__checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" focusable="false">
                <path
                  d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z">
                </path>
              </svg>

            </div>
            <div style="color:black; !important; ">{{ setLang }}</div>
          </div>
        </div>


        <div class="cardy">
          <div class="card-title">
            Aliexpress Item Number
          </div>
          <div style="display: flex; align-items: center; gap: 0.5em">
            <input v-model="itemNumber" type="text" placeholder="Aliexpress product number" />
            <button @click="getItemData" class="btn btn-secondary" style="width: 30%">
              Fill
            </button>
          </div>
        </div>

        <div class="seo-by-languages">

          <div class=" cardy">
            <span class="card-title"> SEO Meta's</span>

            <input v-model="listingData[setLang].keywords" type="text" placeholder="Long Tail Keywords" />
            <textarea v-model="listingData.ro.metaDescription" type="text" rows="5" placeholder="Meta Description" />
          </div>
        </div>


        <div class="cardy">
          <span class="card-title">Category tags</span>
          <el-select v-model="listingData[setLang].relationShip" multiple filterable allow-create
            placeholder="Choose tags for your article">
            <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="cardy">
          <span class="card-title">Quantity</span>
          <div>
            <input type="text" value="50" placeholder="Auto" />

          </div>
          <mdb-container>
            <mdb-select multiple selectAll @getValue="getSelectValue" :options="iconOptions"
              placeholder="Choose your option" />
          </mdb-container>
          <select name="product-colors" id="product-colors">
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            ><option value="yellow">Yellow</option>
          </select>
        </div>

        <div class="right-side-buttons clearfix">
          <button v-on:click="listProduct" class="btn btn-success admin-btn">
            List Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "../../../components/admin/leftSide";
import {
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Link,
  Image,
  Blockquote,
  ListItem,
  BulletList, // use with ListItem
  OrderedList, // use with ListItem
  TodoItem,
  TodoList, // use with TodoItem
  TextAlign,
  Indent,
  HorizontalRule,
  HardBreak,
  History,
  LineHeight,
  Iframe,
  CodeBlock,
  TrailingNode,
  Table, // use with TableHeader, TableCell, TableRow
  TableHeader,
  TableCell,
  TableRow,
  FormatClear,
  TextColor,
  TextHighlight,
  Preview,
  // Print,
  Fullscreen,
  CodeView,
  // SelectAll,
} from "element-tiptap";

import EditorPlugin from "../../../plugins/ElementTipTap";
import Editor from "../../../components/Editor";
import { ElementTiptap } from "element-tiptap";
const axios = require("axios");
const { log } = console;

// import VueCoreImageUpload from "vue-core-image-upload";
// import { mdbSelect, mdbContainer } from "mdbvue";

export default {
  layout: "admin",
  components: {
    LeftSide,
    Editor,
    "el-tiptap": ElementTiptap,
    // "mdb-select": mdbSelect,
    // "mdb-container": mdbContainer
    // "vue-core-image-upload": VueCoreImageUpload
  },
  data() {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Link({ bubble: true }),
        new Image(),
        new Blockquote(),
        new TextAlign(),
        new ListItem(),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule({ bubble: true }),
        new Fullscreen(),
        new LineHeight(),
        new Iframe(),
        new CodeBlock(),
        new TrailingNode(),
        new Table(), // use with TableHeader, TableCell, TableRow
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new FormatClear(),
        new TextColor(),
        new TextHighlight(),
        new Preview(),
        // new CodeView({
        //   codemirror,
        //   codemirrorOptions: {
        //     styleActiveLine: true,
        //     autoCloseTags: true
        //   }
        // }),
        new History(),
      ],
      iconOptions: [
        {
          text: "White",
          value: "White",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg",
        },
        {
          text: "Black",
          value: "Blue",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg",
        },
        {
          text: "Blue",
          value: "Blue",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        },
        {
          text: "Red",
          value: "Red",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        },
        {
          text: "Green",
          value: "Green",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        },
        {
          text: "Yellow",
          value: "Yellow",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        },
        {
          text: "Grey",
          value: "Grey",
          icon: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg",
        },
      ],

      // lang: {
      //   es: true,
      //   en: false,
      //   ro: false,
      // },
      options5: [
        {
          value: "Electronics",
          label: "Electronics",
        },
        {
          value: "Fashion",
          label: "Fashion",
        },
        {
          value: "Kitchen",
          label: "Kitchen",
        },
      ],
      items_listed: "",
      itemNumber: "",
      listingData: {
        status: [],
        images: [],
        listingStatus: "",
        productAliId: "",
        productColor: [],
        productSize: [],
        es: {
          slug: "",
          productTitle: "",
          secondTitle: "",
          relationShip: [],
          productDescription: ``,
          keywords: [],
          metaDescription: "",
          additional_information: "",
        },
        en: {
          slug: "",
          productTitle: "",
          secondTitle: "",
          relationShip: [],
          productDescription: ``,
          keywords: [],
          metaDescription: "",
          additional_information: "",
        },
        ro: {
          slug: "",
          productTitle: "",
          secondTitle: "",
          relationShip: [],
          productDescription: ``,
          keywords: [],
          metaDescription: "",
          additional_information: "",
        },
      },
      langs: [

        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'ro',
          name: 'Romanian'
        },
        {
          code: 'es',
          name: 'Spanish'
        },
      ],
      setLang: 'ro',
      response: null,
      listed: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 200) || "Name must be less than 10 characters",
      ],
    };
  },
  head() {
    return {
      title: "GES Administration | Add Items",
    };
  },
  created() {
    EditorPlugin();
    // this.countListings();
  },
  computed: {},
  methods: {
    countListings() {
      const listings = this.$http.$get("http://127.0.0.1:3001/api/listings");
      this.items_listed = listings;
    },
    onChange(event) {
      // console.log(event.target.value)
      this.setLang = event.target.value;
    },
    // switchES: function () {
    //   this.lang.en = false;
    //   this.lang.ro = false;
    //   this.lang.es = true;
    // },
    // switchEN: function () {
    //   this.lang.es = false;
    //   this.lang.ro = false;
    //   this.lang.en = true;
    // },
    // switchRO: function () {
    //   this.lang.en = false;
    //   this.lang.es = false;
    //   this.lang.ro = true;
    // },

    handleFileUpload: async function (event) {
      // this.listingData.images = event.target.files[0];
      const files = event.target.files[0];

      // const img = URL.createObjectURL(file);
      // this.listingData.images.push(img);
      // this.listingData.images.push(file);
      // console.log(file); // this.listingData
      // console.log(this.listingData.images);
    },
    changeCurrentCategory(event) {
      this.listingData.category = event.target.textContent;
      log(event.target.value);
      // this.listingData.category = await this.$http.$get(
      //   `/api/category/items/${id}`
      // )
      // log(name, id)
    },
    listProduct: function () {
      return axios
        .post("http://localhost:3001/api/product/add/", {
          images: this.listingData.images, //
          productAliId: null,
          productColor: [],
          productSize: [],
          status: this.listingData.listingStatus,
          es: this.listingData.es,
          ro: this.listingData.ro,
          en: this.listingData.en,
        })
        .then((result) => {
          this.response = result;
          this.listed = true;
          log(`Listed: ${this.response}`);
        })
        .catch((err) => log(`error: ${err.code}`));
    },
    getSelectValue: function (value, text) {
      log(value);
    },
    getItemData: function () {
      // console.log(`Item number ` + this.itemNumber);

      return this.$http
        .$get(`http://127.0.0.1:3001/api/item/${this.itemNumber}`)
        .then((result) => {
          alert(result)
          console.log(result.title);
          this.listingData.productAliId = this.itemNumber;
          this.listingData.productColor = "Object colors";
          this.listingData.productSize = "Object sizes";
          this.listingData[this.setLang].productTitle = result.title;
          this.listingData[this.setLang].productDescription = result.description;
          this.listingData.images = result.images;
          this.listingData[this.setLang].price = result.price;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
// .section-title-langs {
//   display: flex;
//   width: 100%;
//   max-width: auto;
//   margin: auto;
//   align-items: center;
//   justify-content: space-between;
// }

.add-listing-forms {
  // font-size: 100% !important;
  // background: grey;
  display: grid;
  grid-template-areas: "productDetails  seoDetails";
  // grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 600px 0fr;
  justify-content: center;
  // grid-auto-columns: 400px;
  grid-gap: 2em;
  margin: auto;
  padding: 0em 0%;
  // height: 30vh;
  color: white;
  // max-height: auto;
}

@media (max-width: 1200px) {
  .add-listing-forms {
    display: grid;
    // grid-gap: 1em;
    grid-template-areas:
      "productDetails"
      "seoDetails";
    grid-template-columns: repeat(1, 1fr);
  }
}

.form-container-in-container {
  grid-area: productDetails;
  display: grid;
  // grid-gap: 1em;
  width: 100%;
  // box-sizing: content-box;
  // min-width: 40em;
  max-width: auto;
  margin: auto;

  .product-left {
    display: grid;
    grid-gap: 1em;
  }
}

.left-side-links {
  grid-area: leftSide;
}

.listing-languages {
  grid-area: langs;
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  .lang--btn {
    width: 40px;
    font-size: 0.7em;
    height: 20px;
    // border-radius: 100px;
    // background-color: white;
    color: rgb(124, 124, 124);
    // border: 1px solid rgb(73, 53, 185);
  }
}

// .title {
// 	grid-area: title;
// 	color: rgb(0, 0, 0) !important;
// 	font-weight: 500;
// 	width: 100%;
// }

.cardy-title {
  color: black;
  // color: rgb(0, 0, 0) !important;
  font-weight: 400;
  width: 100%;
  font-size: 1em;
}

.upload-container {
  display: grid;
  grid-gap: 1em;
  width: 100%;
  border-radius: 5px;
  // border: 1px solid rgb(228, 228, 228);
  // background-color: white;
  padding: 0.2em 2.2%;

  .upload-images {
    // display: grid;
    // grid-gap: 1em;

    .upload-images-input {
      padding: 1em 0.5em 4%;
      color: rgb(247, 158, 43);
      // border: 1px solid rgb(201, 201, 201);
    }
  }

  img {
    border-radius: 5px;
  }
}

// span.title {
// 	font-weight: 550;
// 	font-size: 0.9em;
// 	color: rgba(70, 19, 112, 0.856);
// }

.listing-languages {
  grid-area: langs;
  display: flex;
  justify-content: flex-start;
}

.form-container-in-container {
  display: grid;
  width: 100%;
  max-width: auto;
}

.right-side {
  grid-area: seoDetails;
  display: flex;
  flex-direction: column;
  gap: .5em;


  // width: 100%;
  // max-width: auto;
}


.right-side {
  // display: grid;
  // display: flex;
  // flex-direction: column;
  // grid-gap: 1em;
  grid-area: seoDetails;
  width: 100%;
  min-width: 320px;
  // position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  // height: 570px;
  // padding: 1em 2.5%;
  border-radius: 5px;
  // border: 1px solid rgb(228, 228, 228);
}

.seo-and-rest {
  // background-color: white;
  display: grid;
  // flex-direction: column;
  grid-gap: 0.5em;
  // width: 100%;
  border-radius: 5px;
  // border: 1px solid rgb(228, 228, 228);
  padding: 0.5em;
}

.right-side-buttons {
  display: grid;
  grid-gap: 0.5em;
}

.quantity-colors {
  display: grid;
  grid-gap: 0.5em;
}

.quantity-colors>#product-colors {
  width: 100%;
  margin: auto;
  // height: 30px;
  font-weight: normal;
  font-size: 0.9em;
  color: grey;
}

input,
textarea {
  outline: none;
}

input {
  font-size: 14px !important;
  height: 3rem !important;

  &::placeholder {
    color: rgb(7, 7, 7) !important;
    font-size: 13.5px !important;
    opacity: none !important;
  }
}

.card-title {
  font-size: 14px;
  line-height: 22px;
  // padding-top: 0.5em 0;
  // margin-bottom: 0.25em;
  font-weight: 450;
  color: #0a1c2e;
  // font-size: .95em;
}

input {
  width: 100%;
}

fieldset {
  display: grid;
  grid-gap: 0.5em;

  // color: rgba(59, 48, 75, 0.678);
}

// textarea {
//   padding: 5px 1%;
//   font-size: 0.8em;
//   border: 1px solid grey;
//   border-radius: 3px;
// }

.button:active {
  background-color: rgb(45, 161, 70);
}

admin-btn {
  height: 30px;
  font-size: 0.6em;
}

.el-select,
input {
  height: 44px;
}

input,
textarea {
  padding-left: 7px;
  font-size: 0.88em;
  border: 1px solid rgb(187, 187, 187);
  border-radius: 3px;
  // background-color: rgb(250, 250, 250);
}

.eltags::placeholder,
input::placeholder,
textarea::placeholder {
  font-size: 0.95em;
  color: rgb(173, 173, 173);
}

input:focus,
textarea:focus {
  // font-size: 0.95em;

  color: rgb(22, 22, 22);
}

.prices {
  display: grid;
  gap: 1em;

}

.listed {
  font-size: 1.2em;
  color: white;
  background-color: rgb(33, 156, 84);
}

.sticky {
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 0;
}

.prices {
  display: grid;
}

.checklist--done .checklist__checkmark {
  border-color: #0cac42;
  background-color: #0cac42;
  color: #fff;
}

.checklist__checkmark {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(128, 143, 157, 0.3);
  border-top-color: rgba(128, 143, 157, 0.3);
  border-right-color: rgba(128, 143, 157, 0.3);
  border-bottom-color: rgba(128, 143, 157, 0.3);
  border-left-color: rgba(128, 143, 157, 0.3);
  background-color: #0cac42;
  border-radius: 50%;
  // color: #808f9d;
  color: #fff;
  transition: color .1s linear, border-color .1s linear, box-shadow .2s linear, background-color .1s linear;
}

.fa-icon {
  width: 10px !important;
  width: 10px !important;
}
</style>
