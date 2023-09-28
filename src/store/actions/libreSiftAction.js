import { chatDocsApi, uploadDocs } from "../../service/libreSiftApi";


const chatDocsAction = async (data) => {
    const result = await chatDocsApi(data)

    return result
}


const uploadDocsAction = async (data) => {
    const result = await uploadDocs(data);

    return result;
};
export { chatDocsAction, uploadDocsAction }