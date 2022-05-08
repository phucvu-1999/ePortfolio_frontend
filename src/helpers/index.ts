import { RETURN_TYPE } from "../constants/returnType";
import { client } from "../client";

export const getServiceData = (queryStr: string): Promise<RETURN_TYPE> => {
  return client.fetch(queryStr);
};
