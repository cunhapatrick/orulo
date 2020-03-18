import React from 'react';
import { shallow } from 'enzyme';

// component
import { HomeContainer } from './HomeContainer';

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
			<HomeContainer
				storeBuildings={{
					buildingSelected: {},
					total: 0,
					loaded: false,
					currentBuildings: [],
				}}
				storeFavorites={{ favorites: [], currentFavorites: [] }}
				selectBuilding={() => {}}
				favoritePage={() => {}}
				buildingsRequest={() => {}}
				addFavorite={() => {}}
				removeFavorite={() => {}}
			/>
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#home-container').length).toBeGreaterThan(0);
	});
});
