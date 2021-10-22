import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	const iconSize = 24;

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<DisplayBox>
				{displayedValue}
				<IconWrapper size={iconSize}>
					<Icon id="chevron-down" strokeWidth={2} size={iconSize} />
				</IconWrapper>
			</DisplayBox>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	/* Allow the select to span the full height in Safari */
	-webkit-appearance: none;
`;

const DisplayBox = styled.div`
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	border-radius: 8px;
	padding: 12px 16px;
	padding-right: 52px;

	${NativeSelect}:focus + & {
		outline: 1px dotted ${COLORS.primary};
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div.attrs(({ size }) => ({
	style: {
		'--size': `${size}px`,
	},
}))`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	width: var(--size);
	height: var(--size);
	pointer-events: none;
`;

export default Select;
