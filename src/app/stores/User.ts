import {defineStore} from 'pinia';
import type IUser from "@/app/stores/IUser";

export const userStore = defineStore('user', {
    state: (): IUser => {
        return {
            language: 'en',
            theme: 'sky',
        };
    },
    persist: true,
    getters: {
        getLanguage(state): string {
            return state.language;
        },
        getTheme(state): string {
            return state.theme;
        },
    },
    actions: {
        setLanguage(lang: string): void {
            this.language = lang;
        },
        setTheme(theme: string): void {
            this.theme = theme;
        },
    }
});

