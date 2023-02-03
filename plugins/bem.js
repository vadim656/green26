import Vue from 'vue';
import { camelToKebab, priceFormatting } from '@/tools';

Vue.mixin({
    methods: {
        priceFormatting,
        bem(name, mods = {}) {
            const result = [name];

            for (let [mod, value] of Object.entries(mods)) {
                if (value === true) {
                    result.push(`${name}_${camelToKebab(mod)}`);
                } else if (value) {
                    result.push(`${name}_${camelToKebab(mod)}_${camelToKebab(value)}`);
                }
            }

            return result.join(' ');
        },
        scrollLock(status) {
            status ? document.querySelector('html').classList.add('scroll-lock') : document.querySelector('html').classList.remove('scroll-lock');
        },
    }
});