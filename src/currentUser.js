import jwtToken from "./jwtToken";
import cookie from "universal-cookie";
class User {

    static getid() {
        let ck = new cookie();
        let token = ck.get("token");
        let userid = jwtToken.decode(token);
        return userid;
    }


}
export default User;