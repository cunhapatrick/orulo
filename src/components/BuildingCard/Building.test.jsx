import React from 'react';
import { shallow } from 'enzyme';

// Component
import BuildingCard from './BuildingCard';

let wrapper;

describe('Component test', () => {
	beforeEach(() => {
		wrapper = shallow(<BuildingCard building={{}} />);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('.product-card').length).toBeGreaterThan(0);
	});
});
