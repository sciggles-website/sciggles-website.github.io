fallback.load({
    page_css: "public/styles.css",

    bootstrapCss: {
        urls: [
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css',
            'public/bootstrap.min.css'
        ],
        integrity: 'sha512-rO2SXEKBSICa/AfyhEK5ZqWFCOok1rcgPYfGOqtX35OyiraBg6Xa4NnBJwXgpIRoXeWjcAmcQniMhp22htDc6g==',
        crossorigin: 'anonymous'
    },

    jQuery: {
        urls: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js',
            'public/jquery.slim.min.js'
        ],
        integrity: 'sha512-/DXTXr6nQodMUiq+IUJYCt2PPOUjrHJ9wFrqpJ3XkgPNOZVfMok7cRw6CSxyCQxXn6ozlESsSh1/sMCTF1rL/g==',
        crossorigin: 'anonymous'
    },

    'jQuery.fn.modal': { // Bootstrap
        urls: [
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js',
            'public/bootstrap.min.js'
        ],
        integrity: 'sha512-I5TkutApDjnWuX+smLIPZNhw+LhTd8WrQhdCKsxCFRSvhFx2km8ZfEpNIhF9nq04msHhOkE8BMOBj5QE07yhMA==',
        crossorigin: 'anonymous'
    },

    Popper: {
        urls: [
            'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.4/umd/popper.min.js',
            'public/popper.min.js'
        ],
        integrity: 'sha512-eUQ9hGdLjBjY3F41CScH3UX+4JDSI9zXeroz7hJ+RteoCaY+GP/LDoM8AO+Pt+DRFw3nXqsjh9Zsts8hnYv8/A==',
        crossorigin: 'anonymous'
    },
}, {
    shim: {
        Popper: ['JQuery'],
        'jQuery.fn.modal': [ 'jQuery', 'Popper' ] // bootstrap
    }
});
