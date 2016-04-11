var ayo;
(function (ayo) {
    var maincontainer;
    (function (maincontainer) {
        var MainContainerCtrl = (function () {
            function MainContainerCtrl() {
                this.name = "Ayo Ayco";
                this.distance = 52;
            }
            return MainContainerCtrl;
        })();
        angular.module("ayoApp")
            .controller("MainContainerCtrl", MainContainerCtrl);
    })(maincontainer = ayo.maincontainer || (ayo.maincontainer = {}));
})(ayo || (ayo = {}));
