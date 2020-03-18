import React from 'react';
import { shallow } from 'enzyme';

// component
import { BuildingContainer } from './BuildingContainer';

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
		wrapper = shallow(
			<BuildingContainer storeBuildings={{ buildingSelected: {} }} />
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#building').length).toBeGreaterThan(0);
	});
});
