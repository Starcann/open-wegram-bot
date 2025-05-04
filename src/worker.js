/**
 * Open Wegram Bot - Cloudflare Worker Entry Point
 * A two-way private messaging Telegram bot
 *
 * GitHub Repository: https://github.com/wozulong/open-wegram-bot
 */

import {handleRequest} from './core.js';

export default {
    async fetch(request, env, ctx) {
        const config = {
            prefix: env.PREFIX || 'starcanbot',
            secretToken: env.SECRET_TOKEN || 'L1QfYpBtc0e5GXts'
        };

        return handleRequest(request, config);
    }
};
