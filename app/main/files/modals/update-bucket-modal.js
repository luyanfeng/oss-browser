angular.module('web')
  .controller('updateBucketModalCtrl', ['$scope','$uibModalInstance', 'item','callback','ossSvs2','safeApply','Const',
    function ($scope, $modalInstance, item, callback, ossSvs2, safeApply, Const) {

      var bucketACL= angular.copy(Const.bucketACL);
      var regions= angular.copy(Const.regions);

      angular.extend($scope, {
        bucketACL: angular.copy(Const.bucketACL),
        regions: angular.copy(Const.regions),
        cancel: cancel,
        onSubmit: onSubmit,
        item: item
      });

      ossSvs2.getBucketACL(item.region, item.name).then(function(result){
        $scope.item.acl = result.acl;
        safeApply($scope);
      });

      function cancel() {
        $modalInstance.dismiss('cancel');
      }

      function onSubmit(form) {
        if (!form.$valid) return;
        var item = angular.copy($scope.item);

        ossSvs2.updateBucketACL(item.region, item.name, item.acl).then(function(result){
           callback();
           cancel();
        });
      }

    }])
;
