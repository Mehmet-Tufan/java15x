const prodUrl = 'www.java15x.com'
const devUrl = 'http://localhost:9090/v1/dev'

const server = devUrl;


const apis = {
    authService: server+'/user',
    userService: server+'/user',
    postSevice: server+'/post'
}


export default apis