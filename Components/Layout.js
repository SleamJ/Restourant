import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import Link from 'next/link'

export default class MenuExampleInverted extends Component {

    

  render() {

    return (
        <Menu inverted style={{borderRadius: 0}}>
            <Container>
                <Link passHref href='/'>
                    <Menu.Item name='Home'/>
                </Link>
                <Link passHref href='/tags'>
                    <Menu.Item name='Tags'/>
                </Link>
            </Container>
        </Menu>
    )
  }
}