describe('Our first protractor test', function() {
    it('to check the page title of our angular app', function() {
        browser.ignoreSynchornization = true;
        browser.get("http://localhost:4200");
        browser.driver.getTitle().then(function(pageTitle){
            expect(pageTitle).toEqual("ProductAppTest");
        });
    });
});