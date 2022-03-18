import http from './config';

class Schedules {

    getAll() {
        return http.get("/GetAll");
    }
    post(values) {
        return http.post('/Insert', values);
    }
    update(id, values) {
        return http.patch(`/Update/${id}`, values)
    }
    delete(id) {
        return http.delete(`/Delete/${id}`);
    }    
}

export default new Schedules;