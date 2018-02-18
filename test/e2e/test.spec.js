describe('MAIN TEST', () => {
	beforeEach(() => {
		return browser.get('/#/performances-bar-chart');
	});

	it('URL test', () =>
		browser.getTitle().should.become('Performances Bar Chart'));
});
