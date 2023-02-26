import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/module/homepage/pages/Home.vue';
import Typer from '@/module/game/pages/Typer.vue';
import Briefing from '@/module/homepage/pages/Briefing.vue';
import Highscores from "@/module/homepage/pages/Highscores.vue";
import Settings from "@/module/homepage/pages/Settings.vue";
import Score from '@/module/game/pages/Score.vue';
import Name from './NameEnum';
import Path from './PathEnum';
import GameStoreService from "@/services/GameStore";
import GameState from "@/app/Enums/GameState";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    routes: [
        {
            path: Path.HOMEPAGE,
            name: Name.HOMEPAGE,
            component: Home,
        },
        {
            path: Path.BRIEFING,
            name: Name.BRIEFING,
            component: Briefing,
            beforeEnter: (to, from, next) => {
                const gameState: GameState = GameStoreService.getGameState();
                if(gameState !== GameState.GAME_START){
                    return next({name:Name.HOMEPAGE});
                } else {
                    next();
                }
            },
        },
        {
            path: Path.HIGHSCORES,
            name: Name.HIGHSCORES,
            component: Highscores
        },
        {
            path: Path.SETTINGS,
            name: Name.SETTINGS,
            component: Settings
        },
        {
            path: Path.TYPER,
            name: Name.TYPER,
            component: Typer,
            beforeEnter: (to, from, next) => {
                const gameState: GameState = GameStoreService.getGameState();
                if(gameState !== GameState.GAME_IN_PROGRESS){
                    return next({name:Name.HOMEPAGE});
                } else {
                    next();
                }
            },
        },
        {
            path: Path.SCORE,
            name: Name.SCORE,
            component: Score,
            beforeEnter: (to, from, next) => {
                const gameState: GameState = GameStoreService.getGameState();
                if(gameState !== GameState.GAME_END_WIN && gameState !== GameState.GAME_END_FAIL){
                    return next({name:Name.HOMEPAGE});
                } else {
                    next();
                }
            },
        },
    ]
});
export default router;
