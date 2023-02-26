import {userStore} from "@/app/stores/User";

class UserStore {
    public getTheme(): string {
        const store = userStore();
        return store.getTheme;
    }

    public getLanguage(): string {
        const store = userStore();
        return store.getLanguage;
    }

    public setTheme(theme: string): void {
        const store = userStore();
        return store.setTheme(theme);
    }

    public setLanguage(lang: string): void {
        const store = userStore();
        return store.setLanguage(lang);
    }
}

export default new UserStore();