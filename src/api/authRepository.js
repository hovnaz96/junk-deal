import Repository from './Repository';

const resource = 'auth';

export default {
    login(payload)      {return Repository.post(`${resource}/login`, payload);},
}