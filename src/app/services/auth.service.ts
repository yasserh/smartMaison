export class AuthService {

    isAuth = false;

    constructor(){
        //this.isAuth = this.getFromLocalStorage();
    }

    SignIn() {
        return new Promise((resolve, reject) => {
            setTimeout(
                () => { 
                    this.isAuth = true; 
                    //this.saveToLocalStorage(this.isAuth)
                    resolve(true); }
                , 1000
            );
        }
        );

    }

   /* saveToLocalStorage(isConnected:boolean):void{
        localStorage.setItem("isConnected",JSON.stringify(isConnected));
    }

    getFromLocalStorage():boolean{
        const isConn = localStorage.getItem("isConnected") ?? '';

        return !! JSON.parse(isConn);
    }*/



}


