import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		height: 24,
		borderSize: 1,
		fontSize: 14 / 16,
		padding: 4,
		paddingLeft: 24,
		iconStyles: {
			strokeWidth: 1,
			iconSize: 16,
		},
	},
	large: {
		height: 36,
		borderSize: 2,
		fontSize: 18 / 16,
		padding: 8,
		paddingLeft: 36,
		iconStyles: {
			strokeWidth: 2,
			iconSize: 24,
		},
	},
};

const IconInput = ({ label, icon, width = 250, size, ...rest }) => {
	const sizeStyles = SIZES[size];
	const { iconSize, strokeWidth } = sizeStyles.iconStyles;

	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper sizeStyles={sizeStyles}>
				<Icon id={icon} size={iconSize} strokeWidth={strokeWidth} />
			</IconWrapper>
			<TextInput sizeStyles={sizeStyles} width={width} {...rest} />
		</Wrapper>
	);
};

const Wrapper = styled.label`
	color: ${COLORS.gray700};
	display: block;
	position: relative;

	&:hover {
		color: ${COLORS.black};
	}
`;

const TextInput = styled.input.attrs(({ sizeStyles, width }) => ({
	style: {
		'--width': `${width}px`,
		'--height': `${sizeStyles.height}px`,
		'--fontSize': `${sizeStyles.fontSize}rem`,
		'--padding': `${sizeStyles.padding}px`,
		'--paddingLeft': `${sizeStyles.paddingLeft}px`,
		'--borderSize': `${sizeStyles.borderSize}px`,
	},
}))`
	width: var(--width);
	height: var(--height);
	color: inherit;
	font-weight: 700;
	font-size: var(--fontSize);
	padding: var(--padding);
	padding-left: var(--paddingLeft);
	border: none;
	border-bottom: var(--borderSize) solid ${COLORS.black};
	outline-offset: 2px;

	&:focus {
		outline: 2px solid ${COLORS.primary};
		outline: 5px auto -webkit-focus-ring-color;
	}

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}
`;

const IconWrapper = styled.div.attrs(({ sizeStyles }) => ({
	style: {
		'--iconSize': `${sizeStyles.iconStyles.iconSize}px`,
	},
}))`
	width: var(--iconSize);
	height: var(--iconSize);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	margin: auto 0;
	pointer-events: none;
`;

export default IconInput;
