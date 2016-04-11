module ayo.app{
    interface IAyoAppModel{
        name: string;
        distance: number;
    }
    class AyoAppCtrl{
        constructor(public name: string, public distance: number){
            
        }
        
        public getName(){
            return this.distance;
        }
    }
    
    angular.module("ayoApp")
    .controller("ayoAppCtrl", AyoAppCtrl);
    
}