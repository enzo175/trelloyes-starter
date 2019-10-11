import React from 'react'
import pt from 'prop-types' // where is this being imprted from exactly
import Card from './card'
class List extends React.Component {
    // ^^ i need to go over what this does again 
    static propTypes = {
        header: pt.string.isRequired,
        cards: pt.array.isRequired,
    }
    // i need this ^^ explained to me. Where does the headder come from and when 
    // referring to cards are ww refering to the cards.js
    render() {
        return (
            <section class="List">
                        <header class="List-header">
                            <h2>{this.props.header}</h2>
                            /* What are we referring ot up here^^ */
                        </header>
                        <div class="List-cards">
                            <div class="Card">
                                <button type="button">delete</button>
                                <h3>First card</h3>
                                /* where did the rest of the cards come form*/
                                <p>lorem ipsum</p>
                            </div>
                            <div class="Card">
                                <button type="button">delete</button>
                                <h3> {props.cards.map((card) =>
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    content={card.content}
                                    />
                                    )}</h3>
                                <p>lorem ipsum</p>
                            </div>
                           
                            <button type="button" class="List-add-button">
                                + Add Random Card
                    </button>
                        </div>
                    </section>
        )
    }
}
export default List