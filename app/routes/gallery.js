import Route from '@ember/routing/route';

export default class GalleryRoute extends Route {
    model() {
        return [
            { id: 1, title: 'Photo 1', url: '/photos/1.jpg' },
            { id: 2, title: 'Photo 2', url: '/photos/2.jpg' },
            { id: 3, title: 'Photo 3', url: '/photos/3.jpg' },
            { id: 4, title: 'Photo 4', url: '/photos/4.jpg' },
            { id: 5, title: 'Photo 5', url: '/photos/5.jpg' },
            { id: 6, title: 'Photo 6', url: '/photos/6.jpg' },
            { id: 7, title: 'Photo 7', url: '/photos/7.jpg' },
            { id: 8, title: 'Photo 8', url: '/photos/8.jpg' },
            { id: 9, title: 'Photo 9', url: '/photos/9.jpg' }
          ];
    }
}
