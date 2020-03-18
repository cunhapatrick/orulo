import React from 'react';
import { shallow } from 'enzyme';

// component
import NotFound404 from './NotFound404';

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: () => {},
		goBack: () => {},
	}),
	Link: 'a',
}));

describe('Component test', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NotFound404 />);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#not-found').length).toBeGreaterThan(0);
	});
});
