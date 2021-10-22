import axios from "axios";

const OGRENCİ_API_BASE_URL="http://localhost:8080/api/v1/ogrenci";

//import httpClient from "../http-common";

class OgrenciServis{

    getOgrenciler(){
        return axios.get(OGRENCİ_API_BASE_URL);
    }

    OgrenciOlustur(ogrenci){
        return axios.post(OGRENCİ_API_BASE_URL, ogrenci); 
    }

    getOgrenciById(ogrenciId){
        return axios.get(OGRENCİ_API_BASE_URL + '/' + ogrenciId);
    }
    updateOgrenci(ogrenci , ogrenciId){
        return axios.put(OGRENCİ_API_BASE_URL+'/'+ ogrenciId, ogrenci);
    }
    deleteOgrenci(ogrenciId){
        return axios.delete(OGRENCİ_API_BASE_URL+ "/" + ogrenciId);
    }

}
export default new OgrenciServis()
//const getAll = () => {
//    return httpClient.get('/employees');
//}

//const create = data => {
//    return httpClient.post("/employees", data);
//}

//const get = id => {
//    return httpClient.get(`/employees/${id}`);
//}

//const update = data => {
//    return httpClient.put('/employees', data);
//}

//const remove = id => {
//    return httpClient.delete(`/employees/${id}`);
//}
//export default { getAll, create, get, update, remove };