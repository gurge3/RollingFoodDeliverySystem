(function () {
    angular
        .module("RollingFood")
        .factory("ReviewService", ReviewService);

    function ReviewService($http) {
        return {
            "createReview": createReview,
            "findReviewByRestaurant": findReviewByRestaurant,
            "findReviewById": findReviewById,
            "updateReview": updateReview,
            "deleteReview": deleteReview
        };

        function createReview(review) {
            var url = "/api/project/review";
            return $http.post(url, review)
        }

        function findReviewByRestaurant(restaurant) {
            var url = "/api/project/review/restaurant?restaurant=" + restaurant;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findReviewById(reviewId) {
            var url = "/api/project/review/" + reviewId;
            return $http.get(url);
        }

        function updateReview(reviewId, newReview) {
            var url = "/api/project/review/" + reviewId;
            var data = {
                id: reviewId,
                newReview: newReview
            };
            return $http.put(url, data);
        }

        function deleteReview(reviewId) {
            var url = "/api/project/review/" + reviewId;
            return $http
                .delete(url);
        }
    }
})();