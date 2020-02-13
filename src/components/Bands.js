import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'

class Bands extends Component {

    renderBands = () => {
        return this.props.bands.map( band => <Band band={band} deleteBand={this.props.deleteBand} /> )
    }

    render() {
        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        deleteBand: bandId => dispatch({ type: 'DELETE_BAND', id: bandId })
    }
}

export default connect(null, mapDispatchToProps)(Bands)