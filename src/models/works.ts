export interface WorksModel {
  codeLink: string;
  description: string;
  projectLink: string;
  tags: string[];
  title: string;
  imgUrl: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  mainField: string;
}
