import { helpers } from 'vuelidate/lib/validators';

export function phone(value){
    let v = value.match(/\d/g);
    return !helpers.req(v) || v.length >= 10;
}