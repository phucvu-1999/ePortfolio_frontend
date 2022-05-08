import { client } from "../client";
import { SkillsModel } from "../models/skills";
import { ExperiencesModel } from "../models/experiences";
import { WorksModel } from "../models/works";
import { BrandModel } from "../models/brands";
import { TestimonialModel } from "../models/testimonials";

class GetServices {
  getExpericens = (queryStr: string): Promise<ExperiencesModel[]> => {
    return client.fetch(queryStr);
  };

  getSkills = (queryStr: string): Promise<SkillsModel[]> => {
    return client.fetch(queryStr);
  };

  getWorks = (query: string): Promise<WorksModel[]> => {
    return client.fetch(query);
  };

  getBrands = (queyr: string): Promise<BrandModel[]> => {
    return client.fetch(queyr);
  };

  getTesttimonials = (query: string): Promise<TestimonialModel[]> => {
    return client.fetch(query);
  };
}

export default new GetServices();
