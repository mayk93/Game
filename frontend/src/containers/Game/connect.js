/**
 * Created by michael on 07/04/2018.
 */

import { connect } from 'react-redux'
import Component from './Game'
import { get_game_data, send_game_data } from '../../store/game_data'

const mapStateToProps = state => ({
    game_data: state.game_data
});

const mapDispatchToProps = (dispatch) => ({
    get_game_data: (data) => dispatch(get_game_data(data)),
    send_game_data: (data) => dispatch(send_game_data(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component)