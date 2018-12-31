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
        {
            name: 'Live Channels',
            url: '/liveChannels',
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
            url: '/dramas',
            icon: 'icon-live',
            defaultOpen: false,
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
            url: '/movies',
            icon: 'icon-live',
            defaultOpen: false,
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
