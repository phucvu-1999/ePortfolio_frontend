import { client } from "../client";
import { WorksModel } from "../models/works";

class WorkService {
  getWorks = (query: string): Promise<WorksModel[]> => {
    return client.fetch(query);
  };
}

export default new WorkService();
