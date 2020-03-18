import React from 'react';
import { shallow } from 'enzyme';

// Component
import BuildingCard from './BuildingCard';

let wrapper;

jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: () => {},
	}),
}));

describe('Component test', () => {
	beforeEach(() => {
		wrapper = shallow(<BuildingCard building={{}} selectBuilding={() => {}} />);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('.building-card').length).toBeGreaterThan(0);
	});
});
