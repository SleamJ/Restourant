import React from 'react'
import {Container, Grid, Card, Image} from 'semantic-ui-react'

const divStyle = {
    marginTop: '50px'
}

const Recipes = props => (
    <Container>
        <Grid style={divStyle}>
            {props.recipes.map((recipe) =>{
                return (
                    <Grid.Column key={recipe.title}>
                        <Card
                            image = {recipe.image_url}
                            header = {recipe.title}
                        />
                    </Grid.Column>
                )
            })}
        </Grid>
    </Container>
)

export default Recipes