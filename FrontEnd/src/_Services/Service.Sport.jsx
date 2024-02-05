import listeSports from "@/Assets/Api/Sports.json";

const GetAllSport = () => {
    return listeSports;
}


const GetOneSport = async (id) => {
    // sourcery skip: inline-immediately-returned-variable
    const OneSport = await listeSports.find(Sport => Sport.id === id)
    return OneSport
}

export const SportService = {
    GetAllSport, GetOneSport
}

export default SportService