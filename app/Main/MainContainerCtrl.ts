module ayo.maincontainer{
    interface IMainContainerModel{
        name: string;
        distance: number
    }
    
    class MainContainerCtrl implements IMainContainerModel{    
        name: string;
        distance: number;
        constructor(){
            this.name ="Ayo Ayco";
            this.distance = 52;
        }
    }
    
    angular.module("ayoApp")
        .controller("MainContainerCtrl", MainContainerCtrl);
    
}