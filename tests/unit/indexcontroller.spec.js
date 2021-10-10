
describe('IndexController',function(){
    beforeEach(module('kisanApp'));
    beforeEach(module('ui.router'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller=_$controller_;
    }));

    describe('sessionStorage',function(){
        it('check the sessionStorage',function(){

        });

        expect(sessionStorage.getItem("status")).toEqual(false);
    });
});