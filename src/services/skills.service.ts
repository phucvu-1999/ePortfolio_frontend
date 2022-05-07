import { client } from "../client";
import { SkillsModel } from "../models/skills";
import { ExperiencesModel } from "../models/experiences";

class SkillService {
  getExpericens = (queryStr: string): Promise<ExperiencesModel[]> => {
    return client.fetch(queryStr);
  };

  getSkills = (queryStr: string): Promise<SkillsModel[]> => {
    return client.fetch(queryStr);
  };
}

export default new SkillService();
