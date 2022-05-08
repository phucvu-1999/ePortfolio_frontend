export interface TestimonialModel {
  name: string;
  company: string;
  feedback: string;
  imageurl: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
}
