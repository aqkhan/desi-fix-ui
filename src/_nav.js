export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',

            },
        },
        // {
        //   title: true,
        //   name: 'Theme',
        //   wrapper: {
        //     element: '',
        //     attributes: {}
        //   },
        //   class: ''             // optional class names space delimited list for title item ex: "text-center"
        // },
        {
            name: 'Live Channels',
            url: '/',
            icon: 'icon-live',
            children: [
                {
                    name: 'Channels',
                    url: '/channelslist',
                    icon: 'icon-list',
                },
                {
                    name: 'Add Channel',
                    url: '/addchannel',
                    icon: 'icon-plus',
                }

            ],
        },
        {
            name: 'Dramas',
            url: '/',
            icon: 'icon-live',
            children: [
                {
                    name: 'All Dramas',
                    url: '/dramalist',
                    icon: 'icon-list',
                },
                {
                    name: 'Add A Drama',
                    url: '/adddrama',
                    icon: 'icon-plus',
                }
            ],
        },
        {
            name: 'Movies',
            url: '/',
            icon: 'icon-live',
            children: [
                {
                    name: 'All Movies',
                    url: '/movielist',
                    icon: 'icon-list',
                },
                {
                    name: 'Add A Movie',
                    url: '/addmovie',
                    icon: 'icon-plus',
                }
            ],
        },
    ],
};
