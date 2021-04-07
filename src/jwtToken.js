import tk from 'jsonwebtoken'

class jwtToken {
    static key = 'secret';
    
    static encode(payload) {
        return tk.sign(payload, jwtToken.key);
    }
    static decode(token){
        return tk.decode(token,{key:jwtToken.key});
    }

}
export default jwtToken;