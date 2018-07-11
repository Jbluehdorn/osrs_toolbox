import VueRouter from 'vue-router'

export default new VueRouter({
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: [{
        path: '/',
        component: require('./components/Home')
    }, {
        path: '/SlayerPoints',
        component: require('./components/SlayerPoints')
    }]
})