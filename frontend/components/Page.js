import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
	red: '#FF0000',
	black: '#393939',
	gray: '#3A3A3A',
	lightGray: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgbqa(0, 0, 0, 0.09)'
}

const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};
`

const Inner = styled.div`
	background: white;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`

export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		)
	}
}
