import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedIn = false;

    isAuthenticated(): Promise<boolean>{
        const output: Promise<boolean> = new Promise(
            (resolve) => {
                setTimeout(
                    () => {
                        resolve(this.loggedIn);
                    }
                , 800);
            }
        );
        return output;
    }

    logIn(): void {
        this.loggedIn = true;
    }

    logOut(): void {
        this.loggedIn = false;
    }
}
