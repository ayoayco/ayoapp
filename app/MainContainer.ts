module ayo.app{
    interface IMainContainerModel{
        name: string;
        distance: number
    }
    
    class MainContainerCtrl implements IMainContainerModel{       
        constructor(public name: string, public distance: number){
            var ctrl = this;
            ctrl.name ="Ayo Ayco";
            ctrl.distance = 52;
        }
    }
    
    angular.module("ayoApp")
        .controller("MainContainerCtrl", MainContainerCtrl);
    
}