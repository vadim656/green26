import general from '@/api/general';
import services from '@/api/services';
import projects from '@/api/projects';

export default ({ $axios, app, store }, inject) => {
    inject('api', {
        general: general($axios),
        services: services($axios),
        projects: projects($axios),
    });
}
