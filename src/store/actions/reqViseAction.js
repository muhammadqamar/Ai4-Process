import { runRevision, storeRequirement } from "../../service/reqViseApi";


const runRevisionAction = async (data) => {
    const result = await runRevision(data)

    return result
}



const storeRequireAction = async (data) => {
    const result = await storeRequirement(data)

    return result
}

export { runRevisionAction, storeRequireAction }