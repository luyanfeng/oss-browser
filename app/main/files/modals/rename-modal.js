angular.module('web')
  .controller('renameModalCtrl', ['$scope','$uibModalInstance','item','currentInfo', 'callback','ossSvs2','Toast',
    function ($scope, $modalInstance, item, currentInfo, callback, ossSvs2, Toast) {


      angular.extend($scope, {
        currentInfo: currentInfo,
        item: item,
        cancel: cancel,
        onSubmit: onSubmit,
        reg: {
          folderName: /^[^\/]+$/
        }
      });

      function cancel() {
        $modalInstance.dismiss('close');
      }

      function onSubmit(form) {
        if (!form.$valid)return;

        if($scope.item.isFolder){
          // var newPath = currentInfo.key==''?item.name: (currentInfo.key.replace(/(\/$)/,'') +'/' + item.name);
          // ossSvs2.moveFolder(currentInfo.region, currentInfo.bucket, item.path, newPath).then(function(){
          //   Toast.success('重命名成功');
          //   callback();
          //   cancel();
          // });
        }
        else{
          var newPath = currentInfo.key==''?item.name: (currentInfo.key.replace(/(\/$)/,'') +'/' + item.name);

          ossSvs2.moveFile(currentInfo.region, currentInfo.bucket, item.path, newPath).then(function(){
            Toast.success('重命名成功');
            callback();
            cancel();
          });
        }

      }
    }])
;
