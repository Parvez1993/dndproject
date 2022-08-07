import { v4 as uuidv4 } from "uuid";

export const SIDEBAR_ITEM = [
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "input",
      content: "this is a input",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "name",
      content: "this is a name",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "email",
      content: "this is a email",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "phone",
      content: "this is a phone",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "image",
      content: "this is a image",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "row",
      content: "this is a row",
    },
  },
  {
    id: uuidv4(),
    type: "SIDEBAR_ITEM",
    component: {
      type: "column",
      content: "this is a column",
    },
  },
];
