var aMailServices = angular.module("AMail", ['ngRoute']);

aMailServices.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        'controller': 'ListController',
        'templateUrl': 'list.html'
    })
    .when('/view/:id', {
        'controller': 'DetailController',
        'templateUrl': 'detail.html'
    })
    .otherwise({
        'redirectTo': '/'
    });
});

messages = [
    {
        id:0,
        sender: 'jean@somecompany.com',
        subject: 'Hi there, old friend',
        date: 'Dec 7, 2013 12:32:00',
        recipients: ['greg@somecompany.com'],
        message: 'Hey, we should get together for lunch sometime and catch up. There are many things we should collaborate on this year.'
    },
    {
        id:1,
        sender: '1jean@somecompany.com',
        subject: '1Hi there, old friend',
        date: 'Dec 8, 2013 12:32:00',
        recipients: ['greg1@somecompany.com'],
        message: '1Hey, we should get together for lunch sometime and catch up. There are many things we should collaborate on this year.'
    },
    {
        id:2,
        sender: '2 jean@somecompany.com',
        subject: '2 Hi there, old friend',
        date: 'Dec 9, 2013 12:32:00',
        recipients: ['2 greg@somecompany.com'],
        message: '2 Hey, we should get together for lunch sometime and catch up. There are many things we should collaborate on this year.'
    }
];

function ListController($scope) {
    $scope.messages = messages;
}

function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}