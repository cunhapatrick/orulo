import { formatCurrency } from './currency';

describe('Unit test format currency properly', () => {
	let number;

	beforeEach(() => {
		number = 0;
	});

	it('Should format the value to currency mask default', () => {
		expect(formatCurrency(number)).toBe('R$ 0,00');
		number = 1000000;
		expect(formatCurrency(number)).toBe('R$ 1.000.000,00');
	});

	it('Should work with non number type on parameter', () => {
		expect(formatCurrency('')).toBe('R$ 0,00');
	});

	it('Should overwriting default when receive all parameters', () => {
		expect(formatCurrency(number, 3)).toBe('R$ 0,000');
		expect(formatCurrency(number, 2, '$')).toBe('$ 0,00');
	});

	it('Should fail receiving wrong type of parameters on decimals', () => {
		expect(formatCurrency(number, 'x')).toBe('R$ 0');
	});
});
