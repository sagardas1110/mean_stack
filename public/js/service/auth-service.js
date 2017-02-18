'use strict';

MovieApplication.$inject = ['$http'];


function MovieApplication($http) {
    var _this = this;

    // create user variable
    var user = null;

    // return available functions for use in the controllers
    return ({
        isLoggedIn: isLoggedIn,
        getUserStatus: getUserStatus,
        login: login,
        logout: logout,
        register: register
    });

    function isLoggedIn() {
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    function getUserStatus() {
        return $http.get('/user/status')
            // handle success
            .then(function(data) {
                if (data.val) {
                    user = true;
                } else {
                    user = false;
                }
            })
            // handle error
            .catch(function(data) {
                user = false;
            });
    }

    function login(username, password, $q) {
        // create a new instance of deferred
        var deferred = $q.defer();
        // send a post request to the server
        $http.post('/user/login', { username: username, password: password })
            // handle success
            .then(function(data) {
                if (data.status === 200 && data.data.val) {
                    user = true;
                    deferred.resolve();
                } else {
                    user = false;
                    deferred.reject();
                }
            })
            // handle error
            .catch(function(data) {
                user = false;
                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }

    function logout($q) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a get request to the server
        $http.get('/user/logout')
            // handle success
            .then(function(data) {
                user = false;
                deferred.resolve();
            })
            // handle error
            .catch(function(data) {
                user = false;
                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }

    function register(username, password, $q) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('/user/register', { username: username, password: password })
            // handle success
            .then(function(data) {
                if (data.status === 200 && data.data.val) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            })
            // handle error
            .catch(function(data) {
                deferred.reject();
            });

        // return promise object
        return deferred.promise;

    }

}
module.exports = MovieApplication;