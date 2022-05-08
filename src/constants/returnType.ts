import { WorksModel } from "../models/works";
import { SkillsModel } from "../models/skills";
import { ExperiencesModel } from "../models/experiences";
import { BrandModel } from "../models/brands";
import { TestimonialModel } from "../models/testimonials";

export type RETURN_TYPE =
  | WorksModel[]
  | SkillsModel[]
  | ExperiencesModel[]
  | BrandModel[]
  | TestimonialModel[];
