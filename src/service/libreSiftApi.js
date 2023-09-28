import { post } from "./http";

const uploadDocs = async (data) => {
  try {
    return await post(`uploadUserDocsAPI/`, data);
  } catch (err) {
    return err;
  }
};
const chatDocsApi = async (data) => {
  try {
    return await post(`chatWithDocsAPI/`, data);
  } catch (err) {
    return err;
  }
};

export { uploadDocs, chatDocsApi };
