const app = new Vue({
    el: '.comment-box',
    methods: {
        addComment() {
            const date = new Date().toLocaleDateString();
            const newComment = {
                name: this.newComment.name,
                date: date,
                comment: this.newComment.comment
            };
            this.comments.push(newComment);
            this.newComment.name = '';
            this.newComment.comment = '';
        }
    },
    data: {
        comments: [
            {
                name: 'Udula',
                date: '02.04.2023',
                comment: 'Gammk bosa'
            },
            {
                name: 'Vidura',
                date: '02.04.2023',
                comment: 'Cupirii'
            },
            {
                name: 'S Cap',
                date: '02.04.2023',
                comment: 'Lassanayii'
            }
        ],
        newComment: {
            name: '',
            comment: ''
        }
    }
});
