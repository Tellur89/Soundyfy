import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import AddArtist from '.';

describe('Add Component', () => {
	beforeEach(() => {
		render(<AddArtist />);
	});

	afterEach(() => {
		cleanup();
	});

	it('Displays heading with name of the component', () => {
		const element = screen.getByRole('heading');
		expect(element).toBeInTheDocument();
	});
});
