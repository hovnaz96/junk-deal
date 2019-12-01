import AuthRepository from './authRepository';

const repositories = {
    auth        : AuthRepository,
    admin : {

    }
}

export const RepositoryFactory = {
    get      : name => repositories[name],
    getAdmin : name => repositories['admin'][name]
}