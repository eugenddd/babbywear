import Vue from "vue";
import ElementUI from "element-ui";
import { ElementTiptapPlugin } from "element-tiptap";
// import ElementUI's styles
import "element-ui/lib/theme-chalk/index.css";
// import this package's styles
import "element-tiptap/lib/index.css";

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
  CodeView
  // SelectAll,
} from "element-tiptap";

// use ElementUI's plugin
export default () => {
  Vue.use(ElementUI);
  // use this package's plugin
  Vue.use(ElementTiptapPlugin, {
    /* plugin options */
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
      // new Preview(),
      // new CodeView({
      //   codemirror,
      //   codemirrorOptions: {
      //     styleActiveLine: true,
      //     autoCloseTags: true
      //   }
      // }),
      new History()
    ]
  });
};

// Now you register `'el-tiptap'` component globally.
