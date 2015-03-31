({
    block: 'page',
    title: 'Rambler test app',
    favicon: '/favicon.ico',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods: { theme : 'islands' },
    content: [
        {
            block: 'main',
            content: [
                {
                    block: 'header-wrapper',
                    content: {
                        block: 'header',
                        content: [
                            {
                                block: 'logo',
                                content: { elem: 'image' }
                            },
                            {
                                block: 'menu',
                                content: [
                                    { elem: 'item', content:'HOME' },
                                    { elem: 'item', content: 'FEATURES' },
                                    { elem: 'item', content: 'TESTIMONIALS' },
                                    { elem: 'item', content: 'PRICING' },
                                    { elem: 'item', content: 'CONTACT' }
                                ]
                            },
                            {
                                block: 'login-container',
                                content: [
                                    { elem: 'login', content: 'LOGIN' },
                                    { elem: 'singup', content: 'SINGUP' }
                                ]
                            }
                        ]
                    }
                },

                {
                    block: 'article-wrapper',
                    content: [
                        {
                            block: 'aside-container',
                            content: [
                                {
                                    block: 'categories',
                                    content: [
                                        { elem: 'header', content: 'Categories' },
                                        { block: 'category', content: 'Dedicated Servers' },
                                        { block: 'category', content: 'Managed Hosting' },
                                        { block: 'category', content: 'News and Updates' },
                                        { block: 'category', content: 'New Features' },
                                        { block: 'category', content: 'Domain Registration' },
                                        { block: 'category', content: 'Server Location' }
                                    ]
                                },
                                {
                                    block: 'text-widget',
                                    content: [
                                        { elem: 'header', content: 'Text Widget' },
                                        { elem: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis pulvinar, tempor odio sed, adipiscing dolor.' },
                                        { elem: 'paragraph', content: 'Donec nisi velit, malesuada id dolor non, elementum auctor arcu. Cras consectetur sapien et purus posuere, ac hendrerit.' }
                                    ]
                                },
                                {
                                    block: 'archives',
                                    content: [
                                        { elem: 'header', content: 'Archieves' },
                                        { elem: 'monthyear', content: 'May 2013' },
                                        { elem: 'monthyear', content: 'April 2013' },
                                        { elem: 'monthyear', content: 'March 2013' },
                                        { elem: 'monthyear', content: 'February 2013' },
                                        { elem: 'monthyear', content: 'January 2013' },
                                        { elem: 'monthyear', content: 'December 2012' },
                                        { elem: 'monthyear', content: 'November 2012' },
                                        { elem: 'monthyear', content: 'October 2012' },
                                        { elem: 'monthyear', content: 'September 2012' },
                                        { elem: 'monthyear', content: 'August 2012' }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'article',
                            content: [
                                { elem: 'header', content: 'Managed Hosting vs Dedicated Hosting' },
                                {
                                    elem: 'extra',
                                    content: [
                                        'Posted by ',
                                        { elem: 'by', content: 'Surjith SM' },
                                        ' on ',
                                        { elem: 'date', content: '17 Jul 2013' },
                                        '. ',
                                        { elem: 'comments', attrs: { href: '#' }, content: '16 comments' }
                                    ]
                                },
                                { elem: 'promo' },
                                {
                                    elem: 'text',
                                    content: [
                                        { elem: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis pulvinar, tempor odio sed, adipiscing dolor. Donec nisi velit, malesuada id dolor non, elementum auctor arcu. Cras consectetur sapien et purus posuere, ac hendrerit nunc luctus. Etiam adipiscing et sapien a accumsan. Integer gravida vestibulum eros at elementum. Maecenas a velit hendrerit, tristique tortor lacinia, vehicula sapien. Cras cursus sodales posuere. Sed viverra mi mauris, at dapibus orci varius non.' },
                                        { elem: 'paragraph', content: 'Sed adipiscing faucibus quam, at mollis sapien imperdiet at. Curabitur fringilla eget augue id ullamcorper. Pellentesque et pretium nisl, sit amet condimentum diam. Sed tempor scelerisque magna ut volutpat. Duis laoreet tellus non ipsum vestibulum bibendum. Duis ac leo urna. Suspendisse accumsan erat sed ligula pellentesque tristique. Maecenas volutpat felis libero, eget pretium ipsum condimentum sit amet. Aenean nec fermentum metus. Integer laoreet lectus adipiscing ante molestie, a viverra enim vulputate. Donec ut porta elit. Vestibulum tristique pellentesque quam in euismod. Duis facilisis feugiat rhoncus. Nulla quis diam congue, vulputate nibh et, placerat erat. Proin et enim eleifend, pharetra sem in, adipiscing sapien.' },
                                        { elem: 'paragraph', content: 'Sed ultricies ullamcorper risus non interdum. Nam sapien quam, ultricies vitae erat id, pretium pellentesque risus. Sed blandit quam sed ante elementum malesuada. Ut placerat sem augue, a sollicitudin ligula suscipit id. Praesent fringilla metus ac quam suscipit, hendrerit viverra arcu ornare. Nunc fringilla, odio non consequat molestie, mi magna egestas magna, et tincidunt urna ante ut leo. Vivamus arcu mauris, vulputate sed varius posuere, volutpat ut nisl. Quisque vitae risus sem. Duis eget facilisis arcu, a gravida dolor.' },
                                        { elem: 'paragraph', content: 'Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. Nunc a elementum lectus, sed blandit elit. Phasellus sapien arcu, luctus sed nibh eget, pharetra ullamcorper dui. Maecenas eget massa ut felis lobortis cursus et id lacus. Nullam laoreet metus ac leo elementum semper. Ut laoreet arcu vel tellus vehicula convallis. Phasellus augue elit, tincidunt sit amet dolor eu, gravida egestas nibh. Sed velit ipsum, accumsan' }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'clear'
                        },
                        {
                            block: 'comments-wrapper',
                            content: [
                                {
                                    block: 'comments-container-section',
                                    content: [
                                        { elem: 'count', content: '110 Comments' },
                                        {
                                            block: 'comments-form-container',
                                            content: [
                                                {
                                                    block: 'contents-form',
                                                    content: [
                                                        { elem: 'full-name' },
                                                        { elem: 'email' },
                                                        { elem: 'message' },
                                                        { elem: 'submit', content: 'Submit Content' },
                                                        { elem: 'clear' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'comments-container',
                                            content: [
                                                {
                                                    block: 'comment',
                                                    mods: { 'level-0': true },
                                                    content: [
                                                        {
                                                            elem: 'avatar',
                                                            content: { elem: 'profile-image' }
                                                        },
                                                        { elem: 'full-name', content: 'Michael' },
                                                        { elem: 'message', content: 'Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. ' },
                                                        { elem: 'time', content: '10 minutes ago.' },
                                                        { elem: 'reply', content: 'Reply' },
                                                        { elem: 'clear' }
                                                    ]
                                                },
                                                {
                                                    block: 'comment',
                                                    mods: { 'level-1': true },
                                                    content: [
                                                        {
                                                            elem: 'avatar',
                                                            content: { elem: 'profile-image' }
                                                        },
                                                        { elem: 'full-name', content: 'Sara' },
                                                        { elem: 'message', content: 'Donec fringilla massa in imperdiet pretium. Etiam vel ligula sagittis, consectetur est at, mattis nibh. Aliquam dignissim consequat sapien id eleifend. Integer tincidunt vitae sapien vel semper. Mauris vitae suscipit sapien. Etiam imperdiet tempus eros in facilisis. Cras quis dolor ultrices, vehicula mi vel, sollicitudin orci. ' },
                                                        { elem: 'time', content: '10 minutes ago.' },
                                                        { elem: 'reply', content: ' Reply' },
                                                        { elem: 'clear' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    block: 'footer-wrapper',
                    content: {
                        block: 'footer',
                        content: 'TODO'
                    }
                }
            ]
        }
    ]
})
