export const ALL_GROUPS = "/all";
export const TRAIN = "/train";
export const TEST = "/test";
export const VALID = "/valid";

export const CLASSES_SEARCH_PARAM = "classes";

export const CANVAS_SIZE = 100;

export const CLASSES = [
  {
    name: "elbow positive",
    color: "blue",
  },
  {
    name: "fingers positive",
    color: "green",
  },
  { name: "humerus", color: "sea" },
  {
    name: "forearm fracture",
    color: "yellow",
  },
  {
    name: "humerus fracture",
    color: "red",
  },
  {
    name: "shoulder fracture",
    color: "orange",
  },
  {
    name: "wrist positive",
    color: "purple",
  },
];

export const CLASS_COLOR: Record<string, { color: string; fillColor: string }> =
  {
    "elbow positive": {
      color: "#3d9be9",
      fillColor: "#3d9be933",
    },
    "fingers positive": {
      color: "#bada55",
      fillColor: "#bada5533",
    },
    humerus: { color: "#2ce1cb", fillColor: "#2ce1cb33" },
    "forearm fracture": {
      color: "#ffd75c",
      fillColor: "#ffd75c33",
    },
    "humerus fracture": {
      color: "#f25858",
      fillColor: "#f2585833",
    },
    "shoulder fracture": {
      color: "#fdb03e",
      fillColor: "#fdb03e33",
    },
    "wrist positive": {
      color: "#d783ff",
      fillColor: "#d783ff33",
    },
  };

export const TABS = [
  { name: "All groups", path: ALL_GROUPS },
  { name: "Train", path: TRAIN },
  { name: "Valid", path: VALID },
  { name: "Test", path: TEST },
];

export const IMAGES_COLUMNS_COUNT = 8;

export const BASE_URL = `http://3.92.216.5:80`;
