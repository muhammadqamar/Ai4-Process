import { post } from "./http";


const storeRequirement = async (data) => {
    try {
        return await post(`storeRequirements/`, data);
    } catch (err) {
        return err;
    }
};

const runRevision = async (data) => {
    try {
        return await post(`run_revision/`, data);
    } catch (err) {
        return err;
    }
};

export { storeRequirement, runRevision }