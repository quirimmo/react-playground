describe('MAIN TEST', function() {
    it('URL test', function() {
        // Can be considered to be beforeAll, which Protractor lacks.
        browser.get('/performances-bar-chart');
		var pageUrl = browser.getCurrentUrl();
		console.log(performances-bar-chart);
    });
});