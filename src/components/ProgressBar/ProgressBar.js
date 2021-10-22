/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		height: 8,
		padding: 0,
		radius: 4,
	},
	medium: {
		height: 12,
		padding: 0,
		radius: 4,
	},
	large: {
		height: 16,
		padding: 4,
		radius: 8,
	},
};

const ProgressBar = ({ value, size }) => {
	const sizeStyles = SIZES[size];

	return (
		<div style={{ width: '400px' }}>
			<Wrapper sizeStyles={sizeStyles}>
				<VisuallyHidden>{value}%</VisuallyHidden>
				<BarWrapper>
					<Bar sizeStyles={sizeStyles} value={value} />
				</BarWrapper>
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div.attrs(({ sizeStyles }) => ({
	style: {
		'--padding': sizeStyles.padding + 'px',
		'--radius': sizeStyles.radius + 'px',
	},
}))`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--radius);
	padding: var(--padding);
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	/* Trim off corners when progress bar is near-full. */
	overflow: hidden;
`;

const Bar = styled.div.attrs(({ sizeStyles, value }) => ({
	style: {
		'--width': value + '%',
		'--height': sizeStyles.height + 'px',
	},
}))`
	width: var(--width);
	height: var(--height);
	background-color: ${COLORS.primary};
	border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
