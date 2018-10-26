import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled from 'styled-components'

const MyButon = styled.button`
  background: red;
  font-size: 100px;
`

export default class Page extends Component {
	render() {
		return (
			<div>
				<Meta />
				<Header />
				<MyButon>Click me!</MyButon>
				{this.props.children}
			</div>
		)
	}
}
