export interface IImage {
  filename: string;
  image_path: string;
  classes: string[];
  polygons: IPolygon[];
}

interface IPolygon {
  class: string;
  vertices: Vertex[];
}

type Vertex = number[];
