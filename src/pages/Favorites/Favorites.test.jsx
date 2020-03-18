import React from 'react';
import { shallow } from 'enzyme';

// component
import { FavoritesContainer } from './FavoritesContainer';

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
			<FavoritesContainer
				storeBuildings={{ buildingSelected: {} }}
				storeFavorites={{ favorites: [], currentFavorites: [] }}
				selectBuilding={() => {}}
				favoritePage={() => {}}
			/>
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#favorites').length).toBeGreaterThan(0);
	});
});
